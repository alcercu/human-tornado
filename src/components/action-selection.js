import React from "react";
import styled from "styled-components";


const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`

const StyledButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 25px;
  height: 45px;
  width: 100px;
  margin: 12px;
`

const ActionSelection = ({ userAction, setUserAction }) => {
  const depositDisabled = userAction === "deposit";
  const withdrawDisabled = userAction === "withdraw";

  return (
    <ButtonWrapper>
      <StyledButton
        onClick={() => setUserAction("deposit")}
        disabled={depositDisabled}
        className={depositDisabled ? "pressed" : ""}
      >
        Deposit
      </StyledButton>
      <StyledButton
        onClick={() => setUserAction("withdraw")}
        disabled={withdrawDisabled}
        className={withdrawDisabled ? "pressed" : ""}
      >
        Withdraw
      </StyledButton>
    </ButtonWrapper>
  );
}

export default ActionSelection;
