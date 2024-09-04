import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumTable from "./AlbumTable"

export default function AlbumDetails({updateItem}) {
  const [album, setAlbum] = useState(null)
  const {id} = useParams()

  const changeItem = function(i, artwork, subtitle) {
    updateItem({item: {title: i.title, length: i.length}, artwork: artwork, subtitle: subtitle})
  }

  useEffect(() => {
    fetch("https://APP_DOMAIN/api/collections/"+id, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(res => res.json())
    .then(data => setAlbum(data.collection))
  }, [])

  return(
    <>
      {album && <AlbumTable changeItem={changeItem} data={album} />}
    </>
  )
}
