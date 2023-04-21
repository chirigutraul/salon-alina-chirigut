import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FunctionComponent, useRef } from "react";
import { popularServices } from "utils/constants";
import Image from "next/image";
import { useHorizontalScroll } from "utils/hooks/useHorizontalScroll";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularServices />
      <AboutUsSection />
      <VisitUsSection />
    </>
  );
}

const HeroSection: FunctionComponent = () => {
  return (
    <section
      className={`relative h-full w-full
        bg-[url('/images/hero-background.png')]
        bg-center bg-cover`}
    >
      <div className={`nav-pad w-full sp-h grid place-items-center`}>
        <div
          className={`flex flex-col items-center justify-center bg-white-80
            text-center rounded-lg h-full sp-2h sp-2v
            w-full
            xs:max-w-full
            sm:max-w-[372px]
            md:max-w-[576px]
            lg:max-w-[780px]
          `}
        >
          <h2 className={`text-black-75`}>Bun venit la</h2>
          <h1 className={`text-gradient sp-2t`}>Aly Nails</h1>
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
        {popularServices.map((service, index) => (
          <li className={"sp-2t"} key={service.name + index}>
            <ServiceCard
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

interface ReviewProps {
  name: string;
  score: number;
  description: string;
}

const Review: FunctionComponent<ReviewProps> = ({
  name,
  score,
  description,
}) => {
  const stars = [];

  for (let i = 0; i < score; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} className={"text-yellow"} />);
  }

  return (
    <div className={"bg-black-75 rounded-lg p-4 flex flex-col gap-2"}>
      <h6>{name}</h6>
      <div className={`flex flex-row gap-2  `}>{stars}</div>
      <div className={"w-72"}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const AboutUsSection: FunctionComponent = () => {
  const horizontalScrollRef = useHorizontalScroll();
  return (
    <section className={`bg-gradient text-white`}>
      <div className={`sp-2h`}>
        <h2>Despre noi</h2>
        <h5>
          manichiura & pedichiura <br /> realizate cu drag
        </h5>
      </div>
      <div
        className={`flex flex-col
      md:flex-row md:sp-2h md:gap-4
      `}
      >
        <div
          className={`basis-full aspect-video bg-white-80 sp-2t
        md:basis-1/2 
        `}
        >
          {/* picture goes here */}
        </div>
        <div
          className={`sp-2h basis-full text-right sp-2t
        md:basis-1/2 md:sp-0h
        `}
        >
          <h2>Aly Nails</h2>
          <p className={"sp-t"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            voluptas, dicta velit, explicabo libero exercitationem itaque quod
            unde mollitia facilis minima dignissimos? Vel in temporibus tempora
            libero corporis quos similique.
          </p>
        </div>
      </div>
      <div
        ref={horizontalScrollRef as any}
        className={`sp-2h sp-t scroll-x overflow-x-auto
        gap-4 flex flex-row relative review-container sp-v
      `}
      >
        <Review
          name={"Chirigut Raul"}
          score={5}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <Review
          name={"Chirigut Raul"}
          score={3}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <Review
          name={"Chirigut Raul"}
          score={4}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <Review
          name={"Chirigut Raul"}
          score={4}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <Review
          name={"Chirigut Raul"}
          score={4}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <Review
          name={"Chirigut Raul"}
          score={4}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
      </div>
    </section>
  );
};

const VisitUsSection: FunctionComponent = () => {
  return (
    <section
      className={`bg-white text-center flex flex-col sp-h
    lg:flex-row lg:items-center lg:gap-4 lg:text-left lg:sp-2h
    `}
    >
      <div className={"basis-full lg:basis-1/2"}>
        <h1>Fa-ne o vizita la locatie!</h1>
      </div>
      <div
        className={`bg-black-25 basis-full aspect-[15/16] sp-4t relative
      lg:basis-1/2 lg:sp-0t
      `}
      >
        <div
          className={`absolute w-full h-16 bottom-0 bg-black-50 grid place-items-center text-white`}
        >
          <h5>Strada Nicolae Grigorescu, Nr.9</h5>
        </div>
      </div>
    </section>
  );
};
