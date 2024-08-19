import { StyleSheet, View, Text } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";

import { meals } from "../data/dummy-data";

import MealList from "../components/MealsList/MealList";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);

  const favoriteMeals = meals.filter((item) => ids.includes(item.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals found.</Text>
      </View>
    );
  } else {
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
