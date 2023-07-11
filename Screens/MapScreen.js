import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

export default function MapScreen() {
  const {
    location: { latitude, longitude },
  } = useRoute().params;

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="location photo"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
