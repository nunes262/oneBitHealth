import React, { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
    Vibration,
    Pressable,
    FlatList,
} from "react-native";
import { styles } from "./FormStyle";
import { ResultImg } from "./ResultImc/ResultImc";

export const Form = () => {
    const [hight, setHight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errosMensage, setErrorsMensage] = useState(null);
    const [imcList, setImcList] = useState([]);

    const calculateImc = () => {
        let heightFormat = hight.replace(",", ".");
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [
            ...arr,
            { id: new Date().getTime(), imc: totalImc },
        ]);
        setImc(totalImc);
    };

    const verificationIMC = () => {
        if (imc === null) {
            Vibration.vibrate();
            setErrorsMensage("campo obrigatório");
        }
    };

    const validate = () => {
        console.log(imcList);
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
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listImc}
                data={imcList.reverse()}
                key={({ item }) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.ResultImcItem}>
                            <Text style={styles.textResultItem}>
                                Resultado IMC =
                            </Text>
                            {item.imc}
                        </Text>
                    );
                }}
            />
        </View>
    );
};
