import Image from 'next/image';
import { useState } from 'react';
import logoImage from '../images/logo.jpg';

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="h-20 px-3 flex">
      <div className="flex m-auto items-center justify-between w-full max-w-screen-xl">
        <Image className="w-2/3 max-w-[300px]" src={logoImage} alt="logo" />
        <button
          className="flex items-center justify-center z-20 md:hidden w-10 h-10 border-2 border-white rounded-full"
          onClick={() => setIsNavOpen((oldIsNavOpen) => !oldIsNavOpen)}
        >
          <span
            className={`${
              isNavOpen
                ? 'before:rotate-90 after:rotate-90 before:top-0 after:top-0 rotate-45 bg-white before:bg-white after:bg-white'
                : 'before:top-[-10px] after:top-[10px] after:bg-green-500 before:bg-green-500 bg-green-500'
            } relative block w-7 duration-500 ease-in-out before:duration-500 after:duration-500 before:ease-in-out after:ease-in-out h-0.5 transition=[0.5s] before:content-[''] before:block before:w-full before:h-full before:absolute after:content-[''] after:block after:w-full after:h-full after:absolute`}
          />
        </button>
        <nav
          className={
            isNavOpen
              ? 'absolute w-full h-full top-0 left-0 z-10 flex flex-col justify-evenly items-center bg-green-900 bg-opacity-90 backdrop-blur-md rounded drop-shadow-lg'
              : 'hidden'
          }
        >
          <Image className="w-[150px]" src={logoImage} alt="logo" />

          <a href="#" className="text-white">
            AGENDAMENTO
          </a>
          <a href="#" className="text-white">
            NOSSA HISTÓRIA
          </a>
          <a href="#" className="text-white">
            FOTOS
          </a>
          <a href="#" className="text-white">
            CRC
          </a>
          <a href="#" className="text-white">
            UNIDADES
          </a>
          <span className="w-44 h-0.5 rounded-full bg-green-300" />
          <span className="text-white">Segunda-Feira / Sábado</span>
        </nav>
      </div>
    </header>
  );
}
