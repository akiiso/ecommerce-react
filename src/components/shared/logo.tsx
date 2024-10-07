import Link from "next/link";
import React from "react";

export interface props {
  className?: string;
}

const Logo = (props: props) => {
  return (
    <Link
      href={"/"}
      className={`text-blue-500 font-black text-xl${props.className}`}
    >
      E-COMMERCE
    </Link>
  );
};

export default Logo;
