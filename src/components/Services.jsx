import React from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Professional and modern websites for your brand.",
      img: "/web.jpg"
    },
    {
      title: "Logo Design",
      desc: "Unique and creative logos to define your brand identity.",
      img: "/logo.png"
    },
    {
      title: "PPT Design",
      desc: "Eye-catching and professional presentation designs.",
      img: "/ppt.png"
    },
    {
      title: "Flyers",
      desc: "Attractive flyer designs for marketing and events.",
      img: "/flyer.webp"
    },
    {
      title: "Banners",
      desc: "High-quality banners for online and offline promotion.",
      img: "/banner.jpg"
    },
    {
      title: "Reel Making",
      desc: "Engaging and trendy short-form videos for social media.",
      img: "/reels.webp"
    },
    {
      title: "Social Media Management",
      desc: "Complete handling of your brand’s online presence.",
      img: "/social.png"
    },
    {
      title: "Photo Editing",
      desc: "Professional retouching and enhancements for images.",
      img: "/photo.png"
    },
    {
      title: "Video Editing",
      desc: "High-quality video production and post-processing.",
      img: "/video.jpg"
    },
    {
      title: "SEO Optimization",
      desc: "Boost your online visibility with proven SEO strategies.",
      img: "/seo.jpeg"
    }
  ];

  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}