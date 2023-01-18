import logoModal from '../assets/images/illustration-thank-you.svg';
import closeModal from '../assets/images/close.png';

const Modal = ({ star, isClose, setCloseModal }) => {

  return (
    isClose && ( 
      <div className="absolute top-0 left-0 w-full h-full bg-dark-blue p-10 rounded-md ">
        <img 
          className="w-6 absolute top-5 right-5 cursor-pointer" 
          src={closeModal} 
          alt="Cerrar modal" 
          onClick={ setCloseModal }
        />
        <img 
          className="w-60 m-auto" 
          src={logoModal} 
          alt="Logo de thank you" 
        />
        <div className="w-60 bg-light-grey text-orange text-center rounded-md py-2 m-auto my-10">
          <h3>You selected<span className="mx-1">{ star }</span>out of 5</h3>
        </div>
        <h2 className="font text-5xl my-5">Thank you!</h2>
        <p className="leading-10 opacity-50">
          We appreciate you taking the time to give a rating.
          If you ever need more support, domn't hesitate to get in touch.
        </p>
      </div>
    )
  );
}

export default Modal;