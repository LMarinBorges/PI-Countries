import styled from "styled-components";
import Card from "./Card";

const Button = styled(Card).attrs({ as: "button" })`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: #f6efe4;
  }
`;

export default Button;
