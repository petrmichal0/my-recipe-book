import { StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

type RootStackParamList = {
  Categories: undefined;
  MealsOverView: { categoryId: string; categoryTitle: string };
  MealDetail: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#F47E1E",
            },
            contentStyle: { backgroundColor: "#E4E4E4" },
          }}
        >
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverViewScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
