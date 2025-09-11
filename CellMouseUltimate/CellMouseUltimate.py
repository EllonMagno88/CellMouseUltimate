from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
import socket
import serial
import plyer
import pyautogui



class HomeScreen(Screen):
    pass


class AncoragemUSB(Screen):
    pass

class AncoragemWIFI(Screen):
    pass

class AncoragemBLUETOOTH(Screen):
    pass

class AncoragemCELULAR(Screen):
    pass


class MeuGerenciador(ScreenManager):
    pass


class MeuApp(App):
    def build(self):
        return MeuGerenciador()


if __name__ == "__main__":
    MeuApp().run()

