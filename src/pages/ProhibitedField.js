import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import Arrow from "../assets/image/arrow.svg";

const TotalContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 82%;
    height: 81%;
    margin-top: 5%;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 82%;
    margin-top: 4%;
    padding: 0 15%;
  }
`;

const MessageContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 767px) {
    margin: 0 0 6%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0 3%;
  }
`;

const WelcomeText = styled.h1`
  font-weight: 900;
  color: #5c5b5b;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin: 0 0 10px;
    padding-left: 6%;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 15px;
    padding-left: 8%;
  }
`;

const CardBox = styled.div`
  width: 80%;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    margin: 0 auto 5%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto 2%;
  }
  &.active {
    cursor: pointer;
    &:focus,
    &:active {
      border: 1px solid rgba(0, 91, 172, 1);
      background-color: rgba(0, 91, 172, 0.3);

      h2,
      p {
        color: "#005bac";
      }
      div > img {
        filter: invert(100);
      }
    }
  }
`;

const CardTitle = styled.h2`
  font-size: 0.8rem; // px :
  font-weight: 500;
  color: #5c5b5b;
  transition: color 0.3s ease;
`;

const ArrowIconTurnBox = styled.div`
  cursor: pointer;
  position: absolute;
  left: 90%;
  top: 35%;
  width: 13px;
  height: 22px;
  transform: translateY(50%);
`;

const ArrowIconTurn = styled.img`
  width: 70%;
  height: 80%;
  transform: rotate(180deg);
`;

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  color: #5c5b5b;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 767px) {
    height: 10%;
  }
  @media screen and (min-width: 768px) {
    height: 10%;
  }
`;

const GoTextLinkBox = styled.button`
  height: 10%;
  background-color: #005bac;
  font-weight: 700;
  color: #f1f1f1;
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 70%;
    margin: 5% auto;
    padding: 18px 0;
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 25px auto;
    padding: 20px 0;
    font-size: 1rem;
  }
`;

const ProhibitedField = () => {
  const navigate = useNavigate();
  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <MessageContainer>
          <WelcomeText>
            Prohibited fields <br></br> of work and cases
          </WelcomeText>
        </MessageContainer>
        <CardBox
          className='active'
          onClick={() => {
            navigate("/conductdistrubing");
          }}
        >
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='conduct disturbing' />
          </ArrowIconTurnBox>
          <CardTitle>
            Conduct disturbing good <br></br>morals or other social order
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            Activities in Companies or Employer Workplaces <br></br> Where Visa
            Issuance is Restricted<br></br> Due to Past Violations such as
            Illegal Employment
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            Construction or Manufacturing Industry <br></br>(as per their
            business licenses)
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            Occupations that fall under the E-1 to 7, E-9 <br></br>and E-10 visa
            categories
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            Language schools or institutes for minors <br></br>(ex. English kids
            cafe, Youth english camp, <br></br>Kids English academy, etc)
          </CardTitle>
        </CardBox>
        <CardBox
          className='active'
          onClick={() => {
            navigate("/indirect");
          }}
        >
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='Indirect Employment' />
          </ArrowIconTurnBox>
          <CardTitle>
            Indirect Employment <br></br> (ex. Delivery rider)
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            Dispatched, subcontracted, <br></br>or brokered employment
            arrangements
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            Distant Workplaces <br></br>(Over a 1.5 hour commute from the
            university or one’s residence)
          </CardTitle>
        </CardBox>
      </Container>
      <Footer>
        <GoTextLinkBox
          onClick={() => {
            navigate("/unpermittedmain");
          }}
        >
          I understand
        </GoTextLinkBox>
      </Footer>
    </TotalContainer>
  );
};

export default ProhibitedField;
