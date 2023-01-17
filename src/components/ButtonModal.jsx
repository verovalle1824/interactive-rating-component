const ButtonModal = ({ visibilityModal }) => {
  return (
    <>
      <button 
        className="
          w-full bg-orange hover:bg-white text-2xl uppercase text-white 
          tracking-wider hover:text-orange font-bold py-3 rounded-md"
          type="button"
          onClick={ visibilityModal }>
            Submit
      </button>
    </>
  )
}
7
export default ButtonModal;