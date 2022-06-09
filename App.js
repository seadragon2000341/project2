import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import names from "./names";

const namesAsObject = names.map((name) => {
  return {
    name: name,
  };
}); //conert array of strings to array of objects with key name
export default function App() {
  function displayNames() {
    let nameJSX = [];
    let name;
    for (name of names) {
      nameJSX.push(<Text>{name}</Text>);
    }
    return nameJSX;
  }

  const renderItem = ({ item }) => {
    return <View style={styles.listItem}>
      <Text>{item.name}</Text></View>;
  };
  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   {displayNames()}
    //   {names.map((name) => (
    //     <Text>{name}</Text>
    //   ))}
    // </ScrollView>

    <FlatList
      keyExtractor={(item) => item.name}
      data={namesAsObject}
      renderItem={renderItem}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem:{
    padding: 20,
    margin: 10,
    backgroundColor: 'lightblue',
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: { x: 0, height: 3 }
    
  }
});
