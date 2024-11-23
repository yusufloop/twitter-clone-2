import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconSettings from "./IconSettings";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResults] = useState([]);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  function onPress() {
    Alert.alert("ucop hensem juga");
  }

  useEffect(() => {
    fetch("https://www.reddit.com/r/aww.json")
      .then((response) => response.json())
      .then((resultsFromServer) => {
        setResults(resultsFromServer.data.children);
      });
  }, []);

  const Item = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.title}>{item.data.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>
        Open up App.js to start working on your app!
      </Text>

      <Button
        title="Press me"
        color="magenta"
        onPress={() => Alert.alert("yusuf hensem")}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {/* <IconSettings width={16} height={16} /> */}
        <MaterialIcons name="display-settings" size={24} color="black" />
        <Text>Press Here</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 60 }}>
        <Pressable
          onPressIn={() => console.log("pressing in")}
          onPressOut={() => console.log("pressing out")}
          onLongPress={() => console.log("loong press")}
          hitSlop={60}
          style={styles.button}
        >
          <Text>Press Here</Text>
        </Pressable>
      </View>
      <View>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        <Text>{text}</Text>
      </View>
      <View>
        <FlatList
        style= {{ marginHorizontal:30}}
          data={result}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.data.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 60,
    // justifyContent: 'center',
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
});
