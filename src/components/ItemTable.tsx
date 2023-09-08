import { Product } from "@/types/Interfaces";
import Button from "./Button";
import { UUID } from "crypto";

interface PropsItemTable {
  product: Product;
  qnt: number;
  handlerMoreItem: (id: UUID) => void;
  handlerOneLessItem: (id: UUID) => void;
  handlerRemoveItem: (id: UUID) => void;
}

export default function ItemTable(props: PropsItemTable) {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap"
      >
        {props.product.name}
      </th>
      <td className="px-3 py-3 ">
        <Button
          title="-"
          onClick={() => props.handlerOneLessItem(props.product.id)}
          style="font-bold text-black mr-2"
        />
        {props.qnt}
        <Button
          title="+"
          onClick={() => props.handlerMoreItem(props.product.id)}
          style="font-bold text-black ml-2"
        />
      </td>
      <td className="px-3 py-3 ">${props.product.price}</td>
      <td className="px-3 py-3  text-right">
        <Button
          onClick={() => props.handlerRemoveItem(props.product.id)}
          title="Remover"
          style="font-medium text-red-600 hover:underline"
        />
      </td>
    </tr>
  );
}
