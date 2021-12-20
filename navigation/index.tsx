/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabTwoScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';
import TabSixScreen from '../screens/TabSixScreen';
import TabSevenScreen from '../screens/TabSevenScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => (
            <Image
                source={require('../assets/images/home.png')}
                resizeMode="contain"
                style={{width: 26, height: 26, tintColor: color}}
              />
          ),
          
        })}
      />
      <BottomTab.Screen
         name="TabTwo"
         component={TabTwoScreen}
         options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
          title: 'Tab Two',
          tabBarIcon: ({ color }) => (
            <Image
                source={require('../assets/images/espec.png')}
                resizeMode="contain"
                style={{width: 26, height: 26, tintColor: color}}
              />
          ),
          
        })}
         
       />
       <BottomTab.Screen
         name="TabThree"
         component={TabThreeScreen} 
          options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
          title: 'Tab Three',
          tabBarIcon: ({ color }) => (
            <Image
                source={require('../assets/images/beaury-icon.png')}
                resizeMode="contain"
                style={{width: 26, height: 26, tintColor: color}}
              />
          ),
          
        })}
         
       />
       <BottomTab.Screen
         name="TabFour"
         component={TabFourScreen}
         options={({ navigation }: RootTabScreenProps<'TabFour'>) => ({
          title: 'Tab Four',
          tabBarIcon: ({ color }) => (
            <Image
                source={require('../assets/images/mensaje-icon.png')}
                resizeMode="contain"
                style={{width: 26, height: 26, tintColor: color}}
              />
          ),
          
        })}
         
         
       />
        <BottomTab.Screen
         name="TabFive"
         component={TabFiveScreen}
         options={({ navigation }: RootTabScreenProps<'TabFive'>) => ({
          title: 'Tab Five',
          tabBarIcon: ({ color }) => (
            <Image
                source={require('../assets/images/derma-icon.png')}
                resizeMode="contain"
                style={{width: 26, height: 26, tintColor: color}}
              />
          ),
          
        })}
         
       />
        <BottomTab.Screen
         name="TabSix"
         component={TabSixScreen}
         options={({ navigation }: RootTabScreenProps<'TabSix'>) => ({
          title: 'Tab Six',
          tabBarIcon: ({ color }) => (
            <Image
                source={require('../assets/images/catalogo-icon.png')}
                resizeMode="contain"
                style={{width: 26, height: 26, tintColor: color}}
              />
          ),
          
        })}
         
       />
        <BottomTab.Screen
         name="TabSeven"
         component={TabSevenScreen}
         options={({ navigation }: RootTabScreenProps<'TabSeven'>) => ({
          title: 'Tab Seven',
          tabBarIcon: ({ color }) => (
            <Image
                source={require('../assets/images/notificaciones-icon.png')}
                resizeMode="contain"
                style={{width: 26, height: 26, tintColor: color}}
              />
          ),
          
        })}
         
       />
      
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}


