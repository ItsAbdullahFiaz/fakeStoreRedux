import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListingScreen from '../screens/productListing/ProductListingScreen';
import ProductDetailScreen from '../screens/productDetail/ProductDetailScreen';
import CartScreen from '../screens/cart/CartScreen';
import CartIcon from '../components/CartIcon';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Products"
                    component={ProductListingScreen}
                    options={{
                        headerRight: () => (
                            <CartIcon />
                        ),
                    }}
                />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation; 