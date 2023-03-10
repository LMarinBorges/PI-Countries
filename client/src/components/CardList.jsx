import styled from "styled-components";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export default function CardList() {
  const { data, filters, search, sorting } = useSelector((state) => state);
  return (
    <CardContainer>
      {data.countries
        // Continent filter
        .filter(
          (country) =>
            filters.continent === null ||
            country.continent === filters.continent
        )
        // Activity filter
        .filter(
          (country) =>
            filters.activity === null ||
            data.activities
              .find((value) => value.id === parseInt(filters.activity))
              .countries.some((value) => value.isoCode === country.isoCode)
        )
        // Search filter
        .filter(
          (country) =>
            search === "" ||
            country.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
          switch (sorting.field) {
            case "name": {
              return sorting.order === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
            }
            case "population": {
              return sorting.order === "asc"
                ? a.population - b.population
                : b.population - a.population;
            }
            default: {
              throw Error(`invalid sorting field: ${sorting.field}`);
            }
          }
        })
        .slice(0, 10)
        .map((country) => (
          <CountryCard
            key={country.id}
            to={`/home/countries/${country.isoCode}`}
            image={country.flagImage}
            title={country.name}
            subtitle={country.continent}
          />
        ))}
    </CardContainer>
  );
}
