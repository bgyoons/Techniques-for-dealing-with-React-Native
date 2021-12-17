import React from 'react';
import {Text, Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import DetailScreen from './screens/DetailScreen';
// import HeaderlessScreen from './screens/HeaderlessScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-vector-icons/Icon';

const Tab = createBottomTabNavigator();

function Home() {
  return <Text>Home</Text>;
}
function Search() {
  return <Text>Search</Text>;
}
function Notify() {
  return <Text>Notify</Text>;
}
function Message() {
  return <Text>Message</Text>;
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            title: '검색',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notify"
          component={Notify}
          options={{
            title: '알림',
            tabBarIcon: ({color, size}) => (
              <Icon name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            title: '메시지',
            tabBarIcon: ({color, size}) => (
              <Icon name="message" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function HomeScreen({navigation}) {
//   return (
//     <View>
//       <Text>Home</Text>
//       <Button title="Drawer Open" onPress={() => navigation.openDrawer()} />
//       <Button
//         title="Settings Open"
//         onPress={() => navigation.navigate('Settings')}
//       />
//     </View>
//   );
// }

// function SettingsScreen({navigation}) {
//   return (
//     <View>
//       <Text>Settings</Text>
//       <Button title="back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         drawerPosition="left"
//         backBehavior="history">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Settings" component={SettingsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// function App() {
//   return (
// <NavigationContainer>
//   <Stack.Navigator
//     initialRouteName="Home"
//     screenOptions={{headerShown: false}}>
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         title: '홈',
//         headerStyle: {
//           backgroundColor: '#28b6f6',
//         },
//         headerTintColor: '#ffffff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           fontSize: 20,
//         },
//       }}
//     />
//     <Stack.Screen
//       name="Detail"
//       component={DetailScreen}
//       options={{
//         headerBackVisible: false,
//         headerLeft: ({onPress}) => (
//           <TouchableOpacity onPress={onPress}>
//             <Text>Left</Text>
//           </TouchableOpacity>
//         ),
//         headerTitle: ({children}) => (
//           <View>
//             <Text>{children}</Text>
//           </View>
//         ),
//         headerRight: () => (
//           <Text>
//             <Text>Right</Text>
//           </View>
//         ),
//         // ({route}) => ({title: `상세 정보 - ${route.params.id}`})
//       }}
//     />
//     <Stack.Screen
//       name="Headerless"
//       component={HeaderlessScreen}
//       options={{headerShown: false}}
//     />
//   </Stack.Navigator>
// </NavigationContainer>
// );
// }
