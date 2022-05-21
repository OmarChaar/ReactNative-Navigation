import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealItem from './MealItem';


function MealItemsList({ displayedMeals, catColor }) {

    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            color: catColor,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity,
            ingredients: item.ingredients
        }

        return (
            <MealItem 
                {...mealItemProps}
            />
        )

    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealItemsList;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 24
    }
});