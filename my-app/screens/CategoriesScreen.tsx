import { FlatList } from "react-native";

import { meals } from "../data/dummy-data";

function CategoriesScreen() {
  return (
    <FlatList data={meals} keyExtractor={(item) => item.id} renderItem={item} />
  );
}

export default CategoriesScreen;
