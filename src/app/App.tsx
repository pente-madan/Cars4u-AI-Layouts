import { HeroSection } from './components/sections/HeroSection';
import { CarGridSection } from './components/sections/CarGridSection';
import { CarDetailSection } from './components/sections/CarDetailSection';
import { SellCarFormSection } from './components/sections/SellCarFormSection';
import { SplitScreenSection } from './components/sections/SplitScreenSection';

function App() {
  return (
    <main className="min-h-screen bg-background font-['Roboto'] text-foreground selection:bg-primary selection:text-white">
      <HeroSection />
      <CarGridSection />
      <CarDetailSection />
      <SellCarFormSection />
      <SplitScreenSection />
    </main>
  );
}

export default App;