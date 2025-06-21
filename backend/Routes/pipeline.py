from fastapi import APIRouter, HTTPException
from Models.pipeline import PipelineData
from Logic.dag_utils import check_if_dag

router = APIRouter()

@router.post("/parse")
async def parse_pipeline(payload: PipelineData):
    try:
        nodes = payload.nodes
        edges = payload.edges

        if not nodes or not edges:
            raise HTTPException(status_code=400, detail="Nodes or edges are missing.")

        is_dag = check_if_dag(nodes, edges)

        return {
            "success": True,
            "num_nodes": len(nodes),
            "num_edges": len(edges),
            "is_dag": is_dag
        }

    except HTTPException as e:
        raise e

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }
