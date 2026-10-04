const STEPS = [
  {
    title: "Add a task",
    body: "Type your task in the text box, then press the Add task button (or the Enter key). It appears at the top of the list as Not done.",
  },
  {
    title: "Mark a task as Done or Not Done",
    body: "Press Mark done on a task to finish it. The task is crossed out and its badge changes to Done. Press Mark not done to move it back.",
  },
  {
    title: "Delete a task",
    body: "Press the Delete button on a task to remove it. Use Clear done tasks to remove every finished task, or Reset list to start over.",
  },
];

export default function Guide() {
  return (
    <section aria-labelledby="guide-title" className="mt-12">
      <h2 id="guide-title" className="text-2xl font-bold tracking-tight">
        How to use this app
      </h2>
      <ol className="mt-5 space-y-5">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-1 max-w-xl text-ink/70">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
