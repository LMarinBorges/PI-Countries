import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFilters as setFiltersAction } from "../actions";
import InputContainer from "./InputContainer";
import Label from "./Label";
import Select from "./Select";

const continents = [
  "Asia",
  "South America",
  "North America",
  "Oceania",
  "Antarctica",
  "Africa",
  "Europe",
];

const FilterContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 24px;
`;

export default function Filters() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.data.activities);
  const [filters, setFilters] = useState({ continent: null, activity: null });
  const onChange = useCallback(
    (name) => (e) =>
      setFilters((prev) => ({
        ...prev,
        [name]: e.target.value === "" ? null : e.target.value,
      })),
    []
  );

  useEffect(() => {
    dispatch(setFiltersAction(filters));
  }, [filters, dispatch]);

  return (
    <FilterContainer>
      <InputContainer>
        <Label htmlFor="continentFilter">Continente</Label>
        <Select id="continentFilter" onChange={onChange("continent")}>
          <option value="">Todos</option>
          {continents.map((value, index) => (
            <option key={index}>{value}</option>
          ))}
        </Select>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="activityFilter">Actividad</Label>
        <Select id="activityFilter" onChange={onChange("activity")}>
          <option value="">Todas</option>
          {activities.map((value, index) => (
            <option key={index} value={value.id}>
              {value.name}
            </option>
          ))}
        </Select>
      </InputContainer>
    </FilterContainer>
  );
}
