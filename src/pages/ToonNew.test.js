import React from "react"
import { render, screen } from '@testing-library/react'
import ToonNew from "./ToonNew"
import { BrowserRouter } from 'react-router-dom'
import mockToons from '../mockToon'

describe("<ToonNew />", () => {
  it("has a field for name", () => {
    render(
      <BrowserRouter>
        <ToonNew toons={mockToons}/>
      </BrowserRouter>
    )
    const nameElement = screen.getByText(/name/i)
    expect(nameElement).toBeInTheDocument()
  })
  it("has a field for age", () => {
    render(
      <BrowserRouter>
        <ToonNew toons={mockToons}/>
      </BrowserRouter>
    )
    const ageElement = screen.getByText("Age")
    expect(ageElement).toBeInTheDocument()
  })
  it("has a field for enjoys", () => {
    render(
      <BrowserRouter>
        <ToonNew toons={mockToons}/>
      </BrowserRouter>
    )
    const enjoysElement = screen.getByText("Enjoys")
    expect(enjoysElement).toBeInTheDocument()
  })
  it("has a field for image", () => {
    render(
      <BrowserRouter>
        <ToonNew toons={mockToons}/>
      </BrowserRouter>
    )
    const imageElement = screen.getByText("Image")
    expect(imageElement).toBeInTheDocument()
  })
  it("has a submit button", () => {
    render(
      <BrowserRouter>
        <ToonNew toons={mockToons} />
      </BrowserRouter>
    )
    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("alt", "Submit Button")
  })
})