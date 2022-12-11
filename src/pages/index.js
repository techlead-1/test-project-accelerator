import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/homepage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircleCheck,
  faHandshakeSimple,
  faChartLine,
  faCirclePlus,
  faRocket,
  faChartSimple
 } from "@fortawesome/free-solid-svg-icons"
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <Layout>
      <div className={ styles.home }>
      <Helmet>
         <title>Home page - Accelerator App</title>
      </Helmet>
        { /* Header */}
        <section className={ styles.header }>
        <img src="/header-looper.png" alt="header background" className={ styles.looper } />

          <div className={ styles.headerDiv }>
          <p className={ styles.headerP }>Join in and connect</p>
          <h1>To faster your innovation potential</h1>
          <p>AcceleratorApp Innovation Community — Tools and community to facilitate innovation between all members of our community</p>
          <button>Schedule a Demo</button>
          </div>

          <img src="/video.png" alt="video" />
        </section>

        { /* community section */}
        <section className={ styles.community }>
          <img src="/branch.png" alt="icon" />

          <h5>Community</h5>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          { /* cards */ }
          <div className={ styles.cardContainer }>
          <div className={ styles.card }>
            <h2><FontAwesomeIcon icon={ faChartSimple } className={ styles.firstIcons }/> Incubator/Accelerator</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>

          <div className={ styles.card }>
            <h2><FontAwesomeIcon icon={ faHandshakeSimple } className={ styles.firstIcons }/> Coporations</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>

          <div className={ styles.card }>
            <h2><FontAwesomeIcon icon={ faChartLine } className={ styles.firstIcons }/> Investor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>

          <div className={ styles.card }>
            <h2><FontAwesomeIcon icon={ faRocket } className={ styles.firstIcons }/> Startup</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>

          <div className={ styles.card }>
            <h2><FontAwesomeIcon icon={ faCirclePlus } className={ styles.firstIcons }/> Open Challenge</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <h5>Popular Features</h5>
            <ul>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
              <li><FontAwesomeIcon icon={ faCircleCheck } className={ styles.circleCheck }/> Lorem ipsum dolor sit </li>
            </ul>

            <button>Get Started</button>
          </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
