import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type MealDetailsProps = {
  duration: number;
  complexity: string;
  affordability: string; // "affordable", "moderate", "expensive"
  style?: ViewStyle;
  textStyle?: TextStyle; // optional custom text style for the details text
};

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealDetailsProps) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration} min</Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
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
