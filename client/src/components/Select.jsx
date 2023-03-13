import styled from "styled-components";
import Input from "./Input";

const Select = styled(Input).attrs({ as: "select" })`
  cursor: pointer;
  &:hover {
    background-color: #f6efe4;
  }
`;

export default Select;
