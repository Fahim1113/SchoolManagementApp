import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProfileScreen from "../screens/teacher/ProfileScreenTeacher";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import DoAnythingNavigator from "./DoAnythingNavigator";

const Tab = createMaterialBottomTabNavigator();

export default class TeacherTabNavigator extends React.Component {
  render() {
    let a = this.props.route;
    return (
      <Tab.Navigator
        shifting={true}
        labeled={false}
        initialRouteName="Home"
        activeColor="#fff"
        inactiveColor="#fffa"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={{
                  width: RFValue(30),
                  height: RFValue(30),
                }}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={DoAnythingNavigator}
          options={{
            tabBarColor: "#03adfc",
          }}
          initialParams={a}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarColor: "#03fc77",
          }}
          initialParams={a}
        />
      </Tab.Navigator>
    );
  }
}
