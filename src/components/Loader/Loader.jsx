// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Circles } from 'react-loader-spinner';
// import { createPortal } from 'react-dom';
// const loaderRoot = document.querySelector('#loader-root');
const Loader = () => {
  return (
    // <div className="Overlay">
    <div className="Loader">
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
    // </div>,
    // loaderRoot
  );
};
export default Loader;
