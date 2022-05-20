import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function MealItem({ id, title, imageUrl, duration, affordability, complexity }) {
    
    const navigation = useNavigation();
    
    function selectMealHandler() {
        navigation.navigate('MealDetails', {
            mealID: id
        })
    }

    return (
        <View style={styles.mealContainer}>
            <Pressable
                android_ripple={{color: '#ccc'}} 
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={selectMealHandler}
            >
                <View style={styles.container}>

                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.mealImage}
                            source={{ uri: imageUrl }}
                        />
                    </View>

                    <Text style={styles.mealTitle}>{title}</Text>

                    <View style={styles.mealDetails}>
                        <Text style={styles.detailText}>{duration} mins</Text>
                        <Text style={styles.detailText}>{affordability}</Text>
                        <Text style={styles.detailText}>{complexity}</Text>
                    </View>

                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealContainer: {
        flex: 1, 
        marginBottom: 18,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: 'hidden'
        // overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    container: {
        flex: 1,
        borderRadius: 8
    },
    mealTitle: {
        textAlign: 'center',
        marginVertical: 12,
        fontSize: 16,
        fontWeight: 'bold'
    },
    imageContainer: {
        height: 200,
        width: '100%',
        overflow: 'hidden',
        borderTopLeftRadius: 8,
        borderRightColor: 8
    },
    mealImage: {
        width: '100%',
        height: '100%'
    },
    mealDetails: {
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
      
    },
    detailText: {
        fontSize: 12,
        textTransform: 'uppercase'
    },
    buttonPressed: {
        opacity: 0.5,
    }
});