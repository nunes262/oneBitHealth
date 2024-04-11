import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ResultImcStyle";

export const ResultImg = (props) => {
    return (
        <View>
            <Text style={styles.information}>{props.messageImc}</Text>
            <Text style={styles.resultImg}>{props.resultImc}</Text>
        </View>
    );
};
