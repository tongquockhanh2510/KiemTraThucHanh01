import React from "react";
import { Text, StyleSheet,View } from "react-native";
import { Product } from "./Products";

type Props = {
  cart: Product[];
};
export default function CartSummary({ cart }: Props) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  return (
    <View>
     <Text style={styles.text}>
      Sản phẩm:  {cart.length}  | Tổng tiền: {total}đ
    </Text></View>
   
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 18, fontWeight: "bold", marginBottom: 16 ,color:'red'}
});
