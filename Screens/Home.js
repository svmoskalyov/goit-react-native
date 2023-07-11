import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import DefaultPostsScreen from "./DefaultPostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home() {
  return (
    <MainTab.Navigator
      initialRouteName="DefaultPostsScreen"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          lineHeight: 22,
        },
        headerStyle: {
          borderBottomWidth: 0.5,
          borderBottomColor: "#21212120",
          backgroundColor: "#FFFFFF",
        },
        screenOptions: {
          tabBarHideOnKeyboard: true,
        },
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <MainTab.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={({ route }) => {
          getFocusedRouteNameFromRoute(route);
          return {
            tabBarIcon: ({ color }) => (
              <Feather name="grid" size={24} color={color} />
            ),
            title: "Публікації",
            headerTitleStyle: {
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              lineHeight: 22,
              color: "#212121",
            },
            headerRight: () => (
              <Feather
                name="log-out"
                color="#BDBDBD"
                size={24}
                style={{ marginRight: 10 }}
              />
            ),
          };
        }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={({ navigation }) => {
          return {
            tabBarStyle: { display: "none" },
            tabBarIcon: () => (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#FF6C00",
                }}
              >
                <Feather name="plus" size={24} color={"#FFFFFF"} />
              </View>
            ),
            title: "Створити публікацію",
            headerStyle: {
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(0, 0, 0, 0.30)",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              lineHeight: 22,
              color: "#212121",
            },
            headerLeft: () => (
              <Feather
                name="arrow-left"
                color="#212121CC"
                size={24}
                style={{ marginLeft: 16 }}
                onPress={() => {
                  navigation.navigate("DefaultPostsScreen");
                }}
              />
            ),
          };
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}
