
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useLayoutEffect, useContext } from 'react';

import { MEALS } from '../data/dummy-data';
import Ingredients from '../components/ui/Ingredients';
import IconButton from '../components/ui/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({route, navigation}) {

    // Standard React
    const favoriteMealContext = useContext(FavoritesContext);

    const mealID = route.params.mealID;
    const chosenMeal = MEALS.find((meal) => meal.id === mealID);

    const mealIsFavorite = favoriteMealContext.ids.includes(mealID);

    function changeFavoriteStatusHandler() {
        if(mealIsFavorite) {
            favoriteMealContext.removeFavorite(mealID);
        }
        else {
            favoriteMealContext.addFavorite(mealID);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Details',
            headerRight: () => {
                return (
                    <IconButton icon={mealIsFavorite ? 'heart' : 'heart-outline'} onPress={changeFavoriteStatusHandler} />
                )
            } 
        })
    }, [navigation, changeFavoriteStatusHandler]);

    function displaySteps(item, index) {
        return (
            <View style={styles.stepsContainer}>
                <View style={styles.stepCount}>
                    <Text style={{color: 'white', fontSize: 10}}>{index+1}</Text>
                </View>
                <Text style={styles.ingredientsText}>{item}</Text>
            </View>
        )
    }
    
    return (
        <ScrollView style={styles.screen}>

            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: chosenMeal.imageUrl}}
                    style={styles.image}
                />
            </View>

            <Text style={styles.mealTitle}>{chosenMeal.title}</Text>
          
            <Text style={styles.detailsTitle}>Ingredients</Text>
            <View style={styles.ingredientsList}>
                {chosenMeal.ingredients.map(item => <Ingredients ingredient={item} />)}
            </View>

            <Text style={styles.detailsTitle}>Steps</Text>
            <View  style={styles.ingredientsList}>
                {chosenMeal.steps.map((item, index) => displaySteps(item, index))}
            </View>

        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    screen: {
        paddingBottom: 32
    },
    imageContainer: {
        width: '100%',
        height: 250
    },
    image: {
        width: '100%',
        height: '100%'
    },
    mealTitle: {
        paddingVertical: 16,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    detailsTitle: {
        marginStart: 16,
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    ingredientsList: {
        padding: 16
    },
    stepsContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    stepCount: {
        backgroundColor: 'brown',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
})