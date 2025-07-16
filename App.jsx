import Lightning from './components/Lightning';

function HeroSection() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Lightning hue={240} speed={1.2} intensity={1.5} size={1} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '20vh', color: 'white' }}>
        <h1>Tushar Gadakh</h1>
        <p>Crafting Code & Creativity</p>
      </div>
    </div>
  );
}

export default HeroSection;
