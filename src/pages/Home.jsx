import { useEffect, useState } from "react";
import CardCarousel from "../components/CardCarousel";


export default function Home() {
  const [recommendations, setRecommendations] = useState(null)

  useEffect(() => {
    fetch("https://APP_DOMAIN/api/recommendations", {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(data => data.json())
    .then(data => setRecommendations(data.recommendation))
  }, [])

  return (
    <main id="main-content">
      {recommendations?.map(r => <CardCarousel title={r.title} collections={r.collections} key={r._id}/>)}
    </main>
  )
}
