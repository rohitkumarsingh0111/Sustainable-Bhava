import { Link } from 'react-router-dom';

import sdg1 from "../assets/sdg1.jpg";
import sdg2 from "../assets/sdg2.jpg";
import sdg3 from "../assets/sdg3.jpg";
import sdg4 from "../assets/sdg4.jpg";
import sdg5 from "../assets/sdg5.jpg";
import sdg6 from "../assets/sdg6.jpg";
import sdg7 from "../assets/sdg7.jpg";
import sdg8 from "../assets/sdg8.jpg";
import sdg9 from "../assets/sdg9.jpg";
import sdg10 from "../assets/sdg10.jpg";
import sdg11 from "../assets/sdg11.jpg";
import sdg12 from "../assets/sdg12.jpg";
import sdg13 from "../assets/sdg13.jpg";
import sdg14 from "../assets/sdg14.jpg";
import sdg15 from "../assets/sdg15.jpg";
import sdg16 from "../assets/sdg16.jpg";
import sdg17 from "../assets/sdg17.jpg";
import photo18 from "../assets/photo18.png";
import handbook1 from "../assets/Handbook1.pdf";
import handbook2 from "../assets/Handbook2.pdf";
import handbook3 from "../assets/Handbook3.pdf";
import handbook4 from "../assets/Handbook4.pdf";
import handbook6 from "../assets/Handbook6.pdf";
import handbook7 from "../assets/Handbook7.pdf";
import handbook8 from "../assets/Handbook8.pdf";
import handbook9 from "../assets/Handbook9.pdf";
import handbook10 from "../assets/Handbook10.pdf";

const Sdgs = () =>{
    return(
        <>
{/* <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center md:mx-32">
    <div className="w-full md:w-1/2 flex justify-center items-center bg-green-400 rounded m-2 mt-2 md:hover:scale-105 transition duration-150 shadow-lg drop-shadow-md md:hover:rounded-none">
        <button><img src=#} alt="SDG 1" className="w-full h-full rounded hover:rounded-none" /></button>
    </div>
    <div className="w-full md:w-1/2 flex justify-center items-center bg-green-400 rounded m-2 mt-2 md:hover:scale-105 transition duration-150 shadow-lg drop-shadow-md md:hover:rounded-none">
        <button><img src={sdg2} alt="SDG 2" className="w-full h-full" /></button>
    </div>
    {/* Add similar lines for other SDGs */}
{/* </div> */} 



        <div className="hidden md:block">
        <div className="flex flex-row justify-center items-center md:mx-32">
        
            <Link to={handbook1} target="_blank"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg1} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
            <Link to={handbook2} target="_blank"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg2} alt="SDG 2" className="w-full h-full" /></button></div></Link>
            <Link to={handbook3} target="_blank"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg3} alt="SDG 3" className="w-full h-full" /></button></div></Link>
            <Link to={handbook4} target="_blank"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg4} alt="SDG 4" className="w-full h-full" /></button></div></Link>
            <Link to="#"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg5} alt="SDG 5" className="w-full h-full" /></button></div></Link>
            <Link to={handbook6} target="_blank"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg6} alt="SDG 6" className="w-full h-full" /></button></div></Link>
        </div>
        <div className="flex flex-row justify-center items-center md:mx-32">
            <Link to={handbook7} target="_blank"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg7} alt="SDG 7" className="w-full h-full" /></button></div></Link>
            <Link to={handbook8} target="_blank"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg8} alt="SDG 8" className="w-full h-full" /></button></div></Link>
            <Link to={handbook9} target="_blank"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg9} alt="SDG 9" className="w-full h-full" /></button></div></Link>
            <Link to={handbook10} target="_blank"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg10} alt="SDG 10" className="w-full h-ful l"/></button></div></Link>
            <Link to="#"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg11} alt="SDG 11" className="w-full h-ful l"/></button></div></Link>
            <Link to="#"><div className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none "><button><img src={sdg12} alt="SDG 12" className="w-full h-ful l"/></button></div></Link>
        </div>
        <div className="flex flex-row justify-center items-center md:mx-32">
    <Link to="#" className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none">
        <img src={sdg13} alt="SDG 13" className="w-full h-full rounded hover:rounded-none" />
    </Link>
    <Link to="#" className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none">
        <img src={sdg14} alt="SDG 14" className="w-full h-full rounded hover:rounded-none" />
    </Link>
    <Link to="#" className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none">
        <img src={sdg15} alt="SDG 15" className="w-full h-full rounded hover:rounded-none" />
    </Link>
    <Link to="#" className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none">
        <img src={sdg16} alt="SDG 16" className="w-full h-full rounded hover:rounded-none" />
    </Link>
    <Link to="#" className="md:basis-1/6 flex justify-center items-center bg-green-400 rounded m-2 mt-2 hover:scale-105 transition duration-150 shadow-lg drop-shadow-md hover:rounded-none">
        <img src={sdg17} alt="SDG 17" className="w-full h-full rounded hover:rounded-none" />
    </Link>
    <Link to="#" className="md:basis-1/6 flex justify-center items-center rounded m-2 mt-2 hover:scale-105 transition duration-150 hover:rounded-none">
        <img src={photo18} alt="know more !!" className="w-full h-full" />
    </Link>
</div>

        </div>

        {/* for the mobile screen */}

        <div className="flex flex-col md:hidden">
            <div className="flex flex-row mx-2">
                <Link to={handbook1} target="_blank"><div className="basis-1/3 m-1"><button><img src={sdg1} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to={handbook2} target="_blank"><div className="basis-1/3 m-1"><button><img src={sdg2} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to={handbook3} target="_blank"><div className="basis-1/3 m-1"><button><img src={sdg3} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
            </div>
            <div className="flex flex-row mx-2">
                <Link to={handbook4} target="_blank"><div className="basis-1/3 m-1"><button><img src={sdg4} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to="#"><div className="basis-1/3 m-1"><button><img src={sdg5} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to={handbook6} target="_blank"><div className="basis-1/3 m-1"><button><img src={sdg6} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
            </div>
            <div className="flex flex-row mx-2">
                <Link to={handbook7} target="_blank"><div className="basis-1/3 m-1"><button><img src={sdg7} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to={handbook8} target="_blank"><div className="basis-1/3 m-1"><button><img src={sdg8} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to={handbook9} target="_blank"><div className="basis-1/3 m-1"><button><img src={sdg9} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
            </div>
            <div className="flex flex-row mx-2">
                <Link to={handbook10} target="_blank"><div className="basis-1/3 m-1"><button><img src={sdg10} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to="#"><div className="basis-1/3 m-1"><button><img src={sdg11} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to="#"><div className="basis-1/3 m-1"><button><img src={sdg12} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
            </div>
            <div className="flex flex-row mx-2">
                <Link to="#"><div className="basis-1/3 m-1"><button><img src={sdg13} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to="#"><div className="basis-1/3 m-1"><button><img src={sdg14} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
                <Link to="#"><div className="basis-1/3 m-1"><button><img src={sdg15} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></button></div></Link>
            </div>
            <div className="flex flex-row mx-2">
                <Link to="#" className="basis-1/3 m-1"><img src={sdg16} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></Link>
                <Link to="#" className="basis-1/3 m-1"><img src={sdg17} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></Link>
                <Link to="#" className="basis-1/3 m-1"><img src={photo18} alt="SDG 1" className="w-full h-full rounded hover:rounded-none"  /></Link>
            </div>
        </div>
        </>
    );
}

export default Sdgs;