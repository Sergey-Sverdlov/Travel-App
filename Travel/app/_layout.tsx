import React from 'react';
import {View, Text} from 'react-native'
import {Tabs} from 'expo-router'
import TabBar from "../components/TabBar";

const _layout = () => {
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home"
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore"
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile"
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: "Create"
                }}
            />
        </Tabs>
    );
};

export default _layout;
