import Image from "next/image";

export default function Preturi() {
  return (
    <section
      className={`relative h-full w-full flex flex-col items-center
        bg-[url('/images/hero-background.png')]
        bg-center bg-cover xs:sp-h 
      `}
    >
      <div className={"text-center nav-pad text-white sp-2v"}>
        <h2>Lista de preturi</h2>
      </div>
      <div className={"sp-h sp-v w-full bg-white-80 rounded-md"}>
        <table className={"prices-table w-full table-auto"}>
          <thead>
            <tr>
              <th>
                <h6>Serviciu</h6>
              </th>
              <th>
                <h6>Durata</h6>
              </th>
              <th>
                <h6>Pret</h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Manichiura constructie gel</p>
              </td>
              <td>
                <p>1h 30m</p>
              </td>
              <td>
                <p>100 lei</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Intretinere</p>
              </td>
              <td>
                <p>1h 30m</p>
              </td>
              <td>
                <p>70 lei</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Pedichiura constructie gel</p>
              </td>
              <td>
                <p>1h 30m</p>
              </td>
              <td>
                <p>100 lei</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
