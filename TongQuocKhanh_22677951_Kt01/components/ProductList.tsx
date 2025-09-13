import React from "react";
import { FlatList } from "react-native";
import { Product } from "./Products";
import ProductItem from "./ProductItem";

type Props = {
  products: Product[];
  onAdd: (product: Product) => void;
};

export default function ProductList({ products, onAdd }: Props) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductItem product={item} onAdd={onAdd} />}
    />
  );
}


