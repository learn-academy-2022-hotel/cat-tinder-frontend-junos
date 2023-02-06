import { React, useState } from "react"
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const ToonNew = ({ createToon }) => {

  const [newToon, setNewToon] = useState({
    name: "",
    age: "",
    enjoys_doing: "",
    image: ""
  })

  const handleChange = (e) => {
    setNewToon({...newToon, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()

  const handleSubmit = () => {
    createToon(newToon)
    navigate("/toonindex")
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
                placeholder="enter the toon's name here"
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
                placeholder="enter toon's age here"
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
                placeholder="what do you like to do?"
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
                placeholder="add a hot picture of you"
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
                className="submitNew"
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

export default ToonNew
