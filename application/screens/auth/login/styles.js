import { StyleSheet } from "react-native";
import { DARK_THEME } from "../../../constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: DARK_THEME.MAIN_COLOR,
    },
    contentContainer: {
      width: "80%",
    },
    textInputContainer: {
      width: "100%",
      marginVertical: 10,
    },
    text: {
      color: DARK_THEME.WHITE_COLOR,
      fontSize: 20,
      fontWeight: "bold",
    },
    textInput: {
      color: DARK_THEME.WHITE_COLOR,
      fontSize: 18,
      padding: 15,
      borderWidth: 1,
      borderColor: DARK_THEME.GRAY_COLOR,
      borderRadius: 10,
    },
    icon: {
      top: 40,
      right: 20,
      position: "absolute",
    },
    button: {
      backgroundColor: DARK_THEME.PURPLE_COLOR,
      padding: 15,
      borderRadius: 15,
      width: "100%",
      marginTop: 10,
    },
    buttonText: {
      color: DARK_THEME.WHITE_COLOR,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    footerText: {
      marginTop: 10,
      color: DARK_THEME.WHITE_COLOR,
      fontSize: 14,
      //fontWeight: "bold",
      textAlign: "center",
    },
    error: {
      color: DARK_THEME.RED_COLOR,
      fontSize: 14,
      fontWeight: 'bold'
    }
  });
  