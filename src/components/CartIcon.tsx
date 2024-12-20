import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CartIcon = () => {
    const navigation = useNavigation<any>();
    const cartItems = useSelector((state: any) => state.cart.items);
    const itemCount = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Cart')}
        >
            <Text style={styles.text}>🛒 {itemCount}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
    text: {
        fontSize: 18,
    },
});

export default CartIcon; 