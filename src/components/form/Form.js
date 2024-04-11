import React, { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
    Vibration,
    Pressable,
} from "react-native";
import { ResultImg } from "../ResultImc/ResultImc";
import { styles } from "./FormStyle";

export const Form = () => {
    const [hight, setHight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errosMensage, setErrorsMensage] = useState(null);

    const calculateImc = () => {
        let heightFormat = hight.replace(",", ".");
        return setImc((weight / (heightFormat * heightFormat)).toFixed(2));
    };

    const verificationIMC = () => {
        if (imc === null) {
            Vibration.vibrate();
            setErrorsMensage("campo obrigatório");
        }
    };

    const validate = () => {
        if (hight != null && weight != null) {
            calculateImc();
            setHight(null);
            setWeight(null);
            setMessageImc("Seu imc e igual:");
            setTextButton("Calcular novamente");
            Keyboard.dismiss();
        } else {
            verificationIMC();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e a altura");
        }
    };

    return (
        <View style={styles.FormContext}>
            {imc == null ? (
                <Pressable style={styles.form} onPress={Keyboard.dismiss}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMensage}>{errosMensage}</Text>
                    <TextInput
                        style={styles.input}
                        value={hight}
                        onChangeText={setHight}
                        placeholder="Ex: 1.7"
                        keyboardType="numeric"
                    />

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMensage}>{errosMensage}</Text>
                    <TextInput
                        style={styles.input}
                        value={weight}
                        onChangeText={setWeight}
                        placeholder="Ex: 60"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                        onPress={() => validate()}
                        style={styles.ButtonCalculate}
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            ) : (
                <View style={styles.exibitResult}>
                    <ResultImg messageImc={messageImc} resultImc={imc} />
                    <TouchableOpacity
                        onPress={() => validate()}
                        style={styles.ButtonCalculate}
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
