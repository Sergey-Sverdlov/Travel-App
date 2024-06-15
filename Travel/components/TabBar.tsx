import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {AntDesign, Feather} from "@expo/vector-icons";

const TabBar = ({state, descriptors, navigation}: any) => {
    const primaryColor = '#0891b2';
    const greyColor = '#737373';
    const icons = {
        index: (props) => <AntDesign name="home" size={26} color={greyColor} {...props} />,
        explore: (props) => <Feather name="compass" size={26} color={greyColor} {...props} />,
        create: (props) => <AntDesign name="pluscircleo" size={26} color={greyColor} {...props} />,
        profile: (props) => <AntDesign name="user" size={26} color={greyColor} {...props} />,
    }

    return (
        <View style={styles.TabBar}>
            {state.routes.map((route: any, index: any) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                if (['_sitemap', '+not-found'].includes(route.name)) {
                    return null
                }
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        style={styles.tabbarItem}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        {
                            icons[route.name]({
                                color: isFocused ? primaryColor : greyColor
                            })
                        }
                        <Text style={{
                            color: isFocused ? primaryColor : greyColor,
                            fontSize: 11
                        }}
                        >
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    TabBar: {
        position: "absolute",
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        borderCurve: "continuous",
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }
})
export default TabBar;
