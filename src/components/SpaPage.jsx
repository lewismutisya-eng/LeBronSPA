import "./LeBron.css";
import Lebron from "/home/lewis/projects/StaticPage/staticpage/src/assets/images/LeBron.png"

function SpaPage() {
  return (
    
    <>
        <div className="container">
          <div className="left-container">
            <img src={Lebron} alt="LeBron James" />
            <div className="text-overlay">
              <h1>LeBron Raymone James</h1>
              <h3>Professional Athlete & Entreprenuer</h3>
              <h2>About King James</h2>
              <p>Lebron James is widely regarded as one of the the greatest basketball
                players in the NBA history. He is the all-time leading scorer in the 
                NBA and has claimed multple championships, MVP awards, and Olympic
                Gold medals across an historical multi-decade career.
              </p>
              <h4>Strive For Greatness</h4>
            </div>
          </div>
          <div className="right-container">
            <h2>EARLY LIFE & BACKGROUND</h2>
            <div className="accent-bar"></div>
            <h3>Birth</h3>
            <p>Born on December 30, 1984</p>
            <h3>Hometown</h3>
            <p> Akron, Ohio</p>
            <h3>High School</h3>
            <p> St. Vincent-St. Mary High School, where he was heralded as a national prodigy.</p>
            <h2>NBA CAREER TIMELINE</h2>
            <div className="accent-bar"></div>
            <p>Entering the NBA directly from high school as the #1 overall draft pick in 2003, LeBron altered the landscape of modern sports.</p>
            <h3>The Cleveland Eras</h3>
            <p>Drafted by the Cavaliers, he later returned in 2014 to deliver the franchise its historic first NBA Championship in 2016.</p>
            <h3>The Miami Eras</h3>
            <p>LeBron signed with the Miami Heat in 2010, where he won two NBA Championships in 2012 and 2013.</p>
            <h3>The Los Angeles Lakers</h3>
            <p>Moving west in 2018, he brought a championship back to Los Angeles in 2020 and broke the all-time regular season scoring record.
            </p>
            <h2>IMPACT</h2>
            <div className="accent-bar"></div>
            <p>Beyond statistics his legacy is defined consistency, durability, and extensive off-court philanthropy.</p>
            <h3>Milestones</h3>
            <p>4x NBA Champion, 4x NBA Finals MVP, 4x All-Star, and the first player to surpass 40,000 career regular season points.</p>
            <h3>Off-Court Legacy</h3>
           <p>Founder of the I PROMISE School in Akron, Hollywood producer, and global icon for athlete empowerment.</p>
          </div>

        </div>
    </>
   
  );
}

export default SpaPage