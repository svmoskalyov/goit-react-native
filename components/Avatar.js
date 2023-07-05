import { View, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Avatar() {
  return (
    <View style={styles.container}>
      <Image source={null} />
      <View style={styles.loadAvatar}>
        <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignSelf: "center",
    width: 120,
    height: 120,
    marginTop: -60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  loadAvatar: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
    borderRadius: 60,
    backgroundColor: "#fff",
  },
});

export default Avatar;
