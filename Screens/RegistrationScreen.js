import { View, Text, TextInput, StyleSheet } from "react-native";
import Avatar from "../components/Avatar";

function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Avatar />
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.thumbInput}>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            secureTextEntry
          />
          <View style={styles.passwordButton}>
            <Text style={styles.passwordButtonText}>
              {true ? "Показати" : "Приховати"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonTitle}>Зареєстуватися</Text>
      </View>
      <View>
        <Text style={styles.textAccount}>Вже є акаунт? Увійти</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    paddingHorizontal: 16,
    height: 549,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#fff",
  },

  title: {
    paddingTop: 32,
    paddingBottom: 32,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "RobotoMedium",
    letterSpacing: 0.3,
    color: "#212121",
  },
  thumbInput: {
    marginBottom: 43,
    gap: 16,
  },
  input: {
    padding: 16,
    height: 50,
    fontSize: 16,
    fontFamily: "RobotoRegular",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
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
    fontFamily: "RobotoRegular",
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
    fontFamily: "RobotoRegular",
    color: "#FFFFFF",
  },
  textAccount: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "RobotoRegular",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
