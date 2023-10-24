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
      <Navbar />
      <div className="">
        <Hero />
      </div>
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
