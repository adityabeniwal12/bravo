import React from "react";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Corporate Website",
      desc: "A fully responsive corporate site with futuristic animations.",
      img: "/website.webp"
    },
    {
      title: "Luxury Brand Logo",
      desc: "Minimalistic neon-inspired logo for a premium brand.",
      img: "/luxury.jpg"
    },
    {
      title: "Business Presentation",
      desc: "Professional PPT design for a tech startup pitch.",
      img: "/business.avif"
    },
    {
      title: "Event Flyers",
      desc: "Eye-catching flyers for a global tech conference.",
      img: "/flyer.jpg"
    },
    {
      title: "Digital Ad Banner",
      desc: "High-conversion banner for an online product launch.",
      img: "/bann.avif"
    },
    {
      title: "Instagram Reels",
      desc: "High-energy short videos for social media marketing.",
      img: "/reel.png"
    },
    {
      title: "Social Media Campaign",
      desc: "Complete content strategy for a tech brand’s launch.",
      img: "/campain.jpeg"
    },
    {
      title: "Photo Retouching",
      desc: "Professional editing for e-commerce and portfolio images.",
      img: "/photoretouch.webp"
    },
    {
      title: "Video Production",
      desc: "Cinematic product video with futuristic motion graphics.",
      img: "/videopro.jpeg"
    },
    {
      title: "SEO Dashboard",
      desc: "Custom analytics dashboard for tracking SEO performance.",
      img: "/seodash.png"
    }
  ];

  return (
    <section id="portfolio" className="section dark">
      <h2>Our Futuristic Work</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <div className="image-container">
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}