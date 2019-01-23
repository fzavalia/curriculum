import React from "react";
import Layout from "../components/Layout";
import * as constants from "../utils/constants";
import Separator from "../components/Separator";

const Element = ({ image, name, dates, description }) => (
  <div style={{ display: "flex", width: "100%" }}>
    <img src={image} />
    <style jsx>{`
      img {
        margin: auto 0;
        max-height: 100px;
        max-width: 100px;
        object-fit: cover;
        border-radius: 50%;
      }
    `}</style>
    <div style={{ marginLeft: 20, width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <span style={{ color: constants.colors.text.default }}>{name}</span>
        <span style={{ color: constants.colors.text.default }}>
          <i>{dates}</i>
        </span>
      </div>
      <Separator.Space amount={10} />
      <div
        style={{
          color: constants.colors.text.default,
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
          dates="20/10/93 - Today"
          description={
            <div>
              <span>Lead Front Developer | FullStack</span>
              <p>
                Decided to test myself with a leadership role of a small team.
                With all decitions, conserning the frontend of owr applications
                going through my person, I can finally transmit what I learned
                this past years to people who where at my same rookie position
                on days past.
              </p>
              <p>
                Conserning the status of Startup the company handles and the
                increased amount of responsabilities the decreases quantity of
                personel has to handle, I could prove myself successfully in the
                backend and infrastructure.
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
                was relocated to the Platform Team, dedicated to develop
                services and tools for the rest of the company games.
              </p>
              <p>
                My two biggest projects consisted of; a dependency manager for
                Unity in which code and libraries could be distributed and
                versioned for everyone; and a AD service which eased the
                implementation of various AD networks, increasing revenue
                through ads.
              </p>
              <p>
                I'm thankfull to this firm for the exponential growth I showed
                through my time there. Things like Clean Code, TDD, DDD,
                fullstacking, functional programming and much more which is all
                I preach nowadays.
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
