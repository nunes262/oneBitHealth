import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    FormContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
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
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        height: 40,
        padding: 10,
        backgroundColor: "#f6f6f6",
        borderRadius: 10,
        borderColor: "black",
    },
    textButton: {
        color: "#fff",
        fontSize: 20
    },
    ButtonCalculate: {
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: 40,
        backgroundColor: "#FF0043",
        margin: 12,
    }
});
