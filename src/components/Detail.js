import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://i.ytimg.com/vi/7rspQR7rhf0/maxresdefault.jpg"
          alt="Back Img"
        />
      </Background>
      <ImgTitle>
        <img
          src="https://1.bp.blogspot.com/-SFIcHjsKs6w/WsGKiBqr8sI/AAAAAAAAVx0/mrXzRPfHjOktGXKq9UIPF-ieUs3jiKejgCLcBGAs/s1600/Pixar-Bao-Logo.jpg"
          alt="Img Title"
        />
      </ImgTitle>
      <Controls>
        <Playbutton>
          <img src="assets/images/play-icon-black.png" alt="Play Icon" />
          <span>PLAY</span>
        </Playbutton>
        <Trailerbutton>
          <img src="assets/images/play-icon-white.png" alt="Play Icon" />
          <span>TRAILER</span>
        </Trailerbutton>
        <Addbutton>
          <span>+</span>
        </Addbutton>
        <GroupWathcbutton>
          <img src="assets/images/group-icon.png" alt="Group Icon" />
        </GroupWathcbutton>
      </Controls>
      <SubTitle>2018 | It is a subtitle</SubTitle>
      <Description>It is a description</Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin: 40px 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const Playbutton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const Trailerbutton = styled(Playbutton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  textransform
`;
const Addbutton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  margin-right: 16px;
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWathcbutton = styled(Addbutton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.p`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.p`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
