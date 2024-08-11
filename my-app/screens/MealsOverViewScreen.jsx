import { View, Text, StyleSheet } from "react-native";

import { meals } from "../data/dummy-data";

function MealsOverViewScreen() {
  return (
    <View style={styles.container}>
      <Text>MealsOverViewScreen</Text>
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
