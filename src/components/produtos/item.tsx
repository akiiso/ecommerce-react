import { Produto } from "@/core/Produtos";
import Image from "next/image";
import Link from "next/link";
import NotaProduto from "./notaProduto";

export interface ProdutoItemProps {
  produto: Produto;
}

const ProdutoItem = (props: ProdutoItemProps) => {
  return (
    <Link
      href={`produtos/${props.produto.id}`}
      className="flex flex-col  p-4 rounded-xl border border-gray-100 relative hover:bg-slate-50"
    >
      <NotaProduto className="absolute" nota={props.produto.nota} />
      <div className="h-48 w-full relative">
        <Image
          src={props.produto.imagem}
          alt="Imagem do produto"
          className="object-contain"
          fill
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold">{props.produto.nome}</span>
        <span className="text-sm">{props.produto.especificacoes.destaque}</span>
      </div>
      <div className="flex flex-1 border-b-4 border-blue-500 py-1" />

      <div className="flex flex-col py-1">
        <span className="text-sm text-neutral-400 font-medium">
          R$ {props.produto.maiorPreco}
        </span>
        <span className="text-lg font-semibold ">
          R$ {props.produto.precoBase}
        </span>
      </div>
    </Link>
  );
};

export default ProdutoItem;
