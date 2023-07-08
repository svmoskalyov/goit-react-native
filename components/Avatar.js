import { View, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Avatar() {
  return (
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={null} />
      <View style={styles.loadAvatar}>
        <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -45 }],
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  loadAvatar: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
    backgroundColor: "#fff",
  },
});
