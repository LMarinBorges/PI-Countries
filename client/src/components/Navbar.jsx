import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkItem = (props) => (
  <li>
    <Link {...props} />
  </li>
);

export default function Navbar() {
  return (
    <nav>
      <LinkList>
        <LinkItem to="/home">Home</LinkItem>
        <LinkItem to="/home/activities/new">Actividades</LinkItem>
      </LinkList>
    </nav>
  );
}
