import { View, Text, StyleSheet } from "react-native";

function ManageExpense(): JSX.Element {
    console.log('Manage Expense JSX returned');
    return (
        <View style={styles.showBorder}>
            <Text style={styles.text}>Manage Expense Screen</Text>
        </View>
    );
}

export default ManageExpense;


const styles = StyleSheet.create({
    consumeSpace: {
        flex: 1
    },
    showBorder: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
    text: {
        flex: 1,
        color: 'black'
    }
});