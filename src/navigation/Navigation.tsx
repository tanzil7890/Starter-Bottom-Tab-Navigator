// navigation/navigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/Colors';
import HomeScreen from '../Screen/Home';
import BookScreen from '../Screen/Book';
import MeditationScreen from '../Screen/Meditation'
import AboutScreen from '../Screen/About'
import { Pressable, useColorScheme } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  }
const AppNavigator = () => {
    const colorScheme = useColorScheme();
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].iconColor,
        //tabBarStyle: {paddingVertical: 8, height: 50, paddingBottom: 2},
        tabBarStyle: { height: 70, paddingBottom: 0, },
        tabBarItemStyle: { justifyContent: 'flex-start', alignItems: 'center', marginTop: 5, marginBottom: 15  }
        //tabBarLabelStyle: { fontWeight: 'bold' } // Change the font weight of the tab bar labels
        
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
          
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 11 }
        }}/>
      <Tab.Screen name="Meditation Screen" component={MeditationScreen} options={{
          title: 'Mindfulness',
          //tabBarIcon: ({ color }) => <Image source={require('../../../assets/icons/meditation.png')} />,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="meditation" size={25} color={color} />,
          
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 11 }
        }}/>
      <Tab.Screen name="Book Screen" component={BookScreen} options={{
          title: 'Book Doctor',
          tabBarIcon: ({ color }) => <Fontisto name="doctor" size={24} color={color} />,
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 11 }
        }}/>
      <Tab.Screen name="About Screen" component={AboutScreen} options={{
          title: 'About',
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 11 }
          
        }}/>
    </Tab.Navigator>
  );
};

export default AppNavigator;
