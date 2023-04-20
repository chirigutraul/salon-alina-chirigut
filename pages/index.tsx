import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FunctionComponent } from "react";
import useWindowSize from "utils/hooks/BreakPointsHooks";
import breakpoints from "utils/TailwindBreakPoints";
import { popularServices } from "utils/constants";
import Image from "next/image";

export default function Home() {
  const { width } = useWindowSize();
  const isMd = (!!width && !!(width >= breakpoints.lg)) ?? false;

  return (
    <>
      <HeroSection isMd={isMd} />
      <PopularServices />
    </>
  );
}

interface HeroProps {
  isMd: boolean;
}

const HeroSection: FunctionComponent<HeroProps> = ({ isMd }) => {
  return (
    <section
      className={`relative h-full w-full
        bg-[url('/images/hero-background.png')]
        bg-center bg-cover`}
    >
      <div className={`sp-4v nav-pad w-full sp-h grid place-items-center`}>
        <div
          className={`flex flex-col items-center justify-center bg-white-80
            text-center rounded-lg h-full sp-2h sp-4v
            w-full
            xs:w-[372px]
            md:w-[576px]
            lg:w-[780px]
          `}
        >
          <h2 className={`text-black-75`}>Bun venit la</h2>
          <h1 className={`text-gradient sp-2t`}>Ally Nails</h1>
          <h5 className={`text-black-75 sp-t`}>
            unde fiecare programare este o <br /> experienta
          </h5>
          <Link href="programari">
            <button
              className={`
            btn btn-gradient btn-icon 
            sp-2t
            `}
            >
              <h6>Programare</h6>
              <h6>
                <FontAwesomeIcon icon={faArrowRight} />
              </h6>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  name: string;
  description: string;
  picture: string;
}
const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  name,
  description,
  picture,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 text-center
    `}
    >
      <div
        className={`relative 
        rounded-full overflow-hidden
      h-64 w-64
      xl:h-80 xl:w-80
      2xl:h-96 2xl:w-96
      `}
      >
        <Image
          src={picture}
          alt="Poza cu serviciu popular"
          fill={true}
          className={`object-cover`}
        />
      </div>
      <h4>{name}</h4>
      <p className={"xs:sp-h"}>{description}</p>
    </div>
  );
};

const PopularServices: FunctionComponent = () => {
  return (
    <section className={"bg-white w-full text-black sp-h"}>
      <div className={`text-center`}>
        <h2>Servicii populare</h2>
      </div>
      <ul className={`lg:flex-row lg:flex`}>
        {popularServices.map((service) => (
          <li className={"sp-2t"}>
            <ServiceCard
              key={service.name}
              name={service.name}
              description={service.description}
              picture={service.picture}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
