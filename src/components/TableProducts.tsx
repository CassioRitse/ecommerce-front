import { ReactNode } from "react";

interface PropsTableProducts {
  children: ReactNode;
  qtn: number;
  amount: number;
}

export default function TableProducts(props: PropsTableProducts) {
  return (
    <div className="relative overflow-x-auto shadow-lg border sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-white uppercase bg-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3">
              produto
            </th>
            <th scope="col" className="px-6 py-3">
              Quantidade
            </th>
            <th scope="col" className="px-6 py-3">
              sub-valor
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
        <tfoot>
          <tr className="font-semibold bg-gray-800 text-white border-t-2">
            <th scope="row" className="px-6 py-3 text-base">
              Total
            </th>
            <td className="px-6 py-3">{props.qtn}</td>
            <td className="px-6 py-3">{props.amount}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
