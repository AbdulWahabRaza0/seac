import React, { useState, useEffect } from "react";
import { Wrapper } from "../../Common/Styled";
import { Container } from "react-bootstrap";
import { Spacer } from "../../Common/Spacer";
import { P } from "../../Common/Typography";
import { calculateTimeLeft } from "../../utils/timeUtils";
import "./style.scss";
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);
  return (
    <>
      <Container>
        <Spacer height="70px" />
        <Wrapper className="d-flex flex-row align-items-center justify-content-center mt-5 mb-5">
          <Wrapper>
            <div className="counter">
              <Wrapper className="counter-item">
                <span className="value">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span
                  className="label"
                  style={{ borderTop: "2px solid white" }}
                >
                  Days
                </span>
              </Wrapper>

              <div className="counter-item">
                <span className="value">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span
                  className="label"
                  style={{ borderTop: "2px solid white" }}
                >
                  Hours
                </span>
              </div>

              <div className="counter-item">
                <span className="value">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span
                  className="label"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  Minutes
                </span>
              </div>

              <div className="counter-item">
                <span
                  className="value"
                  style={{
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span
                  className="label"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  Seconds
                </span>
              </div>
            </div>
          </Wrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Timer;
