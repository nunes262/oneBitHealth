import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Title } from "./src/components/Title/Title";
import { Form } from "./src/components/form/Form";

export default function App() {
    return (
        <View style={styles.container}>
            <Title />
            <Form />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e5e5",
        paddingTop: 80,
    },
});
