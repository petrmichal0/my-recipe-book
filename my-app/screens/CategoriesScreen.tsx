import { FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { category } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

type RootStackParamList = {
  Categories: undefined;
  MealsOverView: undefined;
};

type CategoriesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Categories">;
};

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  function pressHandler() {
    navigation.navigate("MealsOverView");
  }

  return (
    <FlatList
      data={category}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
