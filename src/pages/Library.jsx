import { useEffect, useState } from "react";
import LibraryTable from "../components/LibraryTable";
import LibraryFilters from "../components/LibraryFilters";


export default function Library() {
  const [collections, setCollections] = useState(null)
  const [filter, setFilter] = useState()

  const handleFilter = (type) => {
    setFilter(type)
  }

  useEffect(() => {
    fetch("https://1436c56d-79df-4bf2-9318-7760bdc85522-00-1lwrllm2sopup.janeway.replit.dev/api/collections", {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(data => data.json())
    .then(data => setCollections(data.collection))
  }, [])

  return (
    <section>
      <h1>La tua libreria</h1>
      {collections && <>
        <LibraryFilters handleFilter={handleFilter} />
        <LibraryTable data={collections} filter={filter} />
      </>}
    </section>
  )
}
