import { Text, View, TouchableOpacity } from "react-native";
import commonStyles from "../../components/styles";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.main}>
        <Text style={commonStyles.title}>What's Good?</Text>
        <Text style={commonStyles.subtitle}>
          Sippin' & Chillin', All Love, No Drama!
        </Text>

        <TouchableOpacity style={commonStyles.button}>
          <Link href='/libations'>
            <Text style={commonStyles.buttonText}>Say Less</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}
