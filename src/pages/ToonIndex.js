import React from "react"
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
                minWidth: '21vw',
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
        }))}
      </main>
    </>
  )
}

export default ToonIndex
