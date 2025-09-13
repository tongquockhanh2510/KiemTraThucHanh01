import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "./Products";

type Props = {
  product: Product;
  onAdd: (product: Product) => void;
};

export default function ProductItem({ product, onAdd }: Props) {
  return (
    <View style={styles.item}>
      <Text>{product.name}</Text>
      <Text style={{ color: "red" }}>{product.price}đ</Text>
      <TouchableOpacity style={styles.button} onPress={() => onAdd(product)}>
        <Text style={{ color: "#fff" }}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: "row", alignItems: "center", marginBottom: 16, justifyContent: "space-between", borderWidth: 1 , borderColor:'black' ,padding :10},
  button: { backgroundColor: "#007bff", padding: 8, borderRadius: 6 },
});





