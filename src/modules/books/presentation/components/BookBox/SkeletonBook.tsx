import { Box, HStack, VStack } from 'native-base';
import React, { useEffect } from 'react';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';
import styles from './BookBoxStyles';

export const SkeletonBook = () => {
    const animation = useSharedValue(0);

    const styleAnimation = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            animation.value,
            [0, 1],
            ['#e0e0e0', '#c0c0c0']
        );

        return {
            backgroundColor,
            flex: 1,
        };
    });

    useEffect(() => {
        animation.value = withRepeat(
            withTiming(1, {
                duration: 2000, // Increase the duration for a slower transition
            }),
            -1,
            true
        );
    }, []);

    return (

        <HStack mb={10} style={styles.bookContainer}>
            <Box style={styles.SkeletonBook}>
                <Animated.View style={[styleAnimation, styles.SkeletonBook]} />
            </Box>
            <VStack flex={1} space={2}>
                <Box style={styles.SkeletonTitle}>
                    <Animated.View style={[styleAnimation, styles.SkeletonTitle]} />
                </Box>
                <Box style={styles.SkeletonTitle}>
                    <Animated.View style={[styleAnimation, styles.SkeletonTitle]} />
                </Box>
                <Box style={styles.SkeletonTitle}>
                    <Animated.View style={[styleAnimation, styles.SkeletonTitle]} />
                </Box>
                <Box style={styles.bookDetails}>
                    <Animated.View style={[styleAnimation, styles.SkeletonDesc]} />
                </Box>
                <Box style={styles.bookDetails}>
                    <Animated.View style={[styleAnimation, styles.SkeletonDescPuplisher]} />
                </Box>
            </VStack>
        </HStack>
    );
};
