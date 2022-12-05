import * as React from "react"
import Layout from "../components/Layout"
import * as style from '../styles/homepage.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={ style.home }>
        { /* Header */}
        <section className={ style.header }>
          <div>
          <h4>Join in and connect</h4>
          <h1>To faster your innovation potential</h1>
          <p>AcceleratorApp Innovation Community — Tools and community to facilitate innovation between all members of our community</p>
          <button>Schedule a Demo</button>

          <img src="/video.png" alt="video" className={ style.video } />
          </div>
        </section>

        {/* icons */}
        <div className={ style.offerings }>
          <img src="/branch.png" alt="Image" />
        </div>

        { /* community section */}
        <section className={ style.community }>
          <h5>Community</h5>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          {/* cards */}
          <div className={ style.card }>
            <h2>{/* add image here */}Incubator/Accelerator</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>

          <div className="card">
            <h2>{/* add image here */}Coporations</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>

          <div className="card">
            <h2>{/* add image here */}Investor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>

          <div className="card">
            <h2>{/* add image here */}Startup</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>

          <div className="card">
            <h2>{/* add image here */}Open Challenge</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
              <li>{/* add icon here */} Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>
        </section>


        { /* features section */ }
        <section className="features">
          <h2>Features integrated</h2>
          <p>Know all our features that we have for accelerate your business.</p>

          {/* cards */}
          <div className="cards">
            {/* add image here */}
            <h4>Multilingual</h4>
            <p>Be accessible. The application is supported in multiple languages. These includes English, French, Spanish, Deutsche, Portuguese, Arabic, Ukrainian, Bahasa, and Russian</p>
          </div>

          <div className="cards">
            {/* add image here */}
            <h4>Scheduling tools</h4>
            <p>Liberate your time by automating integrated scheduling for your team, mentors, and experts</p>
          </div>

          <div className="cards">
            {/* add image here */}
            <h4>Smart tasks</h4>
            <p>Drive action by assigning tasks with comprehensive segmentation capabilities</p>
          </div>

          <div className="cards">
            {/* add image here */}
            <h4>Track e-Mails</h4>
            <p>Gain clarity by sending tracked emails from within the platform to ensure receipt and interaction</p>
          </div>

          <div className="cards">
            {/* add image here */}
            <h4>Automate your e-Mails</h4>
            <p>Become superhuman by customizing your emails and automating communication with users throughout the platform</p>
          </div>

          <div className="cards">
            {/* add image here */}
            <h4>Calendar Integration</h4>
            <p>Stay on top of everything by syncing your Google or Microsoft calendar with your AcceleratorApp calendar for easy, automated scheduling</p>
          </div>

          <div className="cards">
            {/* add image here */}
            <h4>Zapier Integration</h4>
            <p>Collaborate with others by integrating your processes across departments using zapier as a bridge between AcceleratorApp and your favorite apps</p>
          </div>

          <div className="cards">
            {/* add image here */}
            <h4>And More...</h4>
            <p>And more features integrated within the software to make your incubator/accelerator run more smoothly</p>
          </div>

          <div className="discover">
            <button>Discover its functions {/* add image */}</button>
          </div>
        </section>


         {/* Testimonials */}
        <section className="testimonials">
          <div className="header">
            <h1>What our customers say</h1>
            <button>150 + incubators/accelerators using AcceleratorApp {/* add image */}</button>
          </div>

          <div className="testimonial">
            <p>"AcceleratorApp has helped us a lot to accelerate and optimize our application and selection process. We got very positive feedback from our team and applicants. It’s a great tool for every company reviewing and processing a large number of applications whilst minimizing manual work. The tool is customizable, user-friendly and the AcceleratorApp team is very responsive and supportive!"</p>
            <p className="author">François Jolly, Director of Programs • Startup lab</p>
            {/* add images here */}
            {/* add image two here */}
          </div>
        </section>

        {/* last setion */}
        <section className="last-section">
          <p>What are you waiting for?</p>
          <h1>Join +150 companies that already trust us for their growth</h1>
          <button>Request a Demo</button>
          <button>Contact Us</button>
        </section>
      </div>
    </Layout>
  )
}
