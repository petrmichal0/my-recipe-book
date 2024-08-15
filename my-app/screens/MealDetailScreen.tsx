import { useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

import { meals } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

type MealDetailScreenProps = {
  route: { params: { mealId: string } };
  navigation: { setOptions: (options: any) => void };
};

function MealDetailScreen({ route, navigation }: MealDetailScreenProps) {
  const { mealId } = route.params;

  const selectedMeal = meals.find((meal) => mealId === meal.id);

  function headerButtonPressHandler() {
    console.log("pressed!");
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me!" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

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
