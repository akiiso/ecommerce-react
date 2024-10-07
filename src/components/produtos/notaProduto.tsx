import { IconStarFilled } from "@tabler/icons-react";
import React from "react";

export interface notaProdutoProps {
  nota?: number;
  className?: string;
}
const NotaProduto = (props: notaProdutoProps) => {
  return (
    <div className={` top-1 right-5 ${props.className}`}>
      <div className="flex items-center gap-2">
        <span className="font-semibold">{props.nota}</span>
        <IconStarFilled className="text-amber-300" />
      </div>
    </div>
  );
};

export default NotaProduto;
