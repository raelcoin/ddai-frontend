import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const RowContainer = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2% 0;
`;

const ButtonSpacer = styled.span`
  width: 4%;
`;

const CardTwoButtons = props => {
  return (
    <RowContainer>
      <PrimaryButton onPress={props.onFirstPress}>{props.firstButtonText}</PrimaryButton>
      <ButtonSpacer />
      <PrimaryButton onPress={props.onSecondPress}>{props.secondButtonText}</PrimaryButton>
    </RowContainer>
  );
};

export default CardTwoButtons;
