
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; 

import { MEALS } from '../data/dummy-data';
import Ingredients from '../components/ui/Ingredients';
import ItemButton from '../components/ui/IconButton';


function MealDetailScreen({route, navigation}) {

    let loved = false;

    const mealID = route.params.mealID;
    const chosenMeal = MEALS.find((meal) => meal.id === mealID);

    console.log(chosenMeal.imageUrl);

    function headerButtonHandler() {
      
        loved = !loved;
        console.log(loved);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Details',
            headerRight: () => {
                return (
                    <ItemButton icon={loved === true ? "star" : "heart-outline"} onPress={headerButtonHandler}/>
                )
            } 
        })
    }, [navigation]);

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