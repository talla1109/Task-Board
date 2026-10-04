export default function Header({ total, doneCount }) {
  const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  return (
    <header>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        What needs doing today?
      </h1>
      <p className="mt-3 max-w-xl text-base text-ink/70">
        Write down a task, tick it off when it is finished, and delete it when
        you no longer need it.
      </p>

      <div className="mt-6" aria-live="polite">
        <div className="flex items-baseline justify-between text-sm font-medium">
          <span>
            {doneCount} of {total} {total === 1 ? "task" : "tasks"} done
          </span>
          <span className="text-ink/60">{percent}%</span>
        </div>
        <div
          className="mt-2 h-2.5 overflow-hidden rounded-full bg-line"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Tasks completed"
        >
          <div
            className="h-full rounded-full bg-done transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </header>
  );
}
