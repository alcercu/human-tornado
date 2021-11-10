import React from "react";
import { useEthers } from "@usedapp/core";
import styled from "styled-components";


const StyledButton = styled.button`
  height: 100px;
  width: 100px;
  margin: 24px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MetamaskLogin = () => {
  const { activateBrowserWallet } = useEthers();

  return (
    <Container>
      <h1>
        Connect with MetaMask
      </h1>
      <StyledButton onClick={activateBrowserWallet}>
        Metamask logo :)
      </StyledButton>
    </Container>
  );
}

export default MetamaskLogin;
