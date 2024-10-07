"use client";
import React, { useEffect, useState } from "react";
import { produtos } from "@/core/constants";
import { Produto } from "@/core/Produtos";
import Cabecalho from "@/components/produtos/cabecalho";
import NotaProduto from "@/components/produtos/notaProduto";
import BotaoProduto from "@/components/produtos/botaoProduto";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaginaProduto = (props: any) => {
  const [produto, setProduto] = useState<Produto | undefined>(undefined);

  useEffect(() => {
    setProduto(produtos.find((item) => item.id === +props.params.id));
  }, [props.params.id]);
  return (
    <div className="flex flex-col min-h-screen relative gap-10 container">
      <Cabecalho titulo={produto?.nome} subtitulo={produto?.descricao} />

      <div className="grid grid-cols-2 gap-4">
        <div className="h-96 w-full relative gap-6  items-center">
          <div className="flex flex-1 items-center justify-around text-center  relative">
            <span className="border-r-4 flex-1 "> {produto?.marca}</span>
            <span className=" flex-1  "> {produto?.modelo}</span>
            <NotaProduto
              className="border-l-4 flex-1 justify-center flex"
              nota={produto?.nota}
            />
          </div>
          <Image
            className="object-contain"
            src={produto ? produto?.imagem : ""}
            alt={produto ? produto.nome : ""}
            fill
          />
        </div>
        <div className="flex items-center gap-2 justify-between">
          {/* Preço */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold line-through">
              R$ {produto?.maiorPreco}
            </span>
            <span className="text-4xl font-black text-blue-500">
              R$ {produto?.precoBase}
            </span>
          </div>
          {/* Botoes */}
          <div className="flex gap-6">
            <BotaoProduto className="px-20" tipo="comprar" />
            <BotaoProduto tipo="adicionar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaProduto;
