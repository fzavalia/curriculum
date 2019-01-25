import React from "react";
import Layout from "../components/Layout";
import Separator from "../components/Separator";
import { colors } from "../utils/constants";

const Element = ({ image, name, dates, description }) => (
  <div style={{ display: "flex", width: "100%" }}>
    <div style={{ margin: "auto 0", width: 100, height: 100 }}>
      <img
        style={{
          height: "inherit",
          width: "inherit",
          objectFit: "cover",
          borderRadius: "50%"
        }}
        src={image}
      />
    </div>
    <div style={{ marginLeft: 20, width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <span style={{ color: colors.text.default }}>{name}</span>
        <span style={{ color: colors.text.default }}>
          <i>{dates}</i>
        </span>
      </div>
      <Separator.Space amount={10} />
      <div
        style={{
          color: colors.text.default,
          textAlign: "justify",
          fontSize: 14
        }}
      >
        {description}
      </div>
    </div>
  </div>
);

const CareerPage = ({ pathname }) => {
  return (
    <Layout section="Experience" pathname={pathname}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Separator.Space amount={60} />
        <Element
          image="/static/img/career/flowlike.jpg"
          name="Flowlike"
          dates="01/02/18 - Present"
          description={
            <div>
              <span>Lead Front Developer | FullStack</span>
              <p>
                Decided to test myself with a leadership role of a small team.
                With all decisions, concerning the frontend of our applications
                going through my person, I can finally transmit what I learned
                this past years to people who were at my same rookie position on
                days past.
              </p>
              <p>
                Given the status of "Startup" the company has, and the increased
                amount of responsibilities the small team has to handle, I could
                prove myself successfully in the backend and infrastructure.
              </p>
            </div>
          }
        />
        <Separator.Line amount={40} />
        <Element
          image="/static/img/career/etermax.png"
          name="Etermax"
          dates="01/02/17 - 01/06/18"
          description={
            <div>
              <span>Software Engineer</span>
              <p>
                Started developing one of the company's games in Unity until I
                was relocated to the <b>Platform Team</b>, dedicated to develop
                services and tools for other teams in the company.
              </p>
              <p>
                My two biggest projects consisted of; a dependency manager for
                Unity in which code and libraries could be distributed and
                versioned for everyone; and an Ad service which eased the
                implementation of various Ad networks, increasing revenue
                through ads.
              </p>
              <p>
                I'm thankful to this firm for the exponential growth I could
                show through my time there. Learning and implementing TDD, DDD,
                microservices, functional programming, etc. As well as starting
                my career as a Clean Code enthusiast.
              </p>
            </div>
          }
        />
        <Separator.Line amount={40} />
        <Element
          image="/static/img/career/mpforce.jpg"
          name="MP Force"
          dates="01/08/15 - 01/02/2017"
          description={
            <div>
              <span>Game Designer | Game Developer</span>
              <p>
                Started as a Co-Game Designer and Level designer for the game
                Dragon Ninjas. It was here, in this company that my career as a
                developer flourished. One day I asked my boss if I could start
                taking some projects as a Programmer and ended up developing{" "}
                <a
                  style={{ color: "white" }}
                  href="https://play.google.com/store/apps/details?id=com.mpforce.once"
                >
                  Once
                </a>{" "}
                for Disney and{" "}
                <a
                  style={{ color: "white" }}
                  href="https://www.mangahigh.com/en-us/games/iceicemaybe"
                >
                  Ice Ice Maybe
                </a>{" "}
                for MangaHigh
              </p>
            </div>
          }
        />
        <Separator.Line amount={40} />
        <Element
          image="/static/img/career/vostu.png"
          name="Vostu"
          dates="01/02/15 - 01/08/15"
          description={
            <div>
              <span>Game Designer | Game Developer | QA</span>
              <p>
                Where my career in the industry started. Started as an intern,
                did some QA, fixed some bugs, brainstormed, helped with the
                design and configured the main games of the company at that
                moment: Dragon Ninjas and Top Farm.
              </p>
            </div>
          }
        />
        <Separator.Space amount={40} />
      </div>
    </Layout>
  );
};

CareerPage.getInitialProps = ({ pathname }) => ({ pathname });

export default CareerPage;
