import React from "react"
import { useParams } from 'react-router-dom'

const ToonShow = ({ toons }) => {

  const { id } = useParams()
  let currentToon = toons?.find(toon => toon.id === +id)

  return (
    <>
      <main>
        {currentToon && (
          <div>
            <img
              alt={`Profile of ${currentToon.name}`}
              src={currentToon.image}
              className="toon-show-img"
            />
            <div>
              <h4>I am {currentToon.age} years old.</h4>
              <h4>I enjoy: </h4>
              <p>{currentToon.enjoys_doing}!</p>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default ToonShow
