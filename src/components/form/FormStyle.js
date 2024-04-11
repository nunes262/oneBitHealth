import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    FormContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        paddingTop: 15,
        marginTop: 20,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 20,
    },
    formLabel: {
        color: "black",
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        height: 40,
        padding: 10,
        backgroundColor: "#f6f6f6",
        borderRadius: 10,
    },
    textButton: {
        color: "#fff",
        fontSize: 20,
    },
    ButtonCalculate: {
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 40,
        backgroundColor: "#FF0043",
        marginTop: 20,
    },
    errorMensage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
    },
    exibitResult: {
        width: "100%",
        height: "50%",
    },
});
