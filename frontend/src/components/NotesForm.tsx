import { useState } from "react";

interface NotesFormProps {
  onSubmit: (title: string) => void;
  isDisabled?: boolean;
}

export default function NotesForm({ onSubmit, isDisabled }: NotesFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
  }

  return (
    <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <textarea
          disabled={isDisabled}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your hackathon notes here"
          className="rounded-md border border-gray-400 p-2 mb-2"
          rows={4}
        />
        <button
          disabled={isDisabled}
          type="submit"
          className="w-full rounded-md bg-slate-900 text-white hover:bg-slate-800 p-2"
        >
          Enhance Notes
        </button>
      </form>
    </div>
  );
}
