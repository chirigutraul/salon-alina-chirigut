import Image from "next/image";

export default function Preturi() {
  return (
    <section
      className={`relative h-full w-full flex flex-col items-center
        bg-[url('/images/hero-background.png')]
        bg-center bg-cover`}
    >
      <div className={"text-center nav-pad text-white sp-2v"}>
        <h2>Lista de preturi</h2>
      </div>
      <div className={"sp-2h"}>
        <table className={"prices-table"}>
          <thead>
            <tr>
              <th>Serviciu</th>
              <th>Durata</th>
              <th>Pret</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Manichiura</td>
              <td>30 min</td>
              <td>30 lei</td>
            </tr>
            <tr>
              <td>Manichiura</td>
              <td>30 min</td>
              <td>30 lei</td>
            </tr>
            <tr>
              <td>Manichiura</td>
              <td>30 min</td>
              <td>30 lei</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
