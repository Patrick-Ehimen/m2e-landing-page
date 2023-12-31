import {
  Navbar,
  Hero,
  HeroImg,
  HeroImg2,
  Stats,
  Earn,
  CardDeal,
  RarityLevel,
  RarityTable,
  Faqs,
  Footer,
  LaunchApp,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <div>
        <Hero />
      </div>
      <HeroImg />
      <Stats />
      <Earn />
      <LaunchApp />
      <CardDeal />
      <RarityLevel />
      <RarityTable />
      <HeroImg2 />

      <Faqs />
      <Footer />
    </div>
  );
};

export default App;
