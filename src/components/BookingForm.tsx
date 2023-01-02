import Image from 'next/image';
import { MapPin, User } from 'phosphor-react';

import whatsappLogo from '../images/whatsappLogo.svg';

export function BookingForm() {
  return (
    <div className="w-80 h-80 bg-white rounded-md p-6 flex flex-col items-center justify-around">
      <span className="text-xl text-green-500">Agende uma consulta</span>

      <div className="relative flex items-center px-2 rounded-lg border border-gray-300 h-12">
        <div className="bg-green-300 p-1 rounded-full">
          <User size={26} color="#fff" />
        </div>
        <input
          type="text"
          id="floating_outlined"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0  peer"
          placeholder=""
        />
        <label
          htmlFor="floating_outlined"
          className="absolute bg-white text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-11"
        >
          Nome completo
        </label>
      </div>

      <div className="relative flex items-center px-2 rounded-lg border border-gray-300 w-full h-12">
        <div className="bg-green-300 p-1 rounded-full mr-2">
          <MapPin size={26} color="#fff" />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-500 text-sm">Localização</label>
          <select className="w-full bg-transparent" name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <a
        className="bg-blue-default w-full flex gap-3 items-center justify-center text-white font-bold h-12 rounded-lg"
        target="_blank"
        href="https://wa.me/5585999878511?text=Ol%C3%A1%2C+meu+nome+%C3%A9+Jefferson%2C+gostaria+de+agendar+um+horario+na+unidade+Genibau."
        rel="noreferrer"
      >
        <Image src={whatsappLogo} alt="Logo whatsapp" />
        <span>Quero Agendar</span>
      </a>
    </div>
  );
}
