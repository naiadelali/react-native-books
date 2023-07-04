import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bookContainer: {
    flexDirection: "row",
    marginBottom: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  bookTitle: {
    fontSize: 16,
    color: "#2c3e50",
    fontFamily: "Poppins-Bold",
  },
  bookAuthor: {
    fontSize: 14,
    color: "#AB2680",
    fontFamily: "Heebo-Regular",
  },
  bookDetails: {
    marginTop: 10,
  },
  bookDetailText: {
    fontSize: 12,
    color: "#999",
    fontFamily: "Heebo-Regular",
  },
  SkeletonContent: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  SkeletonBook: {
    width: 81,
    height: 120,
    borderRadius: 5,
    marginRight: 42,
  },
  SkeletonTitle: {
    width: 160,
    height: 10,
    borderRadius: 5,
  },
  SkeletonDesc: {
    width: 100,
    height: 10,
    borderRadius: 5,
  },
  SkeletonDescPuplisher: {
    width: 120,
    height: 10,
    borderRadius: 5,
  },
});
