import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MealDetails = ({ duration, complexity, affordability, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{affordability}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-between",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
