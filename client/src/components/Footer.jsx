import styled from "styled-components";
import Card from "./Card";

const Container = styled(Card)`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
`;

const FooterMonster = styled(Text)`
  display: flex;
  gap: 8px;
`;

export default function Footer() {
  return (
    <Container as="footer">
      <FooterMonster>
        <span>🦶🤠🦶</span>
        <span>Soy un footer.</span>
      </FooterMonster>
      <Text>
        Sitio creado por{" "}
        <a href="https://github.com/LMarinBorges">Liam Marin</a>.
      </Text>
    </Container>
  );
}
