import { StyleSheet, FlatList } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';


// We get the 'navigation' & 'route' prop because CategoriesScreen is registered as a Stack.Screen.
function CategoriesScreen({ navigation }) {

    // This make the code clearer and easier to debug.
    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate('Meals', {
                categoryID: itemData.item.id,
                color: itemData.item.color
            });
        }
        
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}     
            numColumns="2"   
        />
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({

});