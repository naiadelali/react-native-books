import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import LogoSvg from "../../../../../assets/svgs/logo.svg";
import { BookEntity } from "../../../domain/Domain";

import { HStack } from "native-base";
import BookBox from "../../components/BookBox/BookBox";


import { SkeletonBook } from "../../components/BookBox/SkeletonBook";
import { useHomeDependencies } from "../../di/HomeDependenciesContext";
import styles from "./HomeStyles";

const Home = () => {
    const { listBooksUseCase } = useHomeDependencies();
    const [loading, setLoading] = React.useState(true);
    const [books, setBooks] = React.useState<BookEntity[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const books = await listBooksUseCase.execute(1);
                console.log(books);
                setBooks(books);
                setLoading(false);
            } catch (error) {
                console.error("Error listing books:", error);
            }
        })();
    }, [listBooksUseCase]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <HStack alignItems="center" justifyContent="space-between" mb={42} mt={42}>
                    <HStack space={2} alignItems="center" >
                        <LogoSvg />
                        <Text style={styles.title}>Books</Text>
                    </HStack>
                    <View style={styles.circle} />
                </HStack>

                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {loading ? (
                        <View style={{
                            flexDirection: 'column', flex: 1, alignItems: 'flex-start'
                        }}>
                            <SkeletonBook></SkeletonBook>
                            <SkeletonBook></SkeletonBook>
                            <SkeletonBook></SkeletonBook>

                        </View>
                    ) : (

                        books.map((book) => (
                            <BookBox
                                key={book.id}
                                book={book}
                                mr={10}
                            />
                        ))
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Home;
