import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { authStateChangeUser } from "../redux/auth/authOperations";
import { selectStateChange } from "../redux/auth/authSelectors";
import AuthNavigation from "./AuthNavigation";

export default function MainNavigation() {
  const dispatch = useDispatch();
  const stateChange = useSelector(selectStateChange);
  const routing = AuthNavigation(stateChange);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
