import { Text } from "react-native";

type MealDetailScreenProps = {
  route: { params: { mealId: number } };
};

function MealDetailScreen({ route }: MealDetailScreenProps) {
  const { mealId } = route.params;

  return <Text>This is the meal detail ({mealId})</Text>;
}

export default MealDetailScreen;
