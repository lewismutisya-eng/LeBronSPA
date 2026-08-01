import PosterLayout from "./components/PosterLayout";
import PosterImage from "./components/PosterImage";
import PosterHeading from "./components/PosterHeading";
import PosterSubtext from "./components/PosterSubtext";
import PosterBadge from "./components/PosterBadge";

import KenWachira from "./assets/images/LeBron.png"; 

function App() {
  return (
    <PosterLayout>
      
      <div className="w-full md:w-1/2 h-[65vh] md:h-screen relative bg-black">
        <PosterImage imageSource={KenWachira} imageAlt="Ken Wachira" />
        
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent pt-24">
          <PosterBadge badgeText="BASKETBALL COACH" />
          <PosterHeading titleText="About Ken" />
          <div className="my-3">
            <PosterSubtext bodyText="Meet Ken Wachira, a basketball strategist known for his quick decision-making and game-reading abilities. His coaching style emphasizes enhancing court vision and predicting opponents' moves. Gain exclusive insights into basketball tactics and honing your 3-point game with Ken Wachira, the maestro behind the arc." />
          </div>
          <h4 className="italic text-[#e67e22] text-lg font-medium">
            "Read the game, own the court."
          </h4>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-auto md:h-screen p-8 md:p-12 md:overflow-y-scroll bg-white text-black">
        
        <div className="mb-10">
          <PosterHeading titleText="DECISIVE MOVES SPECIALIST" />
          <div className="w-12 h-[3px] bg-[#e67e22] mt-1.5 mb-5"></div>
          
          <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider">Strength</h3>
          <PosterSubtext bodyText="Strategic Vision & Quick Decision-Making & 3-Point Shooting" />
          
          <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mt-4">Expertise</h3>
          <PosterSubtext bodyText="Reading the game, making decisive moves, excellent 3-point shooting." />
        </div>

        <div className="mb-10">
          <PosterHeading titleText="VISIONARY INSIGHTS" />
          <div className="w-12 h-[3px] bg-[#e67e22] mt-1.5 mb-5"></div>
          
          <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider">Coaching Focus</h3>
          <PosterSubtext bodyText="Improving court vision, anticipating opponent moves" />
          
          <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mt-4 mb-1">Main Focus</h3>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-1">
            <li>Point guards</li>
            <li>Small forwards</li>
            <li>Team strategists</li>
          </ul>

          <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mt-4 mb-1">Also</h3>
          <ul className="list-disc pl-5 text-base text-gray-700">
            <li>Trains all basketball Positions</li>
          </ul>
        </div>

        <div className="mb-4">
          <PosterHeading titleText="ACCOLADES" />
          <div className="w-12 h-[3px] bg-[#e67e22] mt-1.5 mb-5"></div>
          <PosterSubtext bodyText="MVP 2022, renowned for exceptional 3-point shooting skills." />
        </div>

      </div>

    </PosterLayout>
  );
}

export default App;
