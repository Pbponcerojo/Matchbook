import './index.css'

function App() {
  return (
    <div className="container">
      
      {/* HERO */}
      <section className="hero">
        <h1>Matchbook</h1>
        <h2>Una comunidad para leer, conversar y encontrarse.</h2>
        <p>
          Tres clubes de lectura al mes. Una fiesta de lectura al mes.
          Experiencias diseñadas para conectar ideas, personas y libros.
        </p>
        <div className="buttons">
          <button>Ver actividades</button>
          <button className="secondary">Contactar</button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h3>La lectura también puede ser una experiencia social.</h3>
        <p>
          Matchbook es una comunidad de lectura que reúne a personas curiosas en torno a libros, conversaciones y encuentros memorables.
        </p>
      </section>

      {/* FORMATOS */}
      <section className="section grid">
        <div className="card">
          <h4>Clubes de lectura</h4>
          <p>
            Tres encuentros al mes para leer, reflexionar y conversar en profundidad.
          </p>
        </div>

        <div className="card">
          <h4>Fiesta de lectura</h4>
          <p>
            Una experiencia mensual con lectura silenciosa, música en vivo y conversación.
          </p>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section testimonials">
        <h3>Lo que dicen quienes participan</h3>

        <div className="grid">
          <div className="card">
            “Volví a disfrutar la lectura gracias a Matchbook.”
          </div>

          <div className="card">
            “La fiesta de lectura es una experiencia única.”
          </div>

          <div className="card">
            “Conocí personas increíbles leyendo.”
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Súmate a la comunidad</h3>
        <p>Escríbenos para participar en nuestros próximos encuentros.</p>
        <button>Contactar</button>
      </section>

    </div>
  )
}

export default App
