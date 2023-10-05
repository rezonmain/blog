import { Spacer } from "@/components/Spacer/Spacer";
import type { Props } from "./table.types";

const Table: React.FC<Props> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row[0]?.toString()}>
              {row.map((cell) => (
                <td key={cell?.toString()}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Spacer size="pb-8" />
    </div>
  );
};

export { Table };
