import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

// A stack of the screens being used.
const Stack = createNativeStackNavigator();

// IF WE GET AN ERROR, RUN 'npm install react-native-reanimated@1 --save --save-exact'
const Drawer = createDrawerNavigator();


// NESTING NAVIGATIONS
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{  
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#351401' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          headerTitleAlign: 'center',
          drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size}/>
        }}
      />
      <Drawer.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => <Ionicons name='heart' color={color} size={size}/>
        }}
      />
    </Drawer.Navigator>
  )
}

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
          {/* NETSTED NAVIGATOR */}
          <Stack.Screen 
            name='MealsCategories'
            component={DrawerNavigator} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='Meals' 
            component={MealsScreen}
            
            /*
             WE WILL SET SPECIFIC SCREEN FROM WITHIN THE COMPONENT ITSELF

            options={({route, navigation}) => {
              const catID = route.params.categoryID;
              return {
                title: catID
              }
            }}
            */
    
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
