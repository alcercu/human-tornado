import React, { useState } from "react";
import styled from "styled-components";
import useDeposit from "../hooks/use-deposit";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  justify-content: space-between;
`

const NoteDisplay = styled.p`
  height: 50%;
  padding: 12px;
  border-radius: 25px;
  box-shadow: inset 4px 4px 8px #1a1f35, inset -4px -4px 8px #2c3358;
  width: calc(100% - 24px);
  margin: 12px 0;
  word-break: break-all;
`
const Label = styled.h2`
  align-self: flex-start;
  margin: 12px;
`

const LabelAndDisplay = styled.div`
  width: 100%;
  height: 50%;
`

const DepositButton = styled.button`
  height: 45px;
  margin-top: 24px;
`

const DepositMenu = () => {
  const [depositState, setDepositState] = useState();
  const [note, setNote] = useState();
  const doDeposit = useDeposit(setNote, setDepositState);

  return (
    <Wrapper>
      <LabelAndDisplay>
        <Label> Note: </Label>
        <NoteDisplay>
          {note}
        </NoteDisplay>
      </LabelAndDisplay>
      <DepositButton onClick={doDeposit}>
        Deposit
      </DepositButton>
    </Wrapper>
  )
}

export default DepositMenu;
