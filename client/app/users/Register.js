import React from "react";
import { View, Button, StyleSheet, TouchableOpacity,Text } from "react-native";
import RegisterComponent from "../../Components/Register.js";
import { Link } from "expo-router";

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <RegisterComponent />
        <Link
          href="/users/Login"
          component={TouchableOpacity}
          style={styles.button}
        >
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
  },
  center: {
    alignItems: "center",
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
});
