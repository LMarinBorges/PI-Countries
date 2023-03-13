import CardList from "../../components/CardList";
import FilterControls from "../../components/FilterControls";
import SortingControls from "../../components/SortingControls";

export default function Index() {
  return (
    <>
      <FilterControls />
      <SortingControls />
      <CardList />
    </>
  );
}
