import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Camisetas from './camisetas';
import Calças from './calças';
import Bermudas from './bermudas';
import Couro from './Couro';
import Blusas  from './blusas';

const Tab = createBottomTabNavigator();

export default function Mostruario() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Camisas" component={Camisetas} />
      <Tab.Screen name="Calcas" component={Calças} />
      <Tab.Screen name="Acessorios" component={Bermudas} />
      <Tab.Screen name="Camisas" component={Couro} />
      <Tab.Screen name="Calcas" component={Blusas} />
    </Tab.Navigator>
  );
}
