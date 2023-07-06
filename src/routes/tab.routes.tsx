
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'

import Home from '../screens/Home';
import Products from '../screens/Products';
import Profile from '../screens/Profile';
import Requestt from '../screens/Requestt';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Início"
            component={Home}
            options={{
                tabBarIcon:({color, size}) => <Feather name="home" color={color} size={size} />
            }}
            />

           
            <Tab.Screen
            name="Produtos"
            component={Products}
            options={{
                tabBarIcon:({color, size}) => <Feather name="search" color={color} size={size} />
            }}
            />

            <Tab.Screen
            name="Perfil"
            component={Profile}
            options={{
                tabBarIcon:({color, size}) => <MaterialCommunityIcons name="face-man-profile" color={color} size={size} 
                />
                
                
            }}
            
            />

           
            <Tab.Screen
            name="requestt"
            component={Requestt}
            options={{
                tabBarIcon:({color, size}) => < AntDesign name="shoppingcart" color={color} size={size} 
                />
            }}
            
            />


           
        </Tab.Navigator>
    )
}