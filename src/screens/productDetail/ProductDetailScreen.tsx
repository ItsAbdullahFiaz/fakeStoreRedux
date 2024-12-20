import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import { Button, Text, View } from 'react-native';

const ProductDetail = ({ route }: { route: any }) => {
    const dispatch = useDispatch();
    const { product } = route.params;

    const addToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <View>
            <Text>{product.title}</Text>
            <Button title="Add to Cart" onPress={addToCart} />
        </View>
    );
};

export default ProductDetail;