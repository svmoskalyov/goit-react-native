import React, { useState } from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Platform,
  Keyboard,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import backgroundImage from "../assets/images/background.png";
import Avatar from "../components/Avatar";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isHidePassword, setIsHidePassword] = useState(true);

  const handleInputFocus = (input) => {
    setFocusedInput(input);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const handleHidePassword = () => {
    setIsHidePassword(!isHidePassword);
  };

  const handleSubmit = () => {
    const { login, email, password } = state;
    if (login === "" || email === "" || password === "") {
      Alert.alert("Fill in all fields!");
      return;
    }
    
    console.log(state);
    setState(initialState);
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-170}
        >
          <View style={styles.formContainer}>
            <Avatar />
            <Text style={styles.formTitle}>Реєстрація</Text>
            <View style={styles.inputThumb}>
              <TextInput
                style={[
                  styles.formInput,
                  focusedInput === "login" && styles.focusedFormInput,
                ]}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                onFocus={() => handleInputFocus("login")}
                onBlur={handleInputBlur}
                value={state.login}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, login: value }))
                }
              />
              <TextInput
                style={[
                  styles.formInput,
                  focusedInput === "email" && styles.focusedFormInput,
                ]}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => handleInputFocus("email")}
                onBlur={handleInputBlur}
                value={state.email}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, email: value }))
                }
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[
                    styles.formInput,
                    focusedInput === "password" && styles.focusedFormInput,
                  ]}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={isHidePassword}
                  onFocus={() => handleInputFocus("password")}
                  onBlur={handleInputBlur}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prev) => ({ ...prev, password: value }))
                  }
                />
                <TouchableOpacity
                  style={styles.passwordButton}
                  onPress={handleHidePassword}
                >
                  <Text style={styles.passwordButtonText}>
                    {isHidePassword ? "Показати" : "Приховати"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonTitle}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  formTitle: {
    marginBottom: 32,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.3,
    textAlign: "center",
  },
  inputThumb: {
    marginBottom: 43,
    gap: 16,
  },
  formInput: {
    padding: 16,
    height: 50,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  focusedFormInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  passwordButtonText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonTitle: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#FFFFFF",
  },
  textLogin: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
});
