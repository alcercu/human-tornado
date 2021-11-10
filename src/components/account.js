import React from "react";
import styled from "styled-components";
import { useEthers, shortenAddress, getChainName } from "@usedapp/core";


const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 12px;
  border-radius: 25px;
  box-shadow: inset 4px 4px 8px #1a1f35, inset -4px -4px 8px #2c3358;
`

const DisconnectButton = styled.button`
  width: 100px;
  margin-right: 24px;
`

const Account = () => {
  const { account, deactivate, chainId } = useEthers();

  return (
    <StyledDiv>
      <AccountWrapper>
        <h2>
          <pre>
            {getChainName(chainId) + " | " + shortenAddress(account)}
          </pre>
        </h2>
      </AccountWrapper>
      <DisconnectButton onClick={deactivate}> Disconect </DisconnectButton>
    </StyledDiv>
  );
}


export default Account;
