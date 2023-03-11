import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../assets/landing.png";
import Card from "../components/Card";
import Button from "../components/Button";

const Container = styled.div`
  padding: 0px 48px;
  max-width: 1024px;
  margin: 0px auto;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const Banner = styled(Card)`
  padding: 24px;
`;

const BannerImage = styled.img`
  width: 100%;
`;

const TitleCard = styled(Card)`
  padding: 18px 36px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-family: "Forum", cursive;
  font-size: 2.75em;
`;

const HomeLink = styled(Button).attrs({ as: Link })`
  padding: 12px 24px;
  font-size: 1.25em;
  color: inherit;
  text-decoration: none;
`;

export default function LandingPage() {
  return (
    <Container>
      <TitleCard>
        <Title>Henry Countries</Title>
      </TitleCard>
      <Banner>
        <BannerImage src={banner} alt="Mapa del mundo." />
      </Banner>
      <HomeLink to="/home">Comenzar</HomeLink>
    </Container>
  );
}
