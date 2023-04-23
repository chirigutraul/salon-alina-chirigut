import { FunctionComponent } from "react";

export default function Preturi() {
  return (
    <section
      className={`relative h-full w-full flex flex-col items-center
        bg-[url('/images/hero-background.png')]
        bg-center bg-cover sp-h sm:sp-5h 
      `}
    >
      <div className={"text-center nav-pad text-white sp-2v"}>
        <h2>Lista de preturi</h2>
      </div>
      <div className={"w-full bg-white-80 rounded-md word overflow-auto"}>
        <table
          className={`prices-table w-full table-auto 
           divide-solid whitespace-nowrap
           [&>*:nth-child(odd)]:bg-black-10
          `}
        >
          <thead>
            <tr className={`border-b-[1px] border-black-50`}>
              <th className={`sp-h sp-v`}>
                <h6>Serviciu</h6>
              </th>
              <th className={`sp-h sp-v`}>
                <h6>Durata</h6>
              </th>
              <th className={`sp-h sp-v`}>
                <h6>Pret</h6>
              </th>
            </tr>
          </thead>
          <tbody
            className={`
          [&>*:nth-child(even)]:bg-black-10
          `}
          >
            <tr>
              <td className={`sp-h sp-v`}>
                <h6>Manichiura constructie gel</h6>
              </td>
              <td className={`sp-h sp-v`}>
                <h6>1h 30m</h6>
              </td>
              <td className={`sp-h sp-v`}>
                <h6>100 lei</h6>
              </td>
            </tr>
            <tr>
              <td className={`sp-h sp-v`}>
                <h6>Manichiura constructie gel</h6>
              </td>
              <td className={`sp-h sp-v`}>
                <h6>1h 30m</h6>
              </td>
              <td className={`sp-h sp-v`}>
                <h6>100 lei</h6>
              </td>
            </tr>
            <tr>
              <td className={`sp-h sp-v`}>
                <h6>Manichiura constructie gel</h6>
              </td>
              <td className={`sp-h sp-v`}>
                <h6>1h 30m</h6>
              </td>
              <td className={`sp-h sp-v`}>
                <h6>100 lei</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
