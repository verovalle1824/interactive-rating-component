import { useState } from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const ContainerStar = () => {

  const [stars, setStarts] = useState([1, 2, 3, 4, 5]);
  const [selectedStar, setSelectedStar] = useState(0);
  const [visibilityModal, setVisibilityModal] = useState(false);

  const handleClick = (e) => {
    setSelectedStar(e.target.textContent);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibilityModal(!visibilityModal);
  }
  
  console.log(selectedStar);

  return (
    <>
      <div className="flex justify-between my-12 text-center">
        {
          stars.map((star) =>
            <span
              key={ star }
              className="w-16 h-16 rounded-full bg-light-grey hover:bg-orange opacity-50 hover:opacity-100 p-5"
              onClick={ handleClick }>
              { star }
            </span>
          )
        }
      </div>
      <ButtonModal 
        visibilityModal={ handleSubmit }
      />
      {
        visibilityModal &&
          <Modal 
            star={ selectedStar } 
            isClose={ visibilityModal }
            setCloseModal={ handleSubmit }
          />
      }
    </>
  )
}

export default ContainerStar;