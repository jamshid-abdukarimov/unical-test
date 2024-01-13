interface TableProps<Data, Key extends string> {
  renderSort?: (
    key: Key | Omit<string, Key>,
    index: number
  ) => React.ReactNode | null;
  data: Data[];
  cols: [key: Key | Omit<string, Key>, name: string][];
  render: (
    key: Key | Omit<string, Key>,
    item: Data,
    index: number
  ) => React.ReactNode;
  renderHeads: (
    key: Key | Omit<string, Key>,
    cols: [key: Key | Omit<string, Key>, name: string][],
    name: string
  ) => React.ReactNode;
  isHeader?: boolean;
  className?: string;
  onClickRow?: (item: Data) => void;
}

const Table = <Data, Key extends keyof Data & string>({
  renderSort,
  data,
  cols,
  render,
  renderHeads,
  isHeader = true,
  className,
  onClickRow,
}: TableProps<Data, Key>) => {
  return (
    <table
      className={`w-full rounded-md overflow-hidden text-sm text-left text-gray-500 ${className}`}
    >
      {isHeader ? (
        <thead className={`text-xs text-white uppercase bg-gray-600`}>
          <tr>
            {Array.isArray(cols)
              ? cols.map(([key, name]) =>
                  key ? (
                    <th className="px-6 py-3" key={key as string}>
                      {renderHeads && renderHeads(key, cols, name)}
                    </th>
                  ) : null
                )
              : null}
          </tr>
        </thead>
      ) : null}
      <tbody>
        {renderSort && (
          <tr className="bg-white text-gray-900">
            {cols.map(([key], index: number) =>
              key ? (
                <td className="p-2" key={key as string}>
                  <span>{renderSort(key, index)}</span>
                </td>
              ) : null
            )}
          </tr>
        )}
        {Array.isArray(data) && Array.isArray(cols) ? (
          !data.length ? (
            <tr>
              <td colSpan={12}>
                <h1 className="text-center text-xl uppercase py-10  font-bold text-red-600 bg-white">
                  Qidiruvingiz bo'yicha hech narsa topilmadi
                </h1>
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                className={`border-b hover-bg-gray-100 text-gray-900 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
                onClick={() => (onClickRow ? onClickRow(item) : undefined)}
                key={index}
              >
                {cols.map(([key]) =>
                  key ? (
                    <td className="px-6 py-4" key={key as string}>
                      {render(key, item, index)}
                    </td>
                  ) : null
                )}
              </tr>
            ))
          )
        ) : null}
      </tbody>
    </table>
  );
};

export default Table;
