import React from "react";
import { roboto } from "utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function Footer() {
  return (
    <div
      id="contact"
      className={`bg-accent grid p-4 text-white gap-8
      lg:grid-cols-2 lg:p-8
    `}
    >
      <div>
        <ul
          className={`
        flex flex-col gap-8
        `}
        >
          <li>
            <h2 className={`text-2xl ${roboto.className}`}>Telefon</h2>
            <p>De luni pana vineri orele 09:00 - 21:00</p>
            <div className={"flex items-center mt-2"}>
              <FontAwesomeIcon icon={faPhone} className={`text-2xl mr-2`} />
              <h3 className={`text-lg ${roboto.className}`}>+40769763966</h3>
            </div>
          </li>
          <li>
            <h2 className={`text-2xl ${roboto.className}`}>Email</h2>
            <p>Pentru probleme sau informatii extra</p>
            <div className={"flex items-center mt-2"}>
              <FontAwesomeIcon icon={faEnvelope} className={`text-2xl mr-2`} />
              <h3 className={`text-lg ${roboto.className}`}>
                chirigutalina@gmail.com
              </h3>
            </div>
          </li>
          <li>
            <h2 className={`text-2xl ${roboto.className}`}>Whatsapp</h2>
            <p>Trimite-ne un mesaj pe Whatsapp</p>
            <div className={"flex items-center mt-2"}>
              <FontAwesomeIcon
                icon={faWhatsapp as IconProp}
                className={`text-3xl mr-2`}
              />
              <h3 className={`text-lg ${roboto.className}`}>+40769763966</h3>
            </div>
          </li>
          <li>
            <h2 className={`text-2xl ${roboto.className}`}>Adresa</h2>
            <p>Salonul se afla la adresa</p>
            <div className={"flex items-center mt-2"}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={`text-3xl mr-2`}
              />
              <h3 className={`text-lg ${roboto.className}`}>
                Strada Nicolae Grigorescu 9, Sannicolau-Mare
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={`text-2xl ${roboto.className} mb-2`}>Ne gasesti aici</h2>
        <iframe
          width="100%"
          height="428"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Strada%20Nicolae%20Grigorescu%209+(Ally%20Nails)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
