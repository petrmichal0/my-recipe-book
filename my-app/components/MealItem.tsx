import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";

import { shadowStyles } from "../styles/sharedStyles";

type MealItemProps = {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string; // "Affordable" | "Moderate" | "Expensive" | "Very Expensive"
};

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration} min</Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailsItem}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    ...shadowStyles,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
    gap: 12,
  },
  detailsItem: {
    fontSize: 12,
    color: "dimgray",
  },
});
