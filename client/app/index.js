import Register from "../Components/Register.js";
import { Text, View, Button, StyleSheet,TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Welcome to the App</Text>
      <View style={styles.buttonContainer}>
        <Link href="/users/Register" component={TouchableOpacity} style={styles.button}>
          <Text>Register</Text>
        </Link>
        <View style={styles.buttonGap} />
        <Link href="/users/Login" component={TouchableOpacity} style={styles.button}>
          <Text>Login</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
  buttonGap: {
    width: 10,
  },
});
