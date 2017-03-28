import React, {Component} from "react";
import {TopicTitle} from "datawheel-canon";
import Nav from "components/Nav";
import "./About.css";

import {GLOSSARY} from "helpers/glossary";
import {titleCase} from "d3plus-text";

const topics = [
  {
    slug: "background",
    title: "Background"
  },
  {
    slug: "data",
    title: "Data Sources"
  },
  {
    slug: "glossary",
    title: "Glossary"
  },
  {
    slug: "terms",
    title: "Terms of Use"
  }
];

class About extends Component {

  constructor() {
    super();
    this.state = {
      activeSub: false,
      subnav: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    const {activeSub, subnav} = this.state;
    const newSub = this.refs.sublinks.getBoundingClientRect().top <= 0;
    let newActive = false;
    for (let i = 0; i < topics.length; i++) {
      const top = document.getElementById(topics[i].slug).getBoundingClientRect().top;
      if (top <= 0) newActive = topics[i].slug;
    }
    if (subnav !== newSub || newActive !== activeSub) {
      this.setState({activeSub: newActive, subnav: newSub});
    }
  }

  render() {
    const {activeSub, subnav} = this.state;
    return (
      <div className="about">
        <div className="intro">
          <div className="splash">
            <div className="image"></div>
            <div className="gradient"></div>
          </div>
          <div className="header">
            <div className="meta">
                <div className="title">About</div>
            </div>
          </div>
          <div ref="sublinks" className="sublinks">
            {
              topics.map(topic =>
                <a key={ topic.slug } className="sublink" href={ `#${topic.slug}` }>
                  { topic.title }
                </a>
              )
            }
          </div>
        </div>
        <Nav visible={ subnav }>
          {
            topics.map(topic =>
              <a key={ topic.slug } className={activeSub === topic.slug ? "subnav-link active" : "subnav-link"} href={ `#${topic.slug}` }>
                { topic.title }
              </a>
            )
          }
        </Nav>

        <TopicTitle slug="background">Background</TopicTitle>
        <section className="section">
          <p className="paragraph">
            Data Africa is an open-source platform designed to provide information
            on key themes such as: health, agriculture, climate, and poverty across Africa. The goal of the site
            is to present to wide audience easy to understand visual narratives related to the key themes.
          </p>
          <p className="paragraph">
            The platform is initially focused around state and province level data for 13 countries, including:
          </p>
          <ol className="paragraph">
            <li>Burkina Faso</li>
            <li>Ethiopia</li>
            <li>Ghana</li>
            <li>Kenya</li>
            <li>Malawi</li>
            <li>Mali</li>
            <li>Mozambique</li>
            <li>Nigeria</li>
            <li>Rwanda</li>
            <li>Senegal</li>
            <li>Tanzania</li>
            <li>Uganda</li>
            <li>Zambia</li>
          </ol>
          <p className="paragraph">
          Over time, we anticipate expanding the coverage of the platform in terms of the number of countries covered as well as increasing the amount of data available through the platform. For any questions, comments, or more information on the site please contact <a href="mailto:hello@dataafrica.io" className="email">hello@dataafrica.io</a>.
          </p>
        </section>

        <TopicTitle slug="data">Data Sources</TopicTitle>
        <section className="section">
          <p className="paragraph">
            The data contained in this site draws from a variety of sources,
            including:
          </p>
          <ul className="paragraph">
            <li>Poverty data from the <a href="http://iresearch.worldbank.org/PovcalNet/povOnDemand.aspx" target="_blank">World Bank's PovcalNet</a></li>
            <li>Health data from the <a href="http://dhsprogram.com/" target="_blank">DHS Program</a></li>
            <li>Agricultural data from <a href="http://www.ifpri.org/publication/cell5m-geospatial-data-and-analytics-platform-harmonized-multi-disciplinary-data-layers" target="_blank">IFPRI's Cell5M repository</a></li>
            <li>Climate data from <a href="http://www.cru.uea.ac.uk/data/" target="_blank">University of East Anglia's Climatic Research Unit</a></li>
          </ul>
        </section>

        <TopicTitle slug="glossary">Glossary</TopicTitle>
        <section className="section glossary">
          {GLOSSARY.map(entry =>
            <div className="paragraph" key={entry.term} id={entry.term}>
              <p className="term">{entry.term === entry.term.toUpperCase() ? entry.term : titleCase(entry.term)}</p>
              <p className="definition">
              {entry.definition}
              </p>
            </div>
          )}
        </section>

        <TopicTitle slug="terms">Terms of Use</TopicTitle>
        <section className="section">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit, lorem id mollis congue, nisl neque sollicitudin orci, at condimentum diam sem vitae purus. Curabitur ipsum urna, volutpat vitae lorem et, sagittis posuere tortor. Nulla semper tempor tellus, in convallis tellus euismod vitae. Integer molestie ultricies massa vitae facilisis. Praesent vitae sem vitae massa luctus iaculis. Nulla aliquet, urna sed condimentum ornare, lectus lacus rhoncus massa, eu scelerisque augue velit eu purus. Nam eget imperdiet mi. Praesent varius sapien purus, eu tempus nulla tincidunt ac. Nulla urna nisl, dapibus vel tincidunt non, ullamcorper eu diam.
          </p>
        </section>

      </div>
    );
  }
}

export default About;
