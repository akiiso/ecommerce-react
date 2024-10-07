import React from "react";
import CarrinhoProdutos from "../shared/carrinhoProdutos";
import Logo from "../shared/logo";

export interface navbarProps {
  qtdeItens?: number;
}

const Navbar = (props: navbarProps) => {
  return (
    <nav className=" border-b-2 ">
      <div className="flex justify-between h-20 items-center relative container">
        <Logo className="" />
        <div className="flex gap-6">
          <CarrinhoProdutos qtdeItens={props.qtdeItens} />
          <button className=" rounded-lg border  py-1 px-6 hover:bg-slate-50">
            Entrar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
