import styled from "styled-components";
import bigLogo from "../../assets/images/semfundo-preto 1.png";
import H1Title from "../../components/aux/h1";
import PWithNav from "../../components/aux/pWithNav";
import DefaultRouteButton from "../../components/Buttons/RouteButton";
import DefaultButton from "../../components/Buttons/RouteButton";

export default function WelcomePage() {
  return (
    <Wrapper>
      <div className="high">
        <img src={bigLogo} />
      </div>
      <div className="middle">
        <H1Title>Keep evolving your weights</H1Title>
        <p>
          We know weight progression is KEY for hipertrofy, so measure it so you
          never get stuck
        </p>{" "}
        <p></p>
      </div>
      <div className="low">
        <DefaultRouteButton route={"/auth/signup"} textColor="black">
          {" "}
          Start
        </DefaultRouteButton>
        <PWithNav label="Login" path={"/auth"}>
          already have an account?
        </PWithNav>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem 0.9rem 2rem 1.5rem;

  .high {
    transform: translateX(-2.5rem);
  }
  .middle {
    min-height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      color: rgba(0, 0, 0, 0.49);
      font-size: 0.9rem;
    }
  }
  .low {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: rgba(0, 0, 0, 0.49);
    height: 15vh;
    font-size: 0.8rem;

    :hover {
      cursor: pointer;
    }
  }
`;
