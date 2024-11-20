import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TextInput, Button, Switch } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [faceIDEnabled, setFaceIDEnabled] = useState(false);
  const router = useRouter();

  const toggleFaceID = () => setFaceIDEnabled(!faceIDEnabled);

  const handleResetPassword = () => {
    // Add logic to reset the password here (e.g., make an API call)
    console.log("Password reset successful");
    router.push("/"); // Navigate back to the root route (login screen)
  };

  return (
    <LinearGradient colors={["#FFDEE9", "#B5FFFC"]} style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/avatar.jpg")} style={styles.logo} />
        <Text style={styles.title}>Choose a Password</Text>
        <Text style={styles.subtitle}>Input your password for access your account</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Enter your password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="outlined"
          activeOutlineColor="palevioletred"
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Enable Face ID</Text>
          <Switch
            value={faceIDEnabled}
            onValueChange={toggleFaceID}
            color="palevioletred"
          />
        </View>

        <Button
          onPress={() => console.log("Login clicked")}
          mode="contained"
          style={styles.submitButton}
        >
          Submit
        </Button>

        <View style={styles.footer}>
         <Text
            style={styles.loginLink}
            onPress={() => router.push("/")}
          >
           I'll do this later
          </Text>
          
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "palevioletred",
  },
  subtitle: {
    fontSize: 15,
    color: "black",
    opacity: 0.8,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  submitButton: {
    borderRadius: 20,
    backgroundColor: "palevioletred",
    paddingVertical: 10,
  },
  switchLabel:{
    position: "relative",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  loginLink: {
    color: "gray",
    textDecorationLine: "underline",
  },
});

export default ForgotPassword;