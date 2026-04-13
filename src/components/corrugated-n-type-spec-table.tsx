import { corrugatedNTypeSpecMatrix } from "@/content/corrugated-n-type-spec-table";

const headerCell =
  "border border-[#3d7ab8] bg-[#2563ab] px-1.5 py-2 text-center text-[10px] font-bold uppercase leading-tight tracking-wide text-white sm:px-2 sm:text-xs";

const bodyCell =
  "border border-neutral-200 px-1.5 py-2 text-center text-[11px] tabular-nums text-foreground sm:px-2 sm:text-sm";

export function CorrugatedNTypeSpecTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm">
      <table className="w-full min-w-[640px] border-collapse text-foreground">
        <thead>
          <tr>
            <th className={headerCell} colSpan={2}>
              Diameter [in]
            </th>
            <th className={`${headerCell} w-14 sm:w-16`} rowSpan={2}>
              Braid
              <br />
              layer
            </th>
            <th className={`${headerCell} min-w-30`} rowSpan={2}>
              Braid
              <br />
              configuration
            </th>
            <th className={headerCell} colSpan={2}>
              Min. bend radius [in]
            </th>
            <th className={headerCell} colSpan={2}>
              Pressure [psig]
            </th>
            <th className={`${headerCell} w-16 sm:w-20`} rowSpan={2}>
              Weight
              <br />
              [lb/ft]
            </th>
          </tr>
          <tr>
            <th className={headerCell}>Nominal</th>
            <th className={headerCell}>Outside</th>
            <th className={headerCell}>Static</th>
            <th className={headerCell}>Dynamic</th>
            <th className={headerCell}>Burst test</th>
            <th className={headerCell}>MAWP</th>
          </tr>
        </thead>
        <tbody>
          {corrugatedNTypeSpecMatrix.map((group, gi) =>
            group.lines.map((line, li) => {
              const isFirst = li === 0;
              const zebra = gi % 2 === 0 ? "bg-white" : "bg-sky-50/90";
              return (
                <tr key={`${group.nominalIn}-${line.braidLayer}`} className={zebra}>
                  {isFirst ? (
                    <td
                      className={`${bodyCell} align-middle font-medium`}
                      rowSpan={2}
                    >
                      {group.nominalIn}
                    </td>
                  ) : null}
                  <td className={bodyCell}>{line.outsideDiameter}</td>
                  <td className={bodyCell}>{line.braidLayer}</td>
                  <td className={`${bodyCell} text-xs sm:text-sm`}>
                    {line.braidConfiguration}
                  </td>
                  {isFirst ? (
                    <td
                      className={`${bodyCell} align-middle`}
                      rowSpan={2}
                    >
                      {group.staticBendIn}
                    </td>
                  ) : null}
                  <td className={bodyCell}>{line.dynamicBend}</td>
                  <td className={bodyCell}>{line.burstPsig}</td>
                  <td className={bodyCell}>{line.mawpPsig}</td>
                  <td className={bodyCell}>{line.weightLbFt}</td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    </div>
  );
}
