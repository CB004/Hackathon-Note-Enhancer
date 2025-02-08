from dotenv import load_dotenv

load_dotenv()

import logging
import os
import json

# API
from fastapi import APIRouter, HTTPException
from .llm_tooling_models import NotesEnhancementReq, NotesEnhancementRes

# AI
import ollama

# env
load_dotenv()
LLM_HOST_URL = os.getenv("LLM_HOST_URL") or "http://localhost:11434"
LLM_MODEL = os.getenv("LLM_MODEL") or "deepseek-r1"


# Initialize Ollama client
client = ollama.Client(host=LLM_HOST_URL)

# Initialize router
router = APIRouter(
    prefix="/hackathon/llm_tooling",
)

# Configure logging
logging.basicConfig(level=logging.INFO)


@router.post("/notes_enhancement", response_model=NotesEnhancementRes)
async def generate_hackathon_notes_enhancement(request: NotesEnhancementReq):
    logging.info(
        f"Received request to generate enhanced hackathon notes: {request.dict()}"
    )

    system_prompt = (
        "You are an experienced software engineer and a data scientist."
        + " You are serving students participating in a hackathon and are tasked with rewriting their notes."
        + " The user will provide you with their rough hackathon notes and you will respond with"
        + " a more concise, re-written version of the notes. Correct any incorrect technical details in the notes."
        + " You will only respond with re-written notes and will write the notes as if you are the user."
        + " The notes you produce should not include any ambiguous or incorrect information."
        + " You must be confident and sure about the content of the notes you produce."
    )

    user_prompt = (
        "Hi, can you enhance my hackathon notes? These are my notes: \n\n"
        + request.notes
    )

    try:
        logging.info(f"Generating chat response from the {LLM_MODEL} model: ")
        response = client.generate(
            model=LLM_MODEL,
            system=system_prompt,
            prompt=user_prompt,
            stream=False,
        )

        logging.info(
            f"Received the following response from {LLM_MODEL}:\n\n{json.dumps(response.response)}"
        )
        return {"notes": json.dumps(response.response)}

    except Exception as e:
        error_string = f"Error: {e}"
        logging.error(error_string)
        raise HTTPException(status_code=500, detail=error_string)
