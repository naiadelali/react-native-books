import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4EF",
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  scrollViewContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontFamily: "Heebo-Light",
    color: "#2c3e50",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "red", 
  },
});
