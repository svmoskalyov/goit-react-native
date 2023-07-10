import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Text,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
} from "react-native";
import backgroundImage from "../assets/images/background.png";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [state, setState] = useState(initialState);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();

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
    const { email, password } = state;
    if (!email.trim() || !password.trim()) {
      Alert.alert("Заповніть поля");
      return;
    }

    console.log(state);
    navigation.navigate("Home", state);
    setState(initialState);
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ position: "absolute", width: width, height: height }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -240 : -250}
        >
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Увійти</Text>
            <View style={styles.inputThumb}>
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
              <Text style={styles.buttonTitle}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.textLogin}>
                Немає акаунту?{" "}
                <Text style={styles.registrationText}>Зареєструватися</Text>
              </Text>
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
    paddingTop: 32,
    paddingBottom: 144,
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
  registrationText: {
    textDecorationLine: "underline",
  },
});
