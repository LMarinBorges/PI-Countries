import styled from "styled-components";
import Card from "./Card";
import Navbar from "./Navbar";

const Container = styled(Card).attrs({ as: "header" })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`;

const Title = styled.div`
  font-size: 1.45em;
  margin: 0;
`;

export default function Header() {
  return (
    <Container>
      <Title>Henry Countries</Title>
      <Navbar />
    </Container>
  );
}
