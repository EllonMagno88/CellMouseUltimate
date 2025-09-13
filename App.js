import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import { registerRootComponent } from 'expo'

// importacao das telas
import TelaPrincipal from './src/TelaPrincipal'
import AncoragemWIFI from './src/AncoragemWIFI'
import AncoragemBluetooth from './src/AncoragemBluetooth'
import AncoragemUSB from './src/AncoragemUSB'
import AncoragemCelular from './src/AncoragemCelular'


const { Navigator, Screen } = createNativeStackNavigator()


const App = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }} initialRouteName='TelaPrincipal'>
				<Screen name='TelaPrincipal' component={TelaPrincipal}/>
        <Screen name='AncoragemWIFI' component={AncoragemWIFI}/>
        <Screen name='AncoragemBluetooth' component={AncoragemBluetooth}/>
				<Screen name='AncoragemUSB' component={AncoragemUSB}/>
        <Screen name='AncoragemCelular' component={AncoragemCelular}/>
			</Navigator>
		</NavigationContainer>
	)
}

// registra o router
registerRootComponent(App)

export default App
