import { Produto } from "@/core/Produtos";
import React from "react";
import ProdutoItem from "./item";

export interface listaProdutosProps {
  produtos: Produto[];
}

const ListaProdutos = (props: listaProdutosProps) => {
  return (
    <div className="grid grid-cols-4 py-4 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1 container">
      {props.produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default ListaProdutos;
