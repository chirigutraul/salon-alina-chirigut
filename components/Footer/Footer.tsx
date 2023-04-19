import React from "react";
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
      className={` grid p-4 text-white gap-8
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
            <h2 className={`text-2xl `}>Telefon</h2>
            <p>De luni pana vineri orele 09:00 - 21:00</p>
            <div className={"flex items-center mt-2"}>
              <FontAwesomeIcon icon={faPhone} className={`text-2xl mr-2`} />
              <h3 className={`text-lg `}>+40769763966</h3>
            </div>
          </li>
          <li>
            <h2 className={`text-2xl `}>Email</h2>
            <p>Pentru probleme sau informatii extra</p>
            <div className={"flex items-center mt-2"}>
              <FontAwesomeIcon icon={faEnvelope} className={`text-2xl mr-2`} />
              <h3 className={`text-lg `}>chirigutalina@gmail.com</h3>
            </div>
          </li>
          <li>
            <h2 className={`text-2xl `}>Whatsapp</h2>
            <p>Trimite-ne un mesaj pe Whatsapp</p>
            <div className={"flex items-center mt-2"}>
              <FontAwesomeIcon
                icon={faWhatsapp as IconProp}
                className={`text-3xl mr-2`}
              />
              <h3 className={`text-lg `}>+40769763966</h3>
            </div>
          </li>
          <li>
            <h2 className={`text-2xl `}>Adresa</h2>
            <p>Salonul se afla la adresa</p>
            <div className={"flex items-center mt-2"}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={`text-3xl mr-2`}
              />
              <h3 className={`text-lg `}>
                Strada Nicolae Grigorescu 9, Sannicolau-Mare
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div className={"overflow-hidden h-[500px] w-full"}>
        <div id="my-map-canvas" className="w-full h-full max-w-full">
          <iframe
            className={"h-full w-full border-0"}
            src={`https://www.google.com/maps/embed/v1/place?q=Strada+Nicolae+Grigorescu+9,+Sânnicolau+Mare,+Romania&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
          ></iframe>
        </div>
        <a
          className="googlemaps-made"
          href="https://www.bootstrapskins.com/themes"
          id="grab-map-info"
        >
          premium bootstrap themes
        </a>
      </div>
    </div>
  );
}

export default Footer;
