from fastapi import FastAPI
from routers import example_router

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello, FastAPI!"}

# Include routers
app.include_router(example_router.router, prefix="/example")
