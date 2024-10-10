// import { useContext } from "react";
import { useCallback, useEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

import { meals } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

type MealDetailScreenProps = {
  route: { params: { mealId: string } };
  navigation: { setOptions: (options: any) => void };
};

type RootState = {
  favoriteMeals: {
    ids: string[];
  };
};

function MealDetailScreen({ route, navigation }: MealDetailScreenProps) {
  // const { removeFavorite, addFavorite, ids } = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  );
  const dispatch = useDispatch();

  const { mealId } = route.params;

  // const mealIsFavorite = ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const selectedMeal = meals.find((meal) => mealId === meal.id);

  const changeFavoriteStatusHandler = useCallback(() => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }, [mealIsFavorite, mealId, dispatch]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "heart" : "heart-outline"}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  return (
    <View style={styles.rootContainer}>
      <Image
        style={styles.image}
        source={{ uri: selectedMeal?.imageUrl || "" }}
      />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration || 0}
        complexity={selectedMeal?.complexity || "Unknown"}
        affordability={selectedMeal?.affordability || "Unknown"}
        textStyle={styles.detailText}
      />
      <ScrollView>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal?.ingredients} />

            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal?.steps} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  detailText: {
    color: "#F47E1E",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
