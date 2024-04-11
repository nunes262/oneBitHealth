import React from "react";
import { Text, View, TouchableOpacity, Share } from "react-native";
import { styles } from "./ResultImcStyle";

export const ResultImg = (props) => {
    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC hoje e ${props.resultImc}`,
        });
    };

    return (
        <View style={styles.resultImg}>
            <Text style={styles.information}>{props.messageImc}</Text>
            <Text style={styles.numberIMC}>{props.resultImc}</Text>
            <View style={styles.boxShare}>
                <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                    <Text style={styles.textButton}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
