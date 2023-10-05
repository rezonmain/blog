import { Spacer } from "@/components/Spacer/Spacer";
import type { Props } from "./table.types";

const Table: React.FC<Props> = ({ headers, data, caption }) => {
  return (
    <div className="overflow-x-auto p-2">
      <table className="w-full bg-zinc-900 text-left">
        <thead className=" bg-zinc-400 text-zinc-950">
          <tr>
            {headers.map((header) => (
              <th className="px-6 py-1.5" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr className="border-b border-zinc-800" key={row[0]?.toString()}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th className="px-6 py-4" key={cell?.toString()}>
                    {cell}
                  </th>
                ) : (
                  <td className="px-6 py-4" key={cell?.toString()}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
        {caption && (
          <caption className="caption-bottom p-1.5 text-left">
            <p className="text-sm">{caption}</p>
          </caption>
        )}
      </table>
      <Spacer size="pb-8" />
    </div>
  );
};

export { Table };
