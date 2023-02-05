import { React, useState } from "react"
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ToonEdit = ({ updateToon, toons }) => {
  const { id } = useParams()
  let currentToon = toons?.find(toon => toon.id === +id)

  const [newToon, setNewToon] = useState({
    name: currentToon.name,
    age: currentToon.age,
    enjoys_doing: currentToon.enjoys_doing,
    image: currentToon.image
  })

  const handleChange = (e) => {
    setNewToon({...newToon, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()

  const handleSubmit = () => {
    updateToon(newToon, id)
    navigate(`/toonshow/${currentToon.id}`)
  }

  return (
    <>
      <div className="addingForm">
        <Form>
          <FormGroup row>
            <Label
              for="exampleEmail"
              sm={2}
            >
              Name
            </Label>
            <Col sm={10}>
              <Input
                id="name"
                name="name"
                defaultValue={currentToon.name}
                type="text"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="examplePassword"
              sm={2}
            >
              Age
            </Label>
            <Col sm={10}>
              <Input
                id="age"
                name="age"
                defaultValue={currentToon.age}
                type="text"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleText"
              sm={2}
            >
              Enjoys
            </Label>
            <Col sm={10}>
              <Input
                id="enjoys"
                name="enjoys_doing"
                defaultValue={currentToon.enjoys_doing}
                type="text"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleText"
              sm={2}
            >
              Image
            </Label>
            <Col sm={10}>
              <Input
                id="image"
                name="image"
                defaultValue={currentToon.image}
                type="text"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup
            // check
            // row
          >
            <Col
              // sm={{
              //   offset: 2,
              //   size: 10
              // }}
            >
              <Button
                alt="Submit Button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </>
  )
}

export default ToonEdit
