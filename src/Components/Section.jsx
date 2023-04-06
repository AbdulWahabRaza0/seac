import React from "react";
import { Wrapper } from "../Common/Styled";
import { Container } from "react-bootstrap";
import { Spacer } from "../Common/Spacer";
import { H1, P } from "../Common/Typography";
import { Button } from "../Common/Buttons";
import Lottie from "react-lottie";
import animationData from "../assets/section1.json";
const Section = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Container>
        <Spacer height="80px" />
        <Wrapper
          id={props.id}
          className="d-flex flex-row align-items-center justify-content-around"
        >
          {/* {props.mode == "left" ? ( */}
          <>
            {props.mode === "right" ? (
              <img src={props.src} alt="Section1" width="30%" height="auto" />
            ) : null}
            <Wrapper
              className={`d-flex flex-column ${
                props.mode === "right" ? "align-items-end text-end" : ""
              }`}
              width="50%"
            >
              {props?.title ? (
                <Wrapper width="100%">
                  <H1 color="#301934" weight="600">
                    {props.title}
                  </H1>
                </Wrapper>
              ) : null}
              {props?.desc ? (
                <>
                  <Wrapper
                    width={props.section === "2" ? "90%" : "100%"}
                    className="mt-2"
                  >
                    <P color="black" weight="500">
                      {props.desc}
                    </P>
                  </Wrapper>
                </>
              ) : null}

              <Wrapper className="d-flex flex-row align-items-center mt-4 pt-2">
                {props.section !== "2" ? (
                  <>
                    <Button
                      width="150px"
                      className="d-flex flex-row align-items-center justify-content-center"
                      bg="#7A88FF"
                    >
                      Learn More
                    </Button>
                  </>
                ) : null}
                {props.section === "1" ? (
                  <Button
                    width="180px"
                    className="d-flex flex-row align-items-center justify-content-center ms-3"
                    bg="#433582"
                  >
                    Download App
                  </Button>
                ) : null}
              </Wrapper>
            </Wrapper>
            {props.mode === "left" ? (
              props.section === "1" ? (
                <>
                  <Lottie
                    options={defaultOptions}
                    height={"auto"}
                    width={"30%"}
                  />
                </>
              ) : (
                <>
                  <img
                    src={props.src}
                    alt="Section1"
                    width="30%"
                    height="auto"
                  />
                </>
              )
            ) : null}
          </>
        </Wrapper>
      </Container>
    </>
  );
};

export default Section;
