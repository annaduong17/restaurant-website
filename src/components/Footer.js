import DineLogo from "./DineLogo";

function Footer() {
  return (
    <div className="footer">
      <section>
        <DineLogo />
      </section>

      <address className="address-section">
        <p>MARTHWAITE, SEDBERGH</p>
        <p>CUMBRIA</p>
        <p>+00 44 123 4567</p>
      </address>

      <section className="hours-section">
        <p>OPEN TIMES</p>
        <p>MON - FRI: 09:00 AM - 10:00 PM</p>
        <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
      </section>
    </div>
  );
}

export default Footer;