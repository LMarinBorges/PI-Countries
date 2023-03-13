import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSorting } from "../actions";
import Card from "./Card";
import InputContainer from "./InputContainer";
import Label from "./Label";
import Select from "./Select";

const Container = styled(Card)`
  padding: 8px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const HorizontalInputContainer = styled(InputContainer)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export default function SortingControls() {
  const sorting = useSelector((state) => state.sorting);
  const dispatch = useDispatch();
  const onChangeField = (name) => (e) =>
    dispatch(setSorting({ ...sorting, [name]: e.target.value }));
  return (
    <Container>
      <HorizontalInputContainer>
        <Label htmlFor="sortByInput">Ordenar por</Label>
        <Select id="sortByInput" onChange={onChangeField("field")}>
          <option value="name">Nombre</option>
          <option value="population">Población</option>
        </Select>
        <Label>en forma</Label>
        <Select id="sortOrderInput" onChange={onChangeField("order")}>
          <option value="asc">Ascendiente</option>
          <option value="desc">Descendiente</option>
        </Select>
      </HorizontalInputContainer>
    </Container>
  );
}
