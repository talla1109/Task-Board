export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex flex-col gap-3 rounded-xl border border-line p-4 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <span
          aria-hidden="true"
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
            task.done
              ? "border-done bg-done text-white"
              : "border-line text-transparent"
          }`}
        >
          ✓
        </span>
        <p
          className={`break-words text-base ${
            task.done ? "text-ink/50 line-through" : "text-ink"
          }`}
        >
          {task.text}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:shrink-0">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            task.done ? "bg-done/10 text-done" : "bg-amber-100 text-amber-800"
          }`}
        >
          {task.done ? "Done" : "Not done"}
        </span>
        <button
          onClick={() => onToggle(task.id)}
          className="rounded-lg border border-line px-3 py-1.5 text-sm font-medium transition hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {task.done ? "Mark not done" : "Mark done"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          aria-label={`Delete task: ${task.text}`}
          className="rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-700 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
