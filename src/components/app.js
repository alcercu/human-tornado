import React, { useState } from "react";
import styled from "styled-components";
import ActionSelection from "../components/action-selection";
import Account from "../components/account";
import DepositMenu from "../components/deposit-menu";
import WithdrawMenu from "../components/withdraw-menu";


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const StyledAccount = styled.div`
  align-self: flex-start;
  margin: 12px;
  width: 100%;
`

const App = () => {
  const [userAction, setUserAction] = useState("deposit");

  return (
    <AppContainer>
      <StyledAccount>
        <Account />
      </StyledAccount>
      <ActionSelection userAction={userAction} setUserAction={setUserAction} />
        {
          userAction === "deposit"
            ? <DepositMenu />
            : <WithdrawMenu />
        }
    </AppContainer>
  )
}

export default App;
