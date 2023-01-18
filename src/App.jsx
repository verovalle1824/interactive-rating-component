import logo from './assets/images/icon-star.svg';
import ContainerStar from './components/ContainerStar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <main className="w-[33rem] h-auto bg-dark-blue m-auto rounded-md p-10 relative">
        <a href="index.html" className="block w-16 h-16 rounded-full bg-light-grey p-5">
          <img src={logo} alt="Logo de una estrella" />
        </a>
        <h2 className="font text-5xl my-5">How did we do?</h2>
        <p className="leading-10 opacity-50">
          plase let us know how we did with your sopport request.
          All feedback is appareciated. to help us improve our offerings.
        </p>
        <ContainerStar />
      </main>
      <Footer />
    </>
  )
}

export default App