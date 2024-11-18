import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tobbar } from "../components/Tobbar";
import passport from "../assets/image/passport.svg";
import Progress from "../components/Progress";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 82%;
    height: 86vh;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 92vh;
    padding: 0 30%;
  }
`;

const QuetionLBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const QuetionImageBox = styled.div`
  width: 120px;
  height: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto 10%;
`;

const QuetionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const QuetionContent = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  font-family: Pretendard;
  font-weight: 900;
  font-size: 1.1rem;
  color: #5c5b5b;
  margin: 0 auto 40px;
`;

const ButtonContent = styled.button`
  width: 90%;
  height: 72px;
  margin: 0 auto 20px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 0.75rem;
  font-family: Pretendard;
  font-weight: 500;
  background-color: #fff;
  color: #5c5b5b;
  cursor: pointer;

  &:focus,
  &:hover,
  &:active {
    background-color: rgba(0, 91, 172, 0.3);
    color: #005bac;
    border: 1px solid rgba(0, 91, 172, 1);
  }
`;

const GoTextLinkBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 50px auto 0;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    margin: 50px auto 0;
  }
`;

const GoTextButton = styled.button`
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor === 1 ? "#005bac" : "#E2E2E2"};
  font-family: Pretendard;
  font-weight: 700;
  color: ${(props) => (props.backgroundColor === 1 ? "#F1F1F1" : "#5C5B5B")};
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    padding: 13px 0;
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    padding: 13px 0;
    font-size: 1rem;
  }
`;

const Visa = () => {
  const [statusChange, setStatusChange] = useState("");
  const [colorChange, setColorChange] = useState(0);

  useEffect(() => {
    if (
      statusChange === "grand-attendance1" ||
      statusChange === "cannot-job" ||
      statusChange === "grand-attendance2"
    ) {
      setColorChange(1);
    } else {
      setColorChange(0);
    }
  }, [statusChange]);

  const handleContainerClick = () => {
    setStatusChange("");
  };

  const d_2_HandleButtonClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지 (부모요소로 이벤트 전파 방지)
    setStatusChange("grand-attendance1");
  };

  const d_2_5_HandleButtonClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    setStatusChange("cannot-job");
  };

  const d_4_HandleButtonClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    setStatusChange("grand-attendance2");
  };

  return (
    <>
      <Tobbar content='VISA' />
      <Progress progressNumber={33} />
      <Container
        onClick={() => {
          handleContainerClick();
        }}
      >
        <QuetionLBox>
          <QuetionImageBox>
            <QuetionImage src={passport} alt='passport' />
          </QuetionImageBox>
          <QuetionContent>What kind of VISA you have right now?</QuetionContent>
        </QuetionLBox>
        <ButtonContent
          onClick={(event) => {
            d_2_HandleButtonClick(event);
          }}
        >
          D-2 (Excluding D-2-5)
        </ButtonContent>
        <ButtonContent
          onClick={(event) => {
            d_2_5_HandleButtonClick(event);
          }}
        >
          D-2-5
        </ButtonContent>
        <ButtonContent
          onClick={(event) => {
            d_4_HandleButtonClick(event);
          }}
        >
          D-4
        </ButtonContent>
        <GoTextLinkBox to={`/${statusChange}`}>
          <GoTextButton
            backgroundColor={colorChange}
            disabled={statusChange === "" ? 1 : 0}
          >
            Go Next
          </GoTextButton>
        </GoTextLinkBox>
      </Container>
    </>
  );
};

export default Visa;