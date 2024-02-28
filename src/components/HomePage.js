import Header from "./Header";
import HighlightSection from './HighlightSection';
import Event from './Event';
import Banner from './Banner';

function HomePage() {
  return (
    <div>
      <Header />
      <section>
        <div>
          <img src="images/patterns/pattern-curve-top-right.svg" alt="curve pattern" />
        </div>
        <div>
          <img src="/images/homepage/enjoyable-place-desktop.jpg" alt="nature" />
        </div>
        <div>
          <img src="/images/patterns/pattern-divide.svg" alt="divide pattern" />
          <h2>Enjoyable place for all the family</h2>
          <p>Our relaxed surroundings make fining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
      </section>

      <section>
        <div>
          <img src="/images/patterns/pattern-curve-top-left.svg" alt="curve pattern" />
        </div>
        <div>
          <img src="/images/patterns/pattern-divide.svg" alt=" divide pattern" />
          <h2>The most locally sourced food</h2>
          <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.</p>
        </div>
        <div>
          <img src="/images/homepage/locally-sourced-desktop.jpg" alt="chef plating food" />
        </div>
        <div>
          <img src="/images/patterns/pattern-lines.svg" alt="lines pattern" />
        </div>
      </section>

      <section>
       <HighlightSection />
      </section>

      <section>
       <Event 
        title="Family Gathering"
        description="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all."
        imgDesktop="/images/homepage/family-gathering-desktop.jpg"
        imgMobile="/images/homepage/family-gathering-mobile.jpg"
      />
      </section>

      <Banner />
    </div>
  );
}

export default HomePage;