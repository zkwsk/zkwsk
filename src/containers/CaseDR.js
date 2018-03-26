import React, { Component } from 'react';
import './case.css';
import './case-dr.css';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/ContactPage/ContactPage'
import NavigationComponent from '../components/NavigationComponent/NavigationComponent'
import data from '../data';

class CaseDR extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main role="main">
        <header className="case-header header-dr">
          <h1>Danmarks Radio</h1>
        </header>
        <div className="showroom">
          <h2>Showroom</h2>
          <p>A collection of products I have worked on at Danmarks Radio. Scroll to the bottom for more details.</p>
          <ul>
            <Gallery gallery={data.cv.positions[0].case.gallery}/>
          </ul>
        </div>
        <div className="case-content">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>2018 DR.DK redesign</h3>
              <p>During 2017 I have been working on a major redesign of DR.DK.</p>
              <p>The new design is based on the principles of Atomic Design. The purpose is to ensure consistency across
                the wide range of products DR offers and to aid in consolidating products that do not have a clear design
                intent.</p>
              <p>I took part in the shaping process of the new design, together with DR employed designers, as well as
                designers from an external agency, who aided in setting up a workshops in Atomic Design and Design thinking.</p>
              <p>My main task was to support the process by prototyping and I built an initial prototype for the current
                design system in <a href="http://patternlab.io/">Pattern Lab</a>, which was later replaced by a more
                specialized prototype build in <a href="">React Storybook</a>.</p>
            </li>
            <li>
              <h3>Mad</h3>
              <p>The site <a href="https://dr.dk/mad">Mad</a> is a recipe site designed to be a single outlet for food
              recipes for all of DRs different offerings.</p>
              <p>There was already a site that attempted to do that, but it did not perform well in terms of usability or
              SEO and there were no ways of coupling recipes and Drupal content.</p>
              <p>The site was build as an experiment that would later provide the foundation for future developement at DR.
              The architecture was based on a "headless CMS" model, meaning that rather than rendering pages in Drupal,
              an application was build to consume an API that would fetch data from Drupal.</p>
              <p>As user research suggested that users rarely would browse recipes from DR.DK, but would rather enter directly
                through google-search, SEO was emphasized.</p>
              <p>We managed to achieve very good results and now the most popular recipes are consistently on the first
              page on Google, which was a rare sight before the rebuild and redesign og the site.</p>
              <p>We did have UX design for the user-facing pages, but as no UX-resources were assigned for the administrative
              interface, another front-end developer and I set out to design the interface.</p>
              <p>The result turned out quite succesful and some concepts are currently being carried over into other
              administrative interfaces at DR.</p>
            </li>
            <li>
              <h3>DR.DK på Drupal</h3>
              <p>My career in Danmarks Radio startet as an external consultant on behalf of <a href="www.it-minds.dk">IT Minds</a>. My first project was
                to work on migrating DR.DK from an old proprietary CMS to Drupal.</p>
              <p>At that moment there was about 30 people working on the projects. Most of whom where external consultants
                from specialized Drupal agencies. That gave me the opportunity to work alongside and learn from some of
                the best Drupal developers in the area.</p>
              <p>My tasks where predominantly to adapt CSS and javascript to every time a new site was being released,
                but I did also learn to build sites and modules in Drupal.</p>
              <p>I have worked on almost all sub-sites on DR.DK with the exception of <a href="https://dr.dk/tv">DR TV</a>
                , which is not based on Drupal.</p>
            </li>
          </ul>
        </div>
        <NavigationComponent/>
        <Contact/>
      </main>
    );
  }
}

export default CaseDR;
