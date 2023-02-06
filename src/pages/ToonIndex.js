import React, { useState, useNavigate } from "react"
import { Navigate } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap"
import biggerlogo from '../assets/biggerlogo.gif'

const ToonIndex = ({ toons }) => {

  const shuffle = (values) => {
    let index = values.length, randomIndex;
    while (index != 0) {
      randomIndex = Math.floor(Math.random() * index);
      index--;
      [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }
    return values;
  }

  // const navigate = useNavigate()
  // const toShow = () => {
  //   navigate(`/toonshow/${toon.id}`)
  // }

  return (
    <>
      <h2 className="indexHeader">Have fun</h2>
      <main className="toon-index-cards">
        {shuffle(toons?.map((toon, index) => {
          return(
            <Card
              key={index}
              style={{
                width: '18rem',
                backgroundColor: 'rgb(140,237,244)',
                minWidth: '20vw',
                marginRight: '2%',
                marginLeft: '2%',
              }}
            >
              <CardBody>
                <CardTitle tag="h5">
                  {toon.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Hi there, I'm using TinderToons!
                </CardSubtitle>
              </CardBody>
              <div className="index-images">
                <img
                  alt="Card cap"
                  src={toon.image}
                  width="100%"
                />
              </div>
              <CardBody style={{display:'flex', justifyContent:'center'}}>
                <CardText>
                  {/* Some quick example text to build on the card title and make up the bulk of the card‘s content. */}
                </CardText>
                <div style={{textAlign:'center', border:'1px solid black', width:'40%', backgroundColor:'#e3e3e3', color:'white'}}>
                  <CardLink href={`/toonshow/${toon.id}`} style={{textDecoration:'none'}}>
                    Interested
                  </CardLink>
                  {/* <button onClick={toShow}>Interested</button> */}
                  {/* <CardLink>
                    Not interested...
                  </CardLink> */}
                  </div>
              </CardBody>
            </Card>
          )
        }))}
      </main>
    </>
  )
}

export default ToonIndex
