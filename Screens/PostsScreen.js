import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PostScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params.state]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(_, i) => i.toString()}
        renderItem={(el) => {
          return (
            <View style={styles.postWrapper}>
              <Image source={{ uri: el.item.photo }} style={styles.img} />
              <Text style={styles.postName}>{el.item.name}</Text>
              <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                  style={{ ...styles.commentsBtn, flex: 0.2 }}
                  onPress={() => navigation.navigate("Comments")}
                >
                  <View style={{ transform: [{ rotate: "-90deg" }] }}>
                    <Feather name="message-circle" size={24} color="#BDBDBD" />
                  </View>
                  <Text style={{ ...styles.text, color: "#BDBDBD" }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ ...styles.commentsBtn }}
                  onPress={() =>
                    navigation.navigate("Map", {
                      location: el.item.coords,
                    })
                  }
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text
                    style={{
                      ...styles.text,
                      textDecorationLine: "underline",
                    }}
                  >
                    {el.item.location}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  postWrapper: {
    justifyContent: "center",
    marginTop: 32,
    marginHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  img: {
    marginBottom: 8,
    width: "100%",
    aspectRatio: 343 / 240,
    borderRadius: 8,
  },
  postName: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  buttonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    height: 30,
  },
  commentsBtn: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
  },
  text: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
});
