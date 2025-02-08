from pydantic import BaseModel
from typing import List


class NotesEnhancementReq(BaseModel):
    notes: str


class NotesEnhancementRes(BaseModel):
    notes: str
