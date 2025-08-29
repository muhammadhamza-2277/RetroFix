import React from "react";
import outsideImg from "../../assets/outside.jpg"; // adjust path to where your image actually is

const features = [
  {
    title: "⚡ Quick & Hassle-Free Installation",
    text: "Insulate your home externally with minimal disruption — fast, clean, and effective insulation that keeps your interior untouched."
  },
  {
    title: "🧱 Stronger, Smarter Home",
    text: "Extend the life of your walls and boost your home's look with a sleek, modern finish that adds value."
  },
  {
    title: "🛠️ Licensed Professionals",
    text: "Work with certified experts using the latest insulation techniques and top-grade materials."
  }
];

export default function EWISection() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${outsideImg})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        fontFamily: "'Poppins', sans-serif",
        color: "#2d2d2d",
        lineHeight: 1.7,
        padding: "40px 60px"
      }}
    >
      <h2
        style={{
          fontSize: "37px",
          color: "#fff",
          fontWeight: 600,
          marginBottom: "20px"
        }}
      >
        External Wall Insulation (EWI)
      </h2>

      <p
        style={{
          fontSize: "18px",
          color: "#f1f1f1",
          marginBottom: "40px",
          maxWidth: "700px",
          fontWeight: 400
        }}
      >
        Do you have solid walls and a cold, uncomfortable home?
        <br />
        <strong>Reimagine your living space</strong> with External Wall
        Insulation — a smart way to cut energy bills, boost warmth, and upgrade
        your home's appearance.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              borderLeft: "5px solid #3d5c3b",
              boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
              transition: "transform 0.3s ease",
              marginTop: "50px",
              marginBottom: "100px",
              minHeight: "260px",
              width: "100%",
              maxWidth: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                color: "#ff6600",
                marginBottom: "12px"
              }}
            >
              {feature.title}
            </h3>
            <div
              style={{
                fontSize: "16px",
                color: "#000",
                background:
                  "linear-gradient(to right, #f0f4f8, #b7eeb0)",
                padding: "20px",
                borderRadius: "5px",
                overflowY: "auto",
                flexGrow: 1
              }}
            >
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
