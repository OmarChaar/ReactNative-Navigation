
import { StyleSheet, Text, View } from 'react-native';

import MealItemsList from '../components/MealItemsList';
// import { useContext } from 'react';
import {  useSelector } from 'react-redux';

// import { FavoritesContext } from '../store/context/favorites-context';

import { MEALS } from '../data/dummy-data'

function FavoritesScreen() {

    /*
    ************ CONTEXT ************

    const favoritesMealsContext = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoritesMealsContext.ids.includes(meal.id));

    */

    /* 
    ************ REDUX ************
    */
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) => 
        favoriteMealsIds.includes(meal.id)
    )


    if(favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }

    return (
        <MealItemsList displayedMeals={favoriteMeals}/>
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
});