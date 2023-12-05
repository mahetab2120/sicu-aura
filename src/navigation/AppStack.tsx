import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash/Splash";
import { navigationConstants } from "../constants/NavigationConstant";
import Introduction from "../screens/Introduction/IntroDuction";
import Login from "../screens/Authentication/Login/Login";
import Registration from "../screens/Authentication/Registration/Registration";
import ContactList from "../components/ContactList";

const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">

      <Stack.Screen name={navigationConstants.SPLASH} component={Splash} />
      <Stack.Screen name={navigationConstants.INTRODUCTION} component={Introduction} />
      <Stack.Screen name={navigationConstants.LOGIN} component={Login} />
      <Stack.Screen name={navigationConstants.REGISTRATION} component={Registration} />
      <Stack.Screen name={navigationConstants.CONTACT_LIST} component={ContactList} />
    </Stack.Navigator>
  );
};
