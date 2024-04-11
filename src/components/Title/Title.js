import React from "react";
import { View, Text } from "react-native";
import { styles } from "./TitleStyle";

export const Title = () => {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>OneBitHealth</Text>
        </View>
    );
};
