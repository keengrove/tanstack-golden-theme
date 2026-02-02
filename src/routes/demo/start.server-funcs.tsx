import { useCallback, useEffect, useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

interface Todo {
  id: number;
  name: string;
}

const STORAGE_KEY = "tanstack-start.todos";
const DEFAULT_TODOS: Todo[] = [
  { id: 1, name: "Get groceries" },
  { id: 2, name: "Buy a new phone" },
];

const getTodos = createServerFn({
  method: "GET",
}).handler(async () => {
  return DEFAULT_TODOS;
});

const addTodo = createServerFn({ method: "POST" })
  .inputValidator((d: string) => d.trim())
  .handler(async ({ data }) => {
    if (!data) {
      throw new Error("Todo name is required");
    }

    const newTodo: Todo = {
      id: Date.now(),
      name: data,
    };

    return newTodo;
  });

export const Route = createFileRoute("/demo/start/server-funcs")({
  component: Home,
  loader: async () => await getTodos(),
});

function Home() {
  const router = useRouter();
  const initialTodos = Route.useLoaderData();

  const [todos, setTodos] = useState<Todo[]>(initialTodos ?? []);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setTodos(JSON.parse(raw) as Todo[]);
        return;
      }
      setTodos(DEFAULT_TODOS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_TODOS));
    } catch {
      setTodos(DEFAULT_TODOS);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch {
      // ignore storage errors
    }
  }, [todos]);

  const submitTodo = useCallback(async () => {
    const newTodo = await addTodo({ data: todo });
    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
    router.invalidate();
  }, [addTodo, todo, router]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-800 to-black p-4 text-white"
      style={{
        backgroundImage:
          "radial-gradient(50% 50% at 20% 60%, #23272a 0%, #18181b 50%, #000000 100%)",
      }}
    >
      <div className="w-full max-w-2xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10">
        <h1 className="text-2xl mb-2">Start Server Functions - Todo Example</h1>
        <ul className="mb-4 space-y-2">
          {todos?.map((t) => (
            <li
              key={t.id}
              className="bg-white/10 border border-white/20 rounded-lg p-3 backdrop-blur-sm shadow-md"
            >
              <span className="text-lg text-white">{t.name}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitTodo();
              }
            }}
            placeholder="Enter a new todo..."
            className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <button
            disabled={todo.trim().length === 0}
            onClick={submitTodo}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
}
