import React from "react";
import styled from "styled-components";
import mom3 from "../images/pic8.jpeg";
import mom7 from "../images/mom7.jpeg";

//Animation
import { motion } from "framer-motion";
import { section2Anime } from "../Animate";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const HomeSection2 = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return (
    <Section2>
      <Rule
        ref={element}
        transition={{ duration: 1.5 }}
        initial={{ width: "0%" }}
        animate={{ controls, width: "100%" }}
      />
      <h1>Explore Our Services</h1>

      <Images>
        <ImageA variants={section2Anime} initial="hidden2" animate={controls}>
          <img src={mom3} alt="" />
          <p>
            We are elegant and efficient enough to accommodate you. Feel free to
            take a tour on our facility and get familiar with the services we
            offer. click on bookings above.
          </p>
        </ImageA>
        <ImageB variants={section2Anime} initial="hidden1" animate={controls}>
          <img src={mom7} alt="" />
          <p>
            We offer event services, long and short term lodging, Rooms and
            suites, Kitchen services amongst a list of others.
          </p>
        </ImageB>
      </Images>
    </Section2>
  );
};
const Section2 = styled.div`
  min-height: 90vh;
  width: 80%;
  margin: 1.5rem auto;
  h1 {
    padding: 3rem 0;
  }

  @media (max-width: 1300px) {
    margin: 1rem;
    h1 {
      padding: 1rem 0 0.5rem;
    }
  }
`;
const Rule = styled(motion.div)`
  width: 100%;
  height: 0.2rem;
  background: #6e445d;
`;
const Images = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;

  @media (max-width: 1300px) {
    padding: 0.5rem 0;
    text-align: left;
    margin: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
const ImageA = styled(motion.div)`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  width: 550px;

  img {
    width: 100%;
    border: 3px solid #fff;
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: 1300px) {
    width: 100vw;

    img {
      width: 100vw;
      overflow: hidden;
    }
  }
`;
const ImageB = styled(motion.div)`
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
  width: 500px;
  margin-left: 8rem;

  img {
    width: 100%;
    border: 3px solid #fff;
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: 1300px) {
    margin: 0;
    width: 100vw;
    img {
      width: 100vw;
      overflow: hidden;
    }
  }
`;

export default HomeSection2;
