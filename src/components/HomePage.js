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
          <img src="" alt="" />
        </div>
        <div>
          <h2>Enjoyable place for all the family</h2>
          <p>Our relaxed surroundings make fining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
      </section>

      <section>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>The most locally sourced food</h2>
          <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.</p>
        </div>
      </section>

      <section>
       <HighlightSection />
      </section>

      <section>
       <Event />
      </section>

      <Banner />
    </div>
  );
}

export default HomePage;