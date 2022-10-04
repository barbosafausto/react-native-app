import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 
import Pagina1 from './Tela1';
import SecondPage from './Tela2';
 
const Stack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen
          name="Tela1"
          component={Pagina1}
          options={{
            title: 'Tela 1',
            headerStyle: {
              backgroundColor: '#0000FF', 
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Tela2"
          component={SecondPage}
          options={{
            title: 'Tela 2', 
            headerStyle: {
              backgroundColor: '#0000FF', 
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;