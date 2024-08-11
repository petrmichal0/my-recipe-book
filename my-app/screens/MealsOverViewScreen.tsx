import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Categories: undefined;
  MealsOverView: { categoryId: string; categoryTitle: string };
};

type MealsOverViewScreenProps = {
  route: RouteProp<RootStackParamList, "MealsOverView">;
};

function MealsOverViewScreen({ route }: MealsOverViewScreenProps) {
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
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
