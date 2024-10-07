import { IconShoppingCartFilled } from "@tabler/icons-react";
import React from "react";

export interface carrinhoProdutosProps {
  qtdeItens?: number;
}

const CarrinhoProdutos = (props: carrinhoProdutosProps) => {
  return (
    <div className="flex items-center relative border rounded-md p-2 cursor-pointer hover:bg-slate-50">
      <IconShoppingCartFilled className="h-8 w-full" />
      {props.qtdeItens ? (
        <div className="absolute bg-blue-100 -top-2 -right-2 rounded-full  p-1 flex items-center justify-center">
          <span className="font-semibold text-sm text-blue-500">
            {props.qtdeItens}
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CarrinhoProdutos;
