import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home() {
  return (
    <MainTab.Navigator
      initialRouteName="Posts"
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
          backgroundColor: "#ffffff",
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
        name="Posts"
        component={PostsScreen}
        options={({ route }) => {
          getFocusedRouteNameFromRoute(route);
          return {
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="appstore-o" size={size} color={color} />
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
            tabBarIcon: ({ size }) => (
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
                <Feather name="plus" size={size} color={"#fff"} />
              </View>
            ),
            title: "Створити публікацію",
            headerStyle: {
              borderBottomWidth: 0.5,
              borderBottomColor: "#212121CC",
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
                  navigation.navigate("Posts");
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
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}
