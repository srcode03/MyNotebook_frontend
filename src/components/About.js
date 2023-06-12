import React from 'react'
import './About.css';
export default function About() {
  return (
    <>
    <body>
    <header className="mt-3">
      <h1>Created by:Shaunak Raiker</h1>
    </header>
    <nav>
      <ul>
        <li>COLLEGE:VJTI,MUMBAI</li>
        <br></br>
        <li>LINKED IN:<a href="https://www.linkedin.com/in/shaunak-raiker-407120228/">Click here</a></li>
      </ul>
    </nav>
    <main>
      <section id="overview">
        <h2>Overview</h2>
        <p><b>This notebook helps u make notes on the cloud</b></p>
      </section>
      <section id="features">
        <h2><b>Features</b></h2>
        <ul>
          <li><b>100% SECURE:ONLY U CAN ACCESS YOUR NOTES</b></li>
          <li><b>CREATE,UPDATE,DELETE,EDIT NOTES AS PER YOUR CHOICE</b></li>
          <li><b>PLACE A TAG ON THE NOTES AS PER YOUR CHOICE </b></li>
        </ul>
      </section>
      <section id="pricing">
        <h2><b>Pricing</b></h2>
        <ul>
          <li><b>YES U HEARD IT RIGHT THIS APP IS COMPLETELY FREE OF COST</b></li>
        </ul>
      </section>
    </main>
    <footer>
      <p>Copyright ©2023 INotebook</p>
    </footer>
    </body>
    </>
  )
}
