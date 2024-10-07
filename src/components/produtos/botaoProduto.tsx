import {
  IconShoppingCartFilled,
  IconShoppingCartPlus,
} from "@tabler/icons-react";
import React from "react";

export interface props {
  tipo: "comprar" | "adicionar";
  conteudo?: [JSX.Element, ""];
  className?: string;
  onClick?: () => void;
}

const BotaoProduto = (props: props) => {
  return (
    <button
      onClick={props.onClick}
      className={`min-w-12 bg-blue-500 text-white h-12 px-2 py-4 flex items-center rounded-md justify-center ${props.className}`}
    >
      {props.tipo == "comprar" ? (
        <>
          <IconShoppingCartFilled />
          <span className="text-xl font-black ">Comprar</span>
        </>
      ) : (
        <>
          <IconShoppingCartPlus />
        </>
      )}
    </button>
  );
};

export default BotaoProduto;
