from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Routes.pipeline import router as pipeline_router  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

app.include_router(pipeline_router, prefix="/pipelines")
