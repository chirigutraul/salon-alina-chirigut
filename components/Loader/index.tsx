import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingContext } from "components/Layout";
import { FunctionComponent, useContext } from "react";
import ReactModal from "react-modal";

const Loader: FunctionComponent = () => {
  const { loading } = useContext(LoadingContext);

  return (
    <ReactModal
      isOpen={loading}
      onRequestClose={() => {}}
      className={`absolute z-50 transform transition-all duration-1000
      w-full h-full grid place-items-center`}
      overlayClassName={`h-full w-full fixed z-10 top-0 backdrop-blur-md bg-white-30`}
    >
      <div className="grid place-items-center">
        <div className="absolute z-10 w-32 h-32 border-t-4 rounded-full place-items-center animate-spin border-primary"></div>
        <div className="absolute w-32 h-32 border-4 rounded-full place-items-center border-secondary"></div>

        <div className="grid place-items-center">
          <div className="w-8 h-16 border-primary border-[0.25rem] rounded-full fade-in-out z-10 bg-white grid place-content-center">
            <h6 className="text-primary">
              <FontAwesomeIcon icon={faHeart} className="" />
            </h6>
          </div>

          <div className="w-12 h-16 -mt-8 border-primary border-[0.25rem] fade-in-out rounded-t-[50%] bg-white-80"></div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Loader;
