import { useState } from "react";
import data from "..//assets/faqdata.json";
import { FaMinus, FaPlus } from "react-icons/fa";
import HeroNav from "../HeroNav";

export default function Faq() {

    const [current,setcurrent] = useState("PRODUCT");
    const [act,setact] = useState(null);

    function toggleindex(id)
    {
      console.log(act);
      setact(act===id ? null : id);
    }

    function buttoncolor(type) {
      return current === type ? 'p-2 bg-[#87553B] text-white rounded-[5px]' : 'text-black';
  }

    return (
      <div>
        <div className="pt-4 pb-4 pl-14 pr-14 bg-[#e1d9d0]">
          <HeroNav />
        </div>
      <div>
        <div className="container flex-col justify-center items-center mx-auto bg-[#e1d9d0] min-h-fit min-w-full">
          <h1 className="flex items-center justify-center p-4 text-5xl tracking-widest font-Arima font-[700] mx-auto">FAQ</h1>

          <div className="flex p-3 font-Arima font-semibold text-lg max-w-[60%] flex-wrap mx-auto sm:flex-col gap-5 md:flex-row justify-evenly">
              <button className={`nav-item ${buttoncolor("PRODUCT")}`}  onClick={() => setcurrent("PRODUCT")}>PRODUCT</button>
              <button className={`nav-item ${buttoncolor("DEVICES")}`} onClick={() => setcurrent("DEVICES")}>DEVICES</button>
              <button className={`nav-item ${buttoncolor("SUBSCRIPTION")}`} onClick={() => setcurrent("SUBSCRIPTION")}>SUBSCRIPTION</button>
              <button className={`nav-item ${buttoncolor("OTHERS")}`} onClick={() => setcurrent("OTHERS")}>OTHERS</button>
          </div>

          <div className="container h-auto w-[70%] mx-auto m-10 p-2">

            {data[current].map((item,index) => (

              <div key={index} className="faq-items font-Arima flex-col">

                <div className="flex items-center space-x-4 font-semibold text-lg tracking-wider" 
                    onClick={() => toggleindex(item.id)}>
                    {act===item.id ? <FaMinus className="text-xs"/> : <FaPlus className="text-xs"/>}
                    <span>{item.question}</span>
                </div>
                <div
                    className={`h-fit w-[95%] mx-6 p-4 text-[17px] tracking-wider text-left overflow-hidden transition-transform duration-100 ease-in-out ${
                        act === item.id ? 'transform scale-100 opacity-80' : 'transform scale-95'}`}>
                    {act === item.id && item.answer}
                </div>
              </div>
            ))}
            
          </div>

          <div className="container font-Arima font-semibold tracking-wider text-center">
            <h1 className="text-[25px] mb-3">HAVE SOMETHING NOT BEING ADDRESSED?</h1>
            <button className="md:max-w-[30%] text-1xl text-white bg-[#87553B] p-3 rounded-md mx-auto mb-10 hover:text-sm hover:rounded-xl">CONTACT US</button>
          </div>
        </div>
      </div>
      </div>
    );
}