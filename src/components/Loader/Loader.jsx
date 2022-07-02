// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Circles } from 'react-loader-spinner';
import s from './Loader.module.css';
// import { createPortal } from 'react-dom';
// const loaderRoot = document.querySelector('#loader-root');
const Loader = () => {
  return (
    // <div className="Overlay">
    <div className={s.loader}>
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
    // </div>,
    // loaderRoot
  );
};
export default Loader;
