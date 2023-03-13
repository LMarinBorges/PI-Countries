import { useMemo } from "react";
import debounce from "../utils/debounce";
import Input from "./Input";
import InputContainer from "./InputContainer";
import Label from "./Label";

export default function SearchBar(props) {
  const onSearch = useMemo(
    () => (props.onSearch ? debounce(props.onSearch, 400) : undefined),
    [props.onSearch]
  );
  return (
    <InputContainer>
      <Label htmlFor="searchInput">Búsqueda</Label>
      <Input
        id="searchInput"
        placeholder="Busque un país..."
        onChange={onSearch}
      />
    </InputContainer>
  );
}
