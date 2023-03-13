import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSearch } from "../actions";
import Card from "./Card";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

const Container = styled(Card)`
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function FilterControls() {
  const dispatch = useDispatch();
  const onSearch = useCallback(
    (e) => dispatch(setSearch(e.target.value)),
    [dispatch]
  );

  return (
    <Container>
      <Filters />
      <SearchBar onSearch={onSearch} />
    </Container>
  );
}
