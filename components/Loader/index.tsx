import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingContext } from "components/Layout";
import { FunctionComponent, useContext } from "react";

const Loader: FunctionComponent = () => {
  const context = useContext(LoadingContext);

  if (!context || !context.loading) return null;

  return (
    <div
      className={`absolute z-50 transform transition-all duration-1000
             w-full h-full grid place-items-center rounded-md backdrop-blur-md`}
    >
      <div className="grid place-items-center animate-bounce">
        <div className="w-16 h-32 border-primary border-[0.5rem] rounded-full fade-in-out z-10 bg-white grid place-content-center">
          <h5 className="text-primary">
            <FontAwesomeIcon icon={faHeart} className="" />
          </h5>
        </div>

        <div className="w-24 h-32 -mt-16 border-primary border-[0.8rem] fade-in-out rounded-t-[50%] bg-white-80"></div>
      </div>
    </div>
  );
};

export default Loader;
