import TaskItem from "./TaskItem.jsx";

const EMPTY_MESSAGES = {
  all: "No tasks yet. Type one above and press Add task.",
  notdone: "Nothing left to do. Every task is done.",
  done: "No finished tasks yet. Mark a task as done to see it here.",
};

export default function TaskList({ tasks, totalTasks, filter, onToggle, onDelete }) {
  if (tasks.length === 0) {
    const message =
      totalTasks === 0 ? EMPTY_MESSAGES.all : EMPTY_MESSAGES[filter];
    return (
      <p className="mt-4 rounded-xl border border-dashed border-line px-4 py-10 text-center text-ink/60">
        {message}
      </p>
    );
  }

  return (
    <ul className="mt-4 space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
