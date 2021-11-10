import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  justify-content: space-between;
`

const StyledInput = styled.input`
`

const Label = styled.h2`
  align-self: flex-start;
  margin: 12px;
`

const LabelAndInput = styled.div`
  width: 100%;
`

const WithdrawButton = styled.button`
  height: 45px;
  margin-top: 24px;
`

const WithdrawMenu = () => {
  return (
    <Wrapper>
      <LabelAndInput>
        <Label>Note:</Label>
        <StyledInput />
      </LabelAndInput>
      <LabelAndInput>
        <Label>Recipient:</Label>
        <StyledInput />
      </LabelAndInput>
      <WithdrawButton>
        Withdraw
      </WithdrawButton>
    </Wrapper>
  )
}

export default WithdrawMenu;
