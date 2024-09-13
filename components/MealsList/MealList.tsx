import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

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

type MealListProps = {
  items: Meal[];
};

function MealList({ items }: MealListProps) {
  function renderMealItem(itemData: ItemDataProps) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
