import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import useWindowSize from "utils/hooks/BreakPointsHooks";
import breakpoints from "utils/TailwindBreakPoints";

export default function Home() {
  const { width } = useWindowSize();

  const isLg = (!!width && !!(width >= breakpoints.lg)) ?? false;

  return (
    <div>
      <section>
        <div
          className={`relative h-full w-full
          bg-[url('/images/hero-background.png')]
          bg-center bg-cover
        `}
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
              ${isLg ? "sp-2t" : "sp-4t"}
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
        </div>
      </section>
    </div>
  );
}
