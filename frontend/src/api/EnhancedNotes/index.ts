import axios from "axios";
import {
  GenerateEnhancedNotesRequest,
  GenerateEnhancedNotesResponse,
} from "./types";

const BASE_URL = import.meta.env.API_BASE_URL ?? "http://localhost:8000";

export function generateEnhancedNotes(
  req: GenerateEnhancedNotesRequest
): Promise<GenerateEnhancedNotesResponse> {
  return axios
    .post<GenerateEnhancedNotesResponse>(
      `${BASE_URL}/hackathon/llm_tooling/notes_enhancement`,
      req,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
}
