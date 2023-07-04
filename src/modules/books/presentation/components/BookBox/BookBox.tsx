import React from 'react';
import { View, Text } from 'react-native';

import styles from './BookBoxStyles';
import Book from './Book';

const BookBox = ({ book, mr  }) => {
   return ( <View style={styles.bookContainer}>
        <Book book={book} mr={mr} />
        <View style={styles.bookInfo}>
            <View>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
            </View>
            <View style={styles.bookDetails}>
                <Text style={styles.bookDetailText}>Total Pages: {book.totalPages}</Text>
                <Text style={styles.bookDetailText}>Edition: {book.edition}</Text>
                <Text style={styles.bookDetailText}>Publisher: {book.publisher}</Text>
            </View>
        </View>
    </View>)

};

export default BookBox;
