import Button from "@/components/Button";
import TableProducts from "@/components/TableProducts";

export default function Cart() {
  return (
    <main className="p-4 m-4 space-y-4 h-screen ">
      <div className="rounded-md bg-stone-100 shadow-md p-4">
        <h3 className="text-2xl font-semibold">Meu Carrinho de Compras</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="col-span-1 md:col-span-2">
          <TableProducts />
        </div>
        <div className="col-span-1 justify-end rounded-md bg-stone-100 shadow-md p-4">
          <p className="text-xl font-medium">Meu Pedido:</p>
          <p className="text-lg font-light">Produtos: 3</p>
          <p className="text-lg font-light">Frete: 00.00</p>
          <p className="text-xl font-light">Desconto: 00.00</p>
          <p className="text-3xl font-normal my-4">Total: 3000.00</p>
          <Button title="Finalizar Compra" style="bg-black text-white"></Button>
        </div>
      </div>
    </main>
  );
}
