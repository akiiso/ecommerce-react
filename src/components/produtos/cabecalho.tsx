import React from "react";

export interface props {
  titulo?: string;
  subtitulo?: string;
}

const Cabecalho = (props: props) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">{props.titulo}</h1>
      <span className="text-lg">{props.subtitulo}</span>
    </div>
  );
};

export default Cabecalho;
