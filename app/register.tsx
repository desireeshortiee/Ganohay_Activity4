import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { TextInput, Button, Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <LinearGradient colors={["#FFDEE9", "#B5FFFC"]} style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          source={require("../assets/avatar.jpg")} // Replace with your avatar image path
          style={styles.avatar}
        />
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create your account</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          left={<TextInput.Icon icon="account" />}
          mode="outlined"
          activeOutlineColor="palevioletred"
        />
        <TextInput
          label="Email address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          left={<TextInput.Icon icon="email" />}
          mode="outlined"
          activeOutlineColor="palevioletred"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
          mode="outlined"
          activeOutlineColor="palevioletred"
        />
        <TextInput
          label="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
          mode="outlined"
          activeOutlineColor="palevioletred"
        />

        <Button
          onPress={() => console.log("Register clicked")}
          mode="contained"
          style={styles.registerButton}
        >
          REGISTER
        </Button>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.linkText}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  avatar: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "palevioletred",
  },
  subtitle: {
    fontSize: 16,
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
  registerButton: {
    borderRadius: 10,
    backgroundColor: "palevioletred",
    paddingVertical: 10,
  },
  footerText: {
    textAlign: "center",
    marginTop: 20,
    color: "black",
  },
  linkText: {
    fontWeight: "bold",
    color: "#FFD700",
  },
});