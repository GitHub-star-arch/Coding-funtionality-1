import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonorScreen from '../Screens/Donor';
import DonateScreen from '../Screens/Donate';
import { Icon } from 'react-native-elements';

export const AppTabNavigator = createBottomTabNavigator({
    Donors: {
        screen: DonorScreen,
        navigationOptions: {
            tabBarIcon: (<Icon name='hands-helping' type='FontAwesome5' />),
            tabBarLabel: "Our Wonderful Donors"
        }
    },
    Donate: {
        screen: DonateScreen,
        navigationOptions: {
            tabBarIcon: (<Icon name='charity' type='MaterialCommunityIcons' />),
            tabBarLabel: "One Of Us"
        }
    },
})