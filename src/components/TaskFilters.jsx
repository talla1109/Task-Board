const OPTIONS = [
  { value: "all", label: "All" },
  { value: "notdone", label: "Not done" },
  { value: "done", label: "Done" },
];

export default function TaskFilters({ filter, onChange, counts }) {
  return (
    <div
      role="group"
      aria-label="Filter tasks"
      className="mt-6 inline-flex rounded-lg bg-paper p-1"
    >
      {OPTIONS.map((option) => {
        const active = filter === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            aria-pressed={active}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-accent sm:px-4 ${
              active ? "bg-white text-ink shadow-sm" : "text-ink/60 hover:text-ink"
            }`}
          >
            {option.label}{" "}
            <span className="text-ink/50">{counts[option.value]}</span>
          </button>
        );
      })}
    </div>
  );
}
