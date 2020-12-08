import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OilBookScreen from '../screen/03-OilBook-Screen'
import TicketScreen from '../screen/02-Ticket-Screen'
import FixEveryDayScreen from '../screen/04-FixEveryday-Screen'
import RevenueExpenditureScreen from '../screen/05-RevenueExpenditure-Screen'
import CommandBookScreen from '../screen/06-CommandBook-screen'
import LoginScreen from '../screen/01-LoginScreen'
import HomeScreen from '../screen/00-HomeScreen'
import SettingAccountScreen from '../screen/07-SettingAccount-Screen'
const Stack = createStackNavigator()

const AppStack = () =>{
    return(
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown:false}}
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Home" component={HomeTab}/>
        </Stack.Navigator>
    )
}

const HomeTab = () => {
  return(
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      >
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Account" component={SettingAccountScreen}/>
          <Stack.Screen name="Ticket" component={TicketScreen}/>
          <Stack.Screen name="Oilbook" component={OilBookScreen}/>
          <Stack.Screen name="Fix" component={FixEveryDayScreen}/>
          <Stack.Screen name="Revenue" component={RevenueExpenditureScreen}/>
          <Stack.Screen name="Command" component={CommandBookScreen}/>
      </Stack.Navigator>
  )
}

export const AppNavigator = () =>  <NavigationContainer>{AppStack()}</NavigationContainer>