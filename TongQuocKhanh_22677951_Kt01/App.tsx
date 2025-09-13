
import React, { useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import { PRODUCTS, Product } from "./components/Products";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const handleAddToCart = (product: Product) => setCart([...cart, product]);

  return (
    <View style={styles.container}>
    <Text style={{ fontSize: 30 }}>DANH SÁCH SẢN PHẨM</Text>
      <CartSummary cart={cart} />
      <ProductList products={PRODUCTS} onAdd={handleAddToCart} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});
