import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskFilters from "./components/TaskFilters.jsx";
import TaskList from "./components/TaskList.jsx";
import Guide from "./components/Guide.jsx";
import Footer from "./components/Footer.jsx";

const STORAGE_KEY = "todo-tasks";

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export default function App() {
  // React state: the list of tasks and the active filter
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState("all");

  // Keep tasks after a page refresh
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      /* storage unavailable: app still works in memory */
    }
  }, [tasks]);

  // Feature 1: add a task
  const addTask = (text) => {
    setTasks((prev) => [{ id: Date.now(), text, done: false }, ...prev]);
  };

  // Feature 2: toggle Done / Not Done
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  // Feature 3: delete one task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Feature 4: clear finished tasks / reset everything
  const clearDone = () => setTasks((prev) => prev.filter((task) => !task.done));
  const resetAll = () => {
    if (tasks.length === 0) return;
    if (window.confirm("Remove all tasks? This cannot be undone.")) setTasks([]);
  };

  const doneCount = tasks.filter((task) => task.done).length;
  const visibleTasks = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "notdone") return !task.done;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-14">
        <Header total={tasks.length} doneCount={doneCount} />

        <section
          aria-labelledby="board-title"
          className="mt-8 rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-6"
        >
          <h2 id="board-title" className="sr-only">
            To-do list
          </h2>
          <TaskForm onAdd={addTask} />
          <TaskFilters
            filter={filter}
            onChange={setFilter}
            counts={{
              all: tasks.length,
              notdone: tasks.length - doneCount,
              done: doneCount,
            }}
          />
          <TaskList
            tasks={visibleTasks}
            totalTasks={tasks.length}
            filter={filter}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
          <div className="mt-5 flex flex-col gap-2 border-t border-line pt-4 sm:flex-row sm:justify-end">
            <button
              onClick={clearDone}
              disabled={doneCount === 0}
              className="rounded-lg border border-line px-4 py-2 text-sm font-medium transition hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              Clear done tasks
            </button>
            <button
              onClick={resetAll}
              disabled={tasks.length === 0}
              className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Reset list
            </button>
          </div>
        </section>

        <Guide />
      </main>
      <Footer />
    </div>
  );
}
