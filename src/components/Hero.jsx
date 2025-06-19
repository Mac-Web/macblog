function Hero({ title, description = null }) {
  return (
    <div className="hero">
      <h1 className="hero-title">{title}</h1>
      {description && <p className="hero-description">{description}</p>}
    </div>
  );
}

export default Hero;
