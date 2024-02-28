import DineLogo from "./DineLogo";

function Footer() {
  return (
    <div>
      <section>
        <DineLogo />
      </section>

      <section>
        <address>MARTHWAITE, SEDBERGH</address>
        <address>CUMBRIA</address>
        <address>+00 44 123 4567</address>
      </section>

      <section>
        <p>Open Times</p>
        <p>MON - FRI: 09:00 AM - 10:00 PM</p>
        <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
      </section>
    </div>
  );
}

export default Footer;