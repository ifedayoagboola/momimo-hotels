import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import letter from "../images/letter.svg";
import telephone from "../images/telephone.svg";
import location from "../images/location.svg";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animate";

const Forms = () => {
  function sendEmail(e) {
    e.preventDefault();
    //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_5s3y8qs",
        "template_moiktpf",
        e.target,
        "user_5SMN4ZHYasmTLuzDkBVy7"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Body exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Container>
        <Brand>
          <span>Book</span> a room
        </Brand>
        <Wrapper>
          <CompanyInfo>
            <h3>Quick reach</h3>
            <ul>
              <li>
                <img src={telephone} alt="" />
                +234 8147 747 673
              </li>
              <li>
                <img src={letter} alt="" /> bookings@momisolahotels.com
              </li>
              <li>
                <img src={location} alt="" /> 3, Laniyan Close, Opposite Honda
                Factory, KLM 6, Ota, Idiroko Expressway, Sango Ota, Ogun State,
                Nigeria. Factory,
              </li>
            </ul>
          </CompanyInfo>
          <Contact>
            <h3>Bookings form</h3>
            <form className="contact-form" onSubmit={sendEmail}>
              <p>
                <label>Name:</label>
                <input type="text" name="name" required />
              </p>
              <p>
                <label>Email:</label>
                <input type="email" name="email" required />
              </p>
              <p>
                <label>Phone:</label>
                <input type="text" name="phone" required />
              </p>
              <p>
                <label>Rooms:</label>

                <select>
                  <option disabed name="room" value="king">
                    Select Room
                  </option>
                  <option name="room" value="king">
                    Kings Room
                  </option>
                  <option name="room" value="queen">
                    Queens Room
                  </option>
                  <option name="room" value="royal">
                    Royal Suite
                  </option>
                </select>
              </p>
              <p>
                <label>Check-In:</label>
                <input type="date" name="check_in" />
              </p>
              <p>
                <label>Check-Out:</label>
                <input type="date" name="check_out" />
              </p>
              <p>
                <label>Message:</label>
                <textarea name="message" rows="5" />
              </p>
              <p>
                <input type="submit" value="Send" />
              </p>
            </form>
          </Contact>
        </Wrapper>
      </Container>
    </Body>
  );
};

const Body = styled(motion.div)`
  background: #000d1a;
  color: #485e74;
  line-height: 1.6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 1em;
`;
const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  /* padding: 1em; */
  margin-top: 5rem;
  span {
    color: #fff;
  }
`;
const Brand = styled.h1`
  text-align: center;
  @media (min-width: 700px) {
    text-align: left;
  }
`;
const Wrapper = styled.div`
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);

  > * {
    padding: 1em;
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    > * {
      padding: 2em;
    }
  }
`;
const CompanyInfo = styled.div`
  background: #c9e6ff;
  li,
  h3 {
    text-align: left;
    margin: 0 0 1rem 0;
  }
  li {
    list-style: none;
    padding: 0;
  }
  img {
    width: 25px;
  }
  @media (min-width: 700px) {
    h3,
    ul {
      text-align: left;
    }
  }
`;
const Contact = styled.div`
  background: #f9feff;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    overflow: hidden;

    label {
      display: block;
    }
    p {
      margin: 0;
    }
    p input,
    p textarea,
    p select {
      width: 100%;
      padding: 1em 0;
      border: 1px solid #c9e6ff;
      outline: none;
    }

    input[type="submit"] {
      background: #c9e6ff;
      border: 0;
      text-transform: uppercase;
      grid-template-columns: 1fr;

      &:hover,
      &:focus {
        background: #000d1a;
        color: #fff;
        transition: background-color 2s ease-out;
      }
    }
    p:last-of-type,
    p:nth-last-child(2) {
      grid-column: 1/3;
    }
  }
`;

export default Forms;
