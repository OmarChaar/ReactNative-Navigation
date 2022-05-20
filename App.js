import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';

// A stack of the screens being used.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark'></StatusBar>

      <NavigationContainer>

        <Stack.Navigator 
          screenOptions={{  
            headerStyle: {backgroundColor: '#cccccc'},
            headerTitleAlign: 'center',
            headerBackTitle: ''
          }}
        >
          <Stack.Screen 
            name='MealsCategories'
            component={CategoriesScreen} 
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen 
            name='Meals' 
            component={MealsScreen}
            // WE WILL SET SPECIFIC SCREEN FROM WITHIN THE COMPONENT ITSELF

            // options={({route, navigation}) => {
            //   const catID = route.params.categoryID;
            //   return {
            //     title: catID
            //   }
            // }}
          />

          <Stack.Screen 
            name='MealDetails'
            component={MealDetailScreen} 
          />
        </Stack.Navigator>

       

      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({

});
