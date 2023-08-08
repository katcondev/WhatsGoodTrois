import { Text, View, TouchableOpacity } from "react-native";
import commonStyles from "./components/styles";
import { Link } from "expo-router";

const LibRoster = () => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.main}>
        <Text style={commonStyles.title}>"Introducing 'What's Good?'</Text>
        <Text style={commonStyles.subtitle}>
          Your one-stop destination for the most delicious and refreshing drink
          recipes! Quench your thirst and unleash your inner mixologist with our
          diverse collection of mouthwatering concoctions, handpicked to satisfy
          every taste bud. From vibrant mocktails to tantalizing cocktails,
          'What's Good?' offers a delightful range of beverages perfect for any
          occasion.
        </Text>
        <TouchableOpacity style={commonStyles.button}>
          <Link href='/'>
            <Text style={commonStyles.buttonText}>Home</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LibRoster;
