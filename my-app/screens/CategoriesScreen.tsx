import { FlatList } from "react-native";

import { category } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen() {
  return (
    <FlatList
      data={category}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
