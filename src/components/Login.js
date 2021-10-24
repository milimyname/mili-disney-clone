import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/assets/images/cta-logo-one.svg" />
        <Signup>Get all there</Signup>
        <Description>
          Host virtual movie nights with GroupWatch. Pause, rewind and react
          with up to six personal friends. To invite or be invited to join
          GroupWatch, subscription is required
        </Description>
        <CTALogoTwo src="/assets/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  position: relative;
  height: calc(100vh - 70px);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url("/assets/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const CTALogoOne = styled.img``;

const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size:18px;
  cursor:pointer;
  transition: all .25s
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover{
      background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
