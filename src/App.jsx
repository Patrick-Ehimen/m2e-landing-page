import {
  Navbar,
  Hero,
  HeroImg,
  Stats,
  Earn,
  CardDeal,
  RarityLevel,
  RarityTable,
  Team,
  Faqs,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* <div className="fixed w-1480px h-100px top-0 left-0 bg-[#ffffff0f] rounded-[50px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]"> */}

      {/* </div> */}
      <Navbar />
      <Hero />
      <HeroImg />
      <Stats />
      <Earn />
      <CardDeal />
      <RarityLevel />
      <RarityTable />
      <HeroImg />
      <Team />
      <Faqs />
      <Footer />
    </div>
  );
};

export default App;
