import Highlight from "./Highlight";

function HighlightSection() {
  return (
    <div>
      <div>
        <h2>A few highlights from our menu</h2>
        <p>We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.</p>
      </div>

      <div>
        <Highlight /> 
        <Highlight />
        <Highlight />
      </div>
    </div>
  );
}

export default HighlightSection;