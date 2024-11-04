import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FIRESTORE_DB } from "@/firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";

interface Item {
    id: string;
    name: string;
    tipo: string;
    preco: string;
    qtd: string;
}

export default function ClothingList() {
  const [clothes, setClothes] = useState<Item[]>([]);
  const [selectedTab, setSelectedTab] = useState("Camiseta"); // Tab inicial

  useEffect(() => {
    const q = query(
      collection(FIRESTORE_DB, "items"),
      where("tipo", "==", selectedTab) // Filtra pelo tipo selecionado
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Item[];
      setClothes(items);
    });

    return () => unsubscribe();
  }, [selectedTab]);

  const renderTab = (tabName: string) => (
    <TouchableOpacity onPress={() => setSelectedTab(tabName)} style={styles.tabButton}>
      <Text style={[styles.tabText, selectedTab === tabName && styles.selectedTabText]}>{tabName}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        {["Blusa", "Camiseta", "Calça", "Bermuda", "Jaqueta de Couro"].map((tabName) => renderTab(tabName))}
      </View>

      <FlatList
        data={clothes}
        renderItem={({ item }) => (
            <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>Tipo: {item.tipo}</Text>
            <Text style={styles.itemText}>Preço: {item.preco}</Text>
            <Text style={styles.itemText}>Quantidade: {item.qtd}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderColor: "#DDDDDD",
  },
  tabButton: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    color: "#888888",
  },
  selectedTabText: {
    color: "#4B6BEB",
    fontWeight: "bold",
  },
  list: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: { fontSize: 16, color: "#333" },
  deleteButton: { color: "red", marginTop: 5 },
  editButton: { color: "blue", marginTop: 5 },
  modalContainer: { flex: 1, padding: 20, backgroundColor: "#fff" },
});
