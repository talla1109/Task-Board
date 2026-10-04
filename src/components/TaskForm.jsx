import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) {
      setError("Type a task before adding it.");
      return;
    }
    onAdd(trimmed);
    setText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="new-task" className="mb-2 block text-sm font-semibold">
        New task
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="new-task"
          type="text"
          value={text}
          maxLength={120}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError("");
          }}
          placeholder="e.g. Finish the React laboratory"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? "task-error" : undefined}
          className="min-w-0 flex-1 rounded-lg border border-line bg-white px-4 py-3 text-base placeholder:text-ink/40 focus:border-accent focus:outline-2 focus:outline-accent/30"
        />
        <button
          type="submit"
          className="rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Add task
        </button>
      </div>
      {error && (
        <p id="task-error" role="alert" className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}
