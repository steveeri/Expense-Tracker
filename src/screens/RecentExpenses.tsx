import { View, Text, StyleSheet } from "react-native";

function RecentExpenses(): JSX.Element {
    console.log('Recent Expenses JSX returned');
    return (
        <View style={styles.showBorder}>
            <Text style={styles.text}>Recent Expenses Screen</Text>
        </View>
    );
}

export default RecentExpenses;


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