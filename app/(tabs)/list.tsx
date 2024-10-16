import { Item } from "@/components/item";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import data from "@/constants/data.json"

export default function List() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item name={item.nome} age={item.idade} date={item.data} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    back:{
        paddingHorizontal:20
    },
    center: {
        margin: 20,
        display: "flex",
        alignItems: "center"
    }
})
