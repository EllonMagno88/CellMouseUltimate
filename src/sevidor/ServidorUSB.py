import socketio
import pyautogui
import uvicorn
from fastapi import FastAPI

# Cria servidor Socket.IO (asyncio compatível com v4)
sio = socketio.AsyncServer(cors_allowed_origins="*")
app = FastAPI()
app.mount("/", socketio.ASGIApp(sio))

# Eventos
@sio.event
async def connect(sid, environ):
    print("Cliente conectado:", sid)

@sio.event
async def disconnect(sid):
    print("Cliente desconectado:", sid)

@sio.on("mouse_move")
async def mouse_move(sid, data):
    dx, dy = data["dx"], data["dy"]
    print(f"Movimento dx={dx}, dy={dy}")
    pyautogui.moveRel(dx, dy)

@sio.on("mouse_click")
async def mouse_click(sid, data):
    button = data.get("button", "left")
    print(f"Clique: {button}")
    pyautogui.click(button=button)

@sio.on("mouse_stop")
async def mouse_stop(sid):
    print("Movimento parado")

# Rodar servidor
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
