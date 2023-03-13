import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import Text from "./Text";

const Container = styled(Card).attrs({ as: Link })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  text-decoration: none;
  color: inherit;
  padding: 18px;
  cursor: pointer;
  &:hover {
    background-color: #f6efe4;
  }
`;

const CardImage = styled(Card).attrs({ as: "img" })`
  padding: 0;
  height: 64px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const CardText = styled(Text)`
  font-size: 1.5em;
  ${Container}:hover & {
    text-decoration: underline;
  }
`;

const CardSubtitle = styled(Text)`
  color: rgba(0, 0, 0, 0.6);
`;

export default function CountryCard(props) {
  return (
    <Container to={props.to}>
      <CardImage src={props.image} />
      <TextContainer>
        <CardText>{props.title}</CardText>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
      </TextContainer>
    </Container>
  );
}
