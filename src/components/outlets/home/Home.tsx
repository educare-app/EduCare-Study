import Hero from "./hero/Hero"
import Clients from "./clients/Clients"
import Description from "./description/Description"

import './home.css'

function Home() {
  return (
    <main id="main-section">
      <section id="section-two">
        <div id="hero-section">
          <Hero/>
        </div>
      </section>
      <section id="section-third">
        <div id="client-section">
          <Clients/>
        </div>
      </section>
      <section id="section-four">
          <Description 
            heading="Smart Dashboard for Smarter Management"
            subheading="Everything You Need, at a Glance"
            body="Monitor key metrics, track performance, and access insightful analysis effortlessly. Our dashboard gives you a clear overview of your school’s operations with charts, summaries, and actionable data - all in one place. Simplify decision-making and save time like never before."
          />
      </section>
    </main>
  )
}

export default Home