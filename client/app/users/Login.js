import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Button } from "react-native";
import LoginComponent from "../../Components/Login.js"
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <LoginComponent />
        <Link
          href="/users/Register"
          component={TouchableOpacity}
          style={styles.button}
        >
          <Text>Register</Text>
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
