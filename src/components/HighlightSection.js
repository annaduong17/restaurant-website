import Highlight from "./Highlight";

const content = [
  {
    name: 'Seared Salmon Fillet',
    description: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
    imgDesktop: '/images/homepage/salmon-desktop-tablet.jpg',
    imgMobile: '/images/homepage/salmon-mobile.jpg'
  },
  {
    name: 'Rosemary Filet Mignon',
    description: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
    imgDesktop: '/images/homepage/beef-desktop-tablet.jpg',
    imgMobile: '/images/homepage/beef-mobile.jpg'
  },
  {
    name: 'Summer Fruit Chocolate Mousse',
    description: 'Creamy mousse combined with summer fruits and dark chocolate shavings.', 
    imgDesktop: '/images/homepage/chocolate-desktop-tablet.jpg',
    imgMobile: '/images/homepage/chocolate-mobile.jpg'
  }
];

const renderedItems = content.map((item, i) => {
  return (
    <Highlight key={i} imgDesktop={item.imgDesktop} imgMobile={item.imgMobile} name={item.name} description={item.description} />
  )
})

function HighlightSection() {
  return (
    <div>
      <div>
        <img src="/images/patterns/pattern-divide.svg" alt="divide pattern" />
        <h2>A few highlights from our menu</h2>
        <p>We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.</p>
      </div>

      <div>
        {renderedItems}
      </div>
    </div>
  );
}

export default HighlightSection;