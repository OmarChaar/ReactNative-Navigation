import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


function Ingredients({ingredient}) {
    
    return (
        <View style={styles.ingredientContainer}>
           <Ionicons name="checkbox-outline" size={12} color="black" />
           <Text style={styles.ingredientsText}>{ingredient}</Text>
        </View>
    )
}

export default Ingredients;

const styles = StyleSheet.create({
    ingredientContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginBottom: 8
    },
    ingredientsText: {
        flex: 1,
        fontSize: 12,
        marginLeft: 5
    },
});