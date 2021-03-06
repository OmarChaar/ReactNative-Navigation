
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
// import { useRoute } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItemsList from '../components/MealItemsList';

// We get the 'navigation' & 'route' prop because MealsScreen is registered as a Stack.Screen.
function MealsScreen({ route, navigation }) {

    // Alternative way of using 'route' in separate pages if they are not registered as Stack.Screen.
    // const route = useRoute();

    const catID = route.params.categoryID;
    const catColor = route.params.color;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    });

    // FOR ONGOING ANIMATION WHILE THE PAGE IS STILL RENDERING (IN PARALEL)
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catID).title;

        navigation.setOptions({
            title: categoryTitle,
            headerBackTitle: ''
        });
    }, [catID, navigation]);
    

   

    return (
        <MealItemsList displayedMeals={displayedMeals} catColor={catColor}/>
    )
}

export default MealsScreen;

const styles = StyleSheet.create({

});