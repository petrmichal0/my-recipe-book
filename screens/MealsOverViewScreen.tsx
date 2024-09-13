import { useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { meals, category } from "../data/dummy-data";
import MealList from "../components/MealsList/MealList";

type RootStackParamList = {
  Categories: undefined;
  MealsOverView: { categoryId: string; categoryTitle: string };
};

type MealsOverViewScreenProps = {
  route: RouteProp<RootStackParamList, "MealsOverView">;
  navigation: StackNavigationProp<RootStackParamList, "MealsOverView">;
};

function MealsOverViewScreen({ route, navigation }: MealsOverViewScreenProps) {
  const { categoryId } = route.params;

  const displayedMeals = meals.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  useEffect(() => {
    const categoryTitle =
      category.find((category) => category.id === categoryId)?.title ||
      "Default Title";

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverViewScreen;
