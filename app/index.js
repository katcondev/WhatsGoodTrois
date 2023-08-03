import React from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import commonStyles from "./styles";

import LibRoster from "./libations"; // Import the LibRoster component

export default function Home() {
  const handleSayLess = () => {
    // Navigate to the LibRoster screen
    console.log("bet!");
  };

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.main}>
        <Text style={commonStyles.title}>What's Good?</Text>
        <Text style={commonStyles.subtitle}>
          Sippin' & Chillin', All Love, No Drama!
        </Text>
        <TouchableOpacity onPress={handleSayLess} style={commonStyles.button}>
          <Text style={commonStyles.buttonText}>Say Less</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
