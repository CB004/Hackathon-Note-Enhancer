import { useState } from "react";
import { generateEnhancedNotes } from "./api/EnhancedNotes";
import EnhancedNotes from "./components/EnhancedNotesSection";
import NotesForm from "./components/NotesForm";

function App() {
  const [enhancedNotes, setEnhancedNotes] = useState("");
  const [notesLoading, setNotesLoading] = useState(false);
  const [notesError, setNotesError] = useState<string>();

  const enhanceNotes = (notes: string) => {
    setNotesLoading(true);
    setNotesError(undefined);
    generateEnhancedNotes({ notes })
      .then((res) => setEnhancedNotes(res.notes))
      .catch(() => setNotesError("Error enhancing notes. Please try again."))
      .finally(() => setNotesLoading(false));
  };

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">
        CxC 2025 Hackathon Note Enhancer
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <NotesForm onSubmit={enhanceNotes} />
        <EnhancedNotes
          isLoading={notesLoading}
          notes={enhancedNotes}
          error={notesError}
        />
      </div>
    </main>
  );
}

export default App;
