export default function Hero() {
  return (
    <section className="bg-stone-one w-screen h-screen">
      <div>
        <h1>Hello There, my name is</h1>
        <h2>&lt; VITOR SCHELB /&gt;</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt
          sint ratione asperiores, modi, nihil fuga et suscipit similique, nam
          dolorem. Saepe assumenda fugit, molestiae iure eius reprehenderit
          perspiciatis voluptatibus!
        </p>
        
        <div>
          <button>
            <span>Download CV</span>
          </button>
          <button>CONTACT</button>
        </div>
      </div>
      <div>
        <img src="/images/hero.svg" alt="hero" />
      </div>
    </section>
  );
}
