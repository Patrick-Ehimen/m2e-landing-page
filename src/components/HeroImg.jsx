// import { clients } from "../constants";

// const HeroImg = () => {
//   return (
//     <section className="flex flex-col items-center pt-16 pb-8">
//       <div className="container flex flex-col items-center">
//         <div className="flex flex-wrap justify-center w-full px-10 max-w-sm">
//           {clients.slice(0, 6).map((client) => (
//             <div
//               key={client.id}
//               className="flex justify-center items-center w-40 h-40 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-3 sm:m-5"
//             >
//               <img
//                 src={client.logo}
//                 alt="client_logo"
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-wrap justify-center w-full  mt-12 max-w-sm">
//           {clients.slice(6, 11).map((client) => (
//             <div
//               key={client.id}
//               className="flex justify-center items-center w-40 h-40 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-3 sm:m-5"
//             >
//               <img
//                 src={client.logo}
//                 alt="client_logo"
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroImg;

import { clients } from "../constants";

const HeroImg = () => {
  return (
    <section className="flex flex-col items-center pt-16 pb-8">
      <div className="container flex flex-col items-center">
        <div className="flex flex-wrap justify-center  ">
          {clients.slice(0, 6).map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center w-40 h-40 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-3 sm:m-5"
            >
              <img
                src={client.logo}
                alt="client_logo"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center w-full max-w-4xl mt-12">
          {clients.slice(6).map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center w-40 h-40 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-3 sm:m-5"
            >
              <img
                src={client.logo}
                alt="client_logo"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroImg;
