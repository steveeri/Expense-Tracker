import { View, Text, StyleSheet } from "react-native";

function AllExpenses(): JSX.Element {
    console.log('All Expenses JSX returned');
    return (
        <View style={styles.showBorder}>
            <Text style={styles.text}>All Expenses Screen</Text>
        </View>
    );
}

export default AllExpenses;


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