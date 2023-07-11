import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import MapScreen from "./MapScreen";
import CommentsScreen from "./CommentsScreen";

const PostStack = createStackNavigator();

export default function DefaultPostsScreen({ navigation }) {
  return (
    <PostStack.Navigator>
      <PostStack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <PostStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: "rgba(0, 0, 0, 0.3)",
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
        }}
      />
      <PostStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Карта",
          headerStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: "rgba(0, 0, 0, 0.3)",
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
        }}
      />
    </PostStack.Navigator>
  );
}
