import React from "react"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ToonShow = ({ toons, deleteToon, likedToons }) => {

  const { id } = useParams()
  let currentToon = toons?.find(toon => toon.id === +id)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/toonedit/${currentToon.id}`)
  }

  const handleDelete = () => {
    deleteToon(currentToon)
    navigate('/toonindex')
  }

  const favorite = () => {
    likedToons(currentToon)
  }

  return (
    <>
      <main>
        {currentToon && (
          <div className="showPageMain">
            <h1>{`Hi, my name is ${currentToon.name}!`}</h1>
            <br></br>
            <img
              alt={`Profile of ${currentToon.name}`}
              src={currentToon.image}
              className="toon-show-img"
            />
            <br></br>
            <div>
              <h4 className="ageBold">Age: <span className="ageText">{`${currentToon.age} years`}</span></h4>
              <br></br>
              <h4 className="ageBold">I enjoy: </h4>
              <p className="ageText">{currentToon.enjoys_doing}!</p>
            </div>
            <button onClick={favorite}>Favorite</button>
            <button onClick={handleClick}>Edit Toon</button>
            <button onClick={handleDelete}>Delete Toon</button>
          </div>
        )}
      </main>
    </>
  )
}

export default ToonShow
