import { Box } from 'native-base';
import React, { useState } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const Book = ({ book, mr }) => {
  const [rotation, setRotation] = useState(new Animated.Value(0));

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '30deg']
  });

  const onBookPress = () => {
    Animated.spring(rotation, {
      toValue: 1,
      tension: 20,
      friction: 1,
      useNativeDriver: true
    }).start();
  };

  return (
    <TouchableOpacity onPress={onBookPress}>
      <Box mr={mr}>
        <Animated.View style={[styles.bookContainerBox, { transform: [{ rotateY: rotate }] }]} >
          <Image source={{ uri: book.cover }} style={styles.bookCover} />
        </Animated.View>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookContainerBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookCover: {
    width: 81,
    height: 122,

  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#2c3e50',
  },
});

export default Book;
