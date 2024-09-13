import { StyleSheet, Text, View } from "react-native";

type SubtitleProps = {
  children: string;
};

function Subtitle({ children }: SubtitleProps) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#F47E1E",
    borderBottomWidth: 1,
    marginHorizontal: 6,
    marginVertical: 4,
    padding: 8,
  },
});
