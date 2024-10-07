import ListaProdutos from "@/components/produtos/listaProdutos";
import { produtos } from "@/core/constants";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
export default function Home() {
  return (
    <div className=" flex flex-col">
      <>
        <div className="flex items-center h-72 container gap-4  ">
          <button className="min-h-14 min-w-14 justify-center flex items-center rounded-xl hover:bg-slate-50 border">
            <IconArrowLeft />
          </button>
          <div className="  flex flex-1 bg-slate-200 h-full border rounded-lg relative items-center justify-center">
            <div className="flex items-center absolute bottom-1 gap-2">
              <span className="p-2 bg-white border rounded-full" />
              <span className="p-2 bg-slate-400 border rounded-full" />
              <span className="p-2 bg-slate-400 border rounded-full" />
            </div>
          </div>
          <button className="min-h-14 min-w-14 justify-center flex items-center rounded-xl hover:bg-slate-50 border">
            <IconArrowRight />
          </button>
        </div>
      </>
      <ListaProdutos produtos={produtos} />
    </div>
  );
}
