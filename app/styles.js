import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#A6882F",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 68,
    fontWeight: "bold",
    color: "#F2D98D",
  },
  subtitle: {
    fontSize: 32,
    color: "#F2D98D",
  },
  buttonText: {
    color: "#",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#F2D98D",
  },
  button: {
    backgroundColor: "#A6882F",
    borderColor: "#F2D98D",
    borderWidth: 1,
    marginTop: 30,
    width: 100,
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: "center", // Align the text vertically in the button
    alignItems: "center", //align the text horinzontally in the button
  },
});

export default commonStyles;
