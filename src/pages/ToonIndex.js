import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap"

const ToonIndex = ({ toons }) => {
  return (
    <>
      <main className="toon-index-cards">
        {toons?.map((toon, index) => {
          return(
            <Card
              key={index}
              style={{
                width: '18rem',
                backgroundColor: 'rgb(140,237,244)'
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
              <CardBody>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
                <div style={{textAlign:'center'}}>
                  <CardLink href={`/toonshow/${toon.id}`}>
                    Interested
                  </CardLink>
                  <CardLink href="#">
                    Not interested...
                  </CardLink>
                  </div>
              </CardBody>
            </Card>
          )
        })}
      </main>
    </>
  )
}

export default ToonIndex
