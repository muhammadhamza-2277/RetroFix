import React from "react";
import outsideImg from "../../assets/outside.jpg";

const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${outsideImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    position: "relative",
    padding: "100px 20px",
    textAlign: "center",
    color: "#f1f1f1",
  };

  const overlayStyle = {
    background: "rgba(0, 50, 30, 0.6)", // soft greenish overlay
    padding: "60px 60px",
  };

  const contentStyle = {
    maxWidth: "980px",  // limit text width
    margin: "0 auto",   // center horizontally
  };

  const headingStyle = {
    fontSize: "1.8rem",
    marginBottom: "25px",
    fontWeight: 700,
    letterSpacing: "1px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    marginBottom: "20px",
    lineHeight: 1.6,
    color: "#f1f1f1",
    fontWeight: 390,
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}>
        <div style={contentStyle} className="content">
          <h1 style={headingStyle}>
            Powered by Retrofix Solutions. Certified. Reliable.
          </h1>
          <p style={paragraphStyle}>
            At Retrofix, we specialise in delivering high-quality external wall
            insulation tailored to modern homes. With years of industry
            experience, certified installers, and a strong reputation across
            the UK, we offer more than just insulation — we deliver peace of
            mind. Our expert team ensures every detail is handled with
            precision, keeping your home warmer, more energy-efficient, and
            visually refreshed.
          </p>
          <p style={paragraphStyle}>
            We believe in solutions that last. That’s why our materials are
            carefully selected for performance and durability. Whether you're
            upgrading for comfort, cutting energy bills, or boosting curb
            appeal, Retrofix is your trusted partner. With a streamlined process and
            dedicated support from start to finish, we make it easy to
            transform your home with confidence.
          </p>
          {/* <a href="#services" className="btn">EXPLORE OUR SERVICES</a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
