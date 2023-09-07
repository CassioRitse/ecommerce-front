export default function TableProducts() {
  return (
    <section>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                produto
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                sub-valor
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Remover
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-red-600  hover:underline"
                >
                  Remover
                </a>
              </td>
            </tr>
            <tr className="bg-white  hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Remover
                </a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3">3</td>
              <td className="px-6 py-3">21,000</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
