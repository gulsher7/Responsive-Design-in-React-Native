import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Image } from 'react-native';
import imagePath from '../constants/imagePath';
import navgiationStrings from '../constants/navgiationStrings';
import { Home, Profile, Booking } from '../Screens';
import colors from '../styles/colors';


const BototmTab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <BototmTab.Navigator
        
        screenOptions={{
            headerShown:false,
            tabBarInactiveTintColor: colors.blackOpacity50,
            tabBarActiveTintColor: colors.themeColor
        }}
        >
            <BototmTab.Screen
                name={navgiationStrings.HOME} component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{
                                tintColor: focused ? colors.themeColor : colors.blackOpacity50
                            }} source={imagePath.home} />
                        )
                    }
                }}
            />
            <BototmTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{
                                tintColor: focused ? colors.themeColor :  colors.blackOpacity50
                            }} source={imagePath.booking} />
                        )
                    }
                }}
                name={navgiationStrings.BOOKING} component={Booking}
            />
            <BototmTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{
                                tintColor: focused ? colors.themeColor :  colors.blackOpacity50
                            }} source={imagePath.profile} />
                        )
                    }
                }}
                name={navgiationStrings.PROFILE} component={Profile}
            />
        </BototmTab.Navigator>
    );
}