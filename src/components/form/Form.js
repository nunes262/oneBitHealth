import React, { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
} from "react-native";
import { ResultImg } from "../ResultImc/ResultImc";
import { styles } from "./FormStyle";

export const Form = () => {
    const [hight, setHight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    const calculateImc = () => {
        if (weight != null && hight != null) {
            setImc(
                (weight / (parseFloat(hight) * parseFloat(hight))).toFixed(2)
            );
            setMessageImc("Seu IMC é:");
            setTextButton("Calcular Novamente");
        } else {
            setMessageImc("Altura ou peso inválidos");
            setTextButton("Calcular");
        }
        Keyboard.dismiss();
    };

    const validate = () => {
        if (hight != null && weight != null) {
            calculateImc();
            setHight(null);
            setWeight(null);
            return;
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura");
    };

    return (
        <View style={styles.FormContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    value={hight}
                    onChangeText={setHight}
                    placeholder="Ex: 1.7"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    value={weight}
                    onChangeText={setWeight}
                    placeholder="Ex: 60"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    onPress={validate}
                    style={styles.ButtonCalculate}
                >
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImg messageImc={messageImc} resultImc={imc} />
        </View>
    );
};
