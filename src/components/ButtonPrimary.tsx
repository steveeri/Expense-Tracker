import {Button} from "react-native";

export default function ButtonPrimary() {
    return <Button title="My stupid button" onPress={(onPressHandler)} />
}

function onPressHandler() {
    console.log('Hello we hit a button');
}
