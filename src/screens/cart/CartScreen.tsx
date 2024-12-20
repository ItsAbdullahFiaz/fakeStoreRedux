import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../../store/slices/cartSlice';
import { Button, Text, View, StyleSheet, Image, ScrollView } from 'react-native';


const CartScreen = () => {
    const cartItems = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce((sum: any, item: any) => sum + (item.price * (item.quantity || 1)), 0);

    return (
        <View style={styles.container}>
            <ScrollView>
                {cartItems.map((item: any) => (
                    <View key={item.id} style={styles.cartItem}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemPrice}>
                                ${item.price} x {item.quantity} = ${(item.price * (item.quantity || 1)).toFixed(2)}
                            </Text>
                            <Button title="Remove" onPress={() => dispatch(removeItem(item))} />
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
                <Button title="Clear Cart" onPress={() => dispatch(clearCart())} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    cartItem: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        elevation: 2,
    },
    itemImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    itemInfo: {
        flex: 1,
        marginLeft: 10,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    itemPrice: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    footer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default CartScreen;
