import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Page() {
  const handleSayLess = () => {
    //handle "say less" button to press logic
    console.log("Bet!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>What's Good?</Text>
        <Text style={styles.subtitle}>
          Sippin' & Chillin', All Love, No Drama!
        </Text>
        <TouchableOpacity onPress={handleSayLess} style={styles.button}>
          <Text style={styles.buttonText}>Say Less</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
