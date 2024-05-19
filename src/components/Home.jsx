import React from "react";
import lineimg from "../assets/line.png"
import p1 from "../assets/p1.png"
// import p2 from "../assets/p2.png"




export default function Home() {
    const stars = [
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
    ,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
    ,  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
    ,  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
    ,  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
    
    
    
    
    ]
  return (
    <div className=" mx-[300px] pb-9">
      <div className="flex h-full     space-x-2  ">
        <div className="bg-white w-[65%] h-[550px] rounded-2xl p-11 flex justify-between flex-col ">
            <div className="">
            <div className="flex  items-center space-x-2">
            <div className="flex space-x-1">
              <div className="bg-black     h-5 w-3               "></div>
              <div className="bg-yellow-500  h-5 w-3                  "></div>
            </div>
            <div className="">

            TIME FOR FITNESS-23
            </div>
          </div>
          <div className="font-kenia text-9xl mt-8">OWN TOUR STRENGTH, OWN YOU</div>


            </div>
         
          <div className="flex space-x-10  ">
          <div   className="bg-customlightBlack text-white  flex items-center w-[50%]  justify-center  rounded-full   text-lg hover:bg-blue-700">
            START YOUR JOURNEY
          </div>
          <div>

          </div>

          <img src={lineimg} className="h-10" alt="" />
          <div className="w-40">LUXURY FITNESS EXPERIENCE</div>
          </div>
        </div>
        <div className="bg-blue-700 w-[45%] h-[550px] flex flex-col p-10 justify-between rounded-2xl bg-[url(https://img.buzzfeed.com/buzzfeed-static/static/2020-10/2/17/enhanced/cf2b33b07adb/enhanced-3884-1601659117-23.jpg?crop=550:393;72,24&output-format=auto&output-quality=auto)] bg-no-repeat bg-cover bg-center ">
             {/* <img src={p1} className="h-full" alt="" /> */}
             <div className="h-12 bg-black w-12 rounded-full flex  justify-center items-center">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>


             </div>
             <div className=" text-white font-semibold text-2xl w-[50%] ">TRAIN ON YOUR OWN TIME 
</div>
        </div>

        {/* <div></div> */}
      </div>
      <div className="flex      mt-2 space-x-2 w-full h-[250px]   ">
        <div className="bg-customLightPink w-[65%]  rounded-2xl p-5 flex space-x-10 ">

            <div className=" h-[100%] w-64 rounded-2xl  bg-no-repeat bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/young-woman-using-phone-outside-night-street_1303-17021.jpg)]">

            </div>
            <div className="w-full h-full   flex flex-col justify-between">
            <div className=" flex   text-sm justify-between    ">
                <div>24/7 SUPPORT</div>
                <div className="flex space-x-4">
                    <div className="w-[150px] text-right">12834 FITNESS LN BROOKLYN, HY</div>

                    <div className="bg-black p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-customYellow ">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>


                    </div>
                </div>

            </div>

            <div className="text-3xl font-semibold w-[70%]  ">CONTACT US & RISE STRONGER</div>

            </div>
           


        </div>
        <div className="bg-white  w-[45%]   rounded-2xl p-8">
            <div className="flex space-x-10 h-[50%]   items-center">
                <div className="font-kenia text-7xl">4.98</div>


                <div className="flex flex-col justify-center "> 
                <div className="flex">

               { stars.map((i) => {
                return i;
               })}
                </div>
                <div className="text-sm">BASED ON 619 REVIEWS</div>



                </div>

            </div>
            <div className=" ">
                 {genres.map((i) => {
                    return (<button className="m-1 px-4 py-1 border-solid text-sm  font-semibold border-gray-300 border rounded-3xl ">{i}</button>)
                 })}
            </div>

        </div>

        {/* <div></div> */}
      </div>
    </div>
  );
}

const genres = [
    "BOXING RING",
    "BASKET BALL COURTS",
    "JUICE",
    "PERSONAL TRAINERS",
    "LOCKERS",
    "FREE PARKING"

    
]


