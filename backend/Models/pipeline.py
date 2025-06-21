from pydantic import BaseModel
from typing import List, Dict

class PipelineData(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]
