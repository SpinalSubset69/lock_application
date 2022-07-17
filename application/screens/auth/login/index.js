import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { styles } from "./styles";
import { DARK_THEME } from "../../../constants";
import { FETCH_LOGIN } from "../../../api";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revealPassword, setRevealPassword] = useState(false);

  //ERRORS STATE
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const ValidateEmail = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) setEmailError("Email format is not valid.");
    if (isValid) setEmailError("");
  };

  const ValidatePassword = () => {
    const isValid = password.length > 0;
    if (!isValid) setPasswordError("Password length must be major than 0");
    if (isValid) setPasswordError("");
  };

  const fethLogin = async () => {
    ValidateEmail();
    ValidatePassword();    

    if (emailError.length === 0 && passwordError.length === 0) {      
      try {
        const response = await FETCH_LOGIN({ email, password });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={DARK_THEME.MAIN_COLOR} style="light" />

      <View style={styles.contentContainer}>
        <View style={styles.textInputContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
            placeholderTextColor={DARK_THEME.GRAY_COLOR}
            placeholder="example@example.com"
          />
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        </View>

        <View style={styles.textInputContainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            placeholderTextColor={DARK_THEME.GRAY_COLOR}
            secureTextEntry={!revealPassword}
          />
          <Ionicons
            onPress={() => setRevealPassword(!revealPassword)}
            style={styles.icon}
            name={revealPassword ? "eye" : "eye-off"}
            size={35}
            color={DARK_THEME.GRAY_COLOR}
          />
          {passwordError ? (
            <Text style={styles.error}>{passwordError}</Text>
          ) : null}
        </View>

        <TouchableOpacity style={styles.button} onPress={fethLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Already have an accout? Log in</Text>
      </View>
    </View>
  );
}

export default LoginComponent;
