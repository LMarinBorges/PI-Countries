import styled from "styled-components";
import Card from "./Card";
import Text from "./Text";

const Container = styled(Card).attrs({ as: "footer" })`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
`;

const FooterMonster = styled(Text)`
  display: flex;
  gap: 8px;
`;

export default function Footer() {
  return (
    <Container>
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
