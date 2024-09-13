import { FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { category } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

type RootStackParamList = {
  MealsOverView: { categoryId: string; categoryTitle: string };
  Categories: undefined;
};

type CategoriesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Categories">;
};

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  function pressHandler(categoryId: string, categoryTitle: string) {
    navigation.navigate("MealsOverView", {
      categoryId: categoryId,
      categoryTitle: categoryTitle,
    });
  }

  return (
    <FlatList
      data={category}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => pressHandler(itemData.item.id, itemData.item.title)}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
