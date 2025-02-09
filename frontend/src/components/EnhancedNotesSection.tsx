import Loader from "./Loader";

interface EnhancedNotesSectionProps {
  notes: string;
  isLoading?: boolean;
  error?: string;
}

export default function EnhancedNotesSection({
  notes,
  isLoading,
  error,
}: EnhancedNotesSectionProps) {
  return isLoading ? (
    <Loader />
  ) : error ? (
    <div className="text-center text-red-500 bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-medium">Error Enhancing Notes</h2>
      <p className="text-sm">{error}</p>
    </div>
  ) : notes?.length ? (
    <div className="text-center space-y-2 bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-medium">Enhanced Notes</h2>
      <p className="text-sm text-gray-500">{notes}</p>
    </div>
  ) : null;
}
