import { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { meals, category } from "../data/dummy-data";

import MealItem from "../components/MealItem";

type RootStackParamList = {
  Categories: undefined;
  MealsOverView: { categoryId: string; categoryTitle: string };
};

type MealsOverViewScreenProps = {
  route: RouteProp<RootStackParamList, "MealsOverView">;
  navigation: StackNavigationProp<RootStackParamList, "MealsOverView">;
};

type Meal = {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string; // "Affordable" | "Moderate" | "Expensive" | "Very Expensive"
};

type ItemDataProps = {
  item: Meal;
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

  function renderMealItem(itemData: ItemDataProps) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
