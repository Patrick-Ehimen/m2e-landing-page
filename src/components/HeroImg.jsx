// import { clients } from "../constants";

// const HeroImg = () => {
//   return (
//     <section>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {clients.map((client) => (
//           <div
//             key={client.id}
//             className="flex-1 flex justify-center items-center w-40 h-40 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl"
//           >
//             <img
//               src={client.logo}
//               alt="client_logo"
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroImg;

import { clients } from "../constants";

const HeroImg = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-wrap justify-center">
        <div className="flex">
          {clients.slice(0, 6).map((client) => (
            <div
              key={client.id}
              className="flex-1 flex justify-center items-center w-40 h-40 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-2"
            >
              <img
                src={client.logo}
                alt="client_logo"
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex">
          {clients.slice(6).map((client) => (
            <div
              key={client.id}
              className="flex-1 flex justify-center items-center w-40 h-40 bg-white bg-opacity-10 rounded-[34px] backdrop-blur-2xl m-2"
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
