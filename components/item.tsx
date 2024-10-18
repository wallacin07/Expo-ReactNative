import { StyleSheet, View, Text } from "react-native";
import {Image} from "expo-image"

export const Item = ({
  name,
  age,
  date,
  image
}: {
  name: string;
  age: string;
  date: string;
  image: string;
}) => {
  return (
    <>
      <View style={styles.ItemList}>
        <Image source={image} style={styles.imageStyle}></Image>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{date}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  ItemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4168a4da",
    margin: 10,
    height: 80,
    paddingHorizontal: 10,
  },
  imageStyle: {
    width: 30,
    height: 30
  }
});
