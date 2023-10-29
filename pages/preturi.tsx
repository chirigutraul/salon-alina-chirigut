import { Service } from "@prisma/client";
import { LoadingContext } from "components/Layout";
import { useContext, useEffect, useState } from "react";
import { servicesLabels } from "utils/constants";
import { minutesToString } from "utils/helpers/format-hour";
import { getServices } from "utils/hooks/requests/services";

export default function Preturi() {
  const { setLoading, setDebouncedLoading } = useContext(LoadingContext);
  const [servicesAndPrices, setServicesAndPrices] = useState<Service[]>();

  const fetchServices = async () => {
    setLoading(true);
    const services = await getServices();
    setServicesAndPrices(services);
    setDebouncedLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

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
           ${!servicesAndPrices && "h-[430px]"}
          `}
        >
          <thead>
            <tr className={`border-b-[1px] border-black-50`}>
              <th className={`sp-h sp-v`}>
                <h6>Serviciu</h6>
              </th>
              <th className={`sp-h sp-v`}>
                <h6>Pret</h6>
              </th>
              <th className={`sp-h sp-v`}>
                <h6>Durata</h6>
              </th>
            </tr>
          </thead>
          <tbody
            className={`
          [&>*:nth-child(even)]:bg-black-10
          `}
          >
            {servicesAndPrices?.length ? (
              servicesAndPrices.map((service) => (
                <tr key={service.id}>
                  <td className={`sp-h sp-v`}>
                    <h6>{servicesLabels.get(service.name)}</h6>
                  </td>
                  <td className={`sp-h sp-v`}>
                    <h6>{service.price}lei</h6>
                  </td>
                  <td className={`sp-h sp-v`}>
                    <h6>{minutesToString(service)}</h6>
                  </td>
                </tr>
              ))
            ) : (
              <tr>Niciun serviciu gasit</tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
