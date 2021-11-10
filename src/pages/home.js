import React from "react";
import styled from "styled-components";
import { useEthers } from "@usedapp/core";
import MetamaskLogin from "../components/metamask-login";
import App from "../components/app";


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 32px;
  width: 640px;
  height: 500px;
  overflow: hidden;
  min-width: 640px;
  min-height: 500px;
  border-radius: 50px;
  box-shadow: 8px 8px 16px #1a1f35, -8px -8px 16px #2c3358;
`

const Home = () => {
  const { account, chainId } = useEthers();

  return (
    <StyledDiv>
      {
        account &&
          (
            chainId === 42 &&
              <App />
            || <h1> Wrong chain </h1>
          )
        || <MetamaskLogin />
      }
    </StyledDiv>
  )
}

export default Home;
