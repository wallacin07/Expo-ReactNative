import React, { useState, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FIRESTORE_DB } from "@/firebaseConfig";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

interface Item {
  id: string;
  name: string;
  tipo: string;
  preco: string;
  qtd: string;
}

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [tipo, setTipo] = useState<string | undefined>(""); // Valor inicial como string vazia
  const [preco, setPreco] = useState("");
  const [qtd, setQtd] = useState("");
  const [filterTipo, setFilterTipo] = useState<string>(""); // Filtro de tipo
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(FIRESTORE_DB, "items"), (snapshot) => {
      const itemList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Item[];
      setItems(itemList);
    });

    return () => unsubscribe();
  }, []);

  const addItem = async () => {
    if (name === "" || tipo === "" || preco === "" || qtd === "") {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }
    await addDoc(collection(FIRESTORE_DB, "items"), { name, tipo, preco, qtd });
    setName("");
    setTipo(""); // Reseta o valor do Picker
    setPreco("");
    setQtd("");
  };

  const deleteItem = async (id: string) => {
    await deleteDoc(doc(FIRESTORE_DB, "items", id));
  };

  const openEditModal = (item: Item) => {
    setSelectedItemId(item.id);
    setName(item.name);
    setTipo(item.tipo);
    setPreco(item.preco);
    setQtd(item.qtd);
    setEditModalVisible(true);
  };

  const updateItem = async () => {
    if (selectedItemId && name && tipo && preco && qtd) {
      const itemRef = doc(FIRESTORE_DB, "items", selectedItemId);
      await updateDoc(itemRef, { name, tipo, preco, qtd });
      setEditModalVisible(false);
      setSelectedItemId(null);
      setName("");
      setTipo("");
      setPreco("");
      setQtd("");
    } else {
      Alert.alert("Por favor, preencha todos os campos.");
    }
  };

  const filteredItems = filterTipo
    ? items.filter((item) => item.tipo === filterTipo)
    : items;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Item"
        value={name}
        onChangeText={setName}
      />

      <Picker
        selectedValue={tipo}
        onValueChange={(itemValue) => setTipo(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione o tipo" value="" />
        <Picker.Item label="Blusa" value="Blusa" />
        <Picker.Item label="Camiseta" value="Camiseta" />
        <Picker.Item label="Calça" value="Calça" />
        <Picker.Item label="Bermuda" value="Bermuda" />
        <Picker.Item label="Jaqueta de Couro" value="Jaqueta de Couro" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={qtd}
        onChangeText={setQtd}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <Picker
        selectedValue={filterTipo}
        onValueChange={(itemValue) => setFilterTipo(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Filtrar por tipo" value="" />
        <Picker.Item label="Blusa" value="Blusa" />
        <Picker.Item label="Camiseta" value="Camiseta" />
        <Picker.Item label="Calça" value="Calça" />
        <Picker.Item label="Bermuda" value="Bermuda" />
        <Picker.Item label="Jaqueta de Couro" value="Jaqueta de Couro" />
      </Picker>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>Tipo: {item.tipo}</Text>
            <Text style={styles.itemText}>Preço: {item.preco}</Text>
            <Text style={styles.itemText}>Quantidade: {item.qtd}</Text>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text style={styles.deleteButton}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openEditModal(item)}>
              <Text style={styles.editButton}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={editModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome do Item"
            value={name}
            onChangeText={setName}
          />
          <Picker
            selectedValue={tipo}
            onValueChange={(itemValue) => setTipo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione o tipo" value="" />
            <Picker.Item label="Blusa" value="Blusa" />
            <Picker.Item label="Camiseta" value="Camiseta" />
            <Picker.Item label="Calça" value="Calça" />
            <Picker.Item label="Bermuda" value="Bermuda" />
            <Picker.Item label="Jaqueta de Couro" value="Jaqueta de Couro" />
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Preço"
            value={preco}
            onChangeText={setPreco}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Quantidade"
            value={qtd}
            onChangeText={setQtd}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={updateItem}>
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => setEditModalVisible(false)}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  picker: { height: 40, marginBottom: 10 },
  button: {
    backgroundColor: "#4b6beb",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: { backgroundColor: "#d9534f" },
  buttonText: { color: "#fff" },
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
