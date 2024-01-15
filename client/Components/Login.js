import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //WE CAN AVOID IT
  const [isLogggedin, setisLogggedin] = useState(false);

  const handleInputChange = (fieldName, text) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: text,
    }));
  };

  const handleLogin = () => {
    console.log("Login submitted:", formData);
    setisLogggedin(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formData.username}
          onChangeText={(text) => handleInputChange("username", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
          secureTextEntry
        />
        <Button title="LogIn" onPress={handleLogin} />
      </View>
      {/* WECANAVOID IT  */}
      {isLogggedin && (
        <View style={styles.userInfo}>
          <Text>User Information:</Text>
          <Text>Username: {formData.username}</Text>
          <Text>Email: {formData.email}</Text>
          <Text></Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  form: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333333",
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
  },
  userInfo: {
    marginTop: 20,
  },
  userInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666666",
  },
});
