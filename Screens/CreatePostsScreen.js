import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const initialState = {
  name: "",
  location: "",
  coords: {},
  photo: "",
};

export default function CreatePostsScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return Alert.alert("Немає доступу до камери");
  }

  const takePhoto = async () => {
    try {
      const { uri } = await camera.takePictureAsync();
      setPhoto(uri);
      setState((prevState) => ({ ...prevState, photo: uri }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const takeLocation = async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setState((prevState) => ({
        ...prevState,
        coords: {
          latitude,
          longitude,
        },
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendPost = async () => {
    const { photo, name, location } = state;
    if (!photo || !name.trim() || !location.trim()) {
      return;
    }

    navigation.navigate("Posts", { state });
    setState(initialState);
  };

  const deletePost = () => {
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
          <View style={styles.cameraWrapper}>
            <Camera style={styles.camera} ref={setCamera}>
              <View style={styles.takePhotoCamera}>
                <Image source={{ uri: photo }} style={styles.photo} />
              </View>
              <TouchableOpacity
                style={styles.buttonCamera}
                onPress={() => {
                  takePhoto();
                  takeLocation();
                }}
              >
                <MaterialIcons name="photo-camera" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </Camera>
          </View>
          {!state.photo ? (
            <Text style={styles.uploadText}>Завантажте фото</Text>
          ) : (
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.uploadText}>Редагувати фото</Text>
            </TouchableOpacity>
          )}
          <View style={styles.inpuWrapper}>
            <TextInput
              style={{
                ...styles.inputTitle,
                marginTop: isShowKeyboard ? 20 : 48,
              }}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  name: value,
                }))
              }
              value={state.name}
            />
          </View>
          <View style={styles.inpuWrapper}>
            <View style={{ position: "absolute", bottom: 16 }}>
              <AntDesign name="enviromento" size={24} color="#BDBDBD" />
            </View>
            <TextInput
              style={{ ...styles.inputTitle, marginLeft: 32, marginTop: 32 }}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  location: value,
                }))
              }
              value={state.location}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                ...styles.btnPublish,
                backgroundColor:
                  !state.photo || !state.name || !state.location
                    ? "#F6F6F6"
                    : "#FF6C00",
              }}
              activeOpacity={0.7}
              disabled={
                !state.photo || !state.name || !state.location ? true : false
              }
              onPress={() => {
                sendPost();
              }}
            >
              <Text
                style={{
                  ...styles.textBtn,
                  color:
                    !state.photo || !state.name || !state.location
                      ? "#BDBDBD"
                      : "#FFFFFF",
                }}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingTop: 120 }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#F6F6F6",
              }}
              onPress={deletePost}
            >
              <AntDesign name="delete" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  cameraWrapper: {
    marginTop: 32,
    marginHorizontal: 16,
    justifyContent: "center",
    borderRadius: 8,
  },
  camera: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 343 / 240,
    borderRadius: 8,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
  },
  takePhotoCamera: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  buttonCamera: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FFFFFF4D",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  uploadText: {
    marginTop: 8,
    paddingLeft: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inpuWrapper: {
    position: "relative",
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputTitle: {
    marginBottom: 15,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  btnPublish: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginHorizontal: 16,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  textBtn: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
