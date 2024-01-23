import React from "react";

export interface ColumnType {
  title: string;
  render?: any;
}

interface Props<DataType> {
  data: DataType[];
  columns: ColumnType[];
}

function Table<DataType>({ data, columns }: Props<DataType>) {
  function customizeData<DataType>(data: DataType[]) {
    const rendererCol: any = columns.find((col) => {
      const keys: string[] = Object.keys(col);
      const hasRender = keys.find((key) => key === "render");
      if (hasRender) {
        return col;
      }
    });

    if (rendererCol) {
      return data.map((item) => ({
        ...item,
        render: rendererCol.render(item),
      }));
    }
    return data;
  }

  //@ts-ignore
  let customizedData = customizeData<DataType>(data);
  return (
    <div className="mt-6 overflow-x-auto overflow-y-hidden shadow-md rounded-xs">
      <table className="w-full text-sm text-left rtl:text-right text-gray4 dark:text-gray4 ">
        <thead className="rounded-xs text-xs text-gray3 uppercase bg-ofWhite dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column) => (
              <th
                key={column.title}
                scope="col"
                className="px-6 h-10 text-center"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customizedData.map((item: DataType) => (
            //@ts-ignore
            <tr key={item.id} className="bg-white border-b">
              {
                //@ts-ignore
                Object.keys(item).map((key) => (
                  <td
                    key={key}
                    className={`text-center px-6 h-10 border border-lightBabyBlue ${
                      key === "id" &&
                      "font-medium w-16 bg-ofWhite text-gray3  border border-ofWhite border-r-lightBabyBlue "
                    }`}
                  >
                    {
                      //@ts-ignore
                      item[key]
                    }
                  </td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
