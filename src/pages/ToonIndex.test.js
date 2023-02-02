import React from "react"
import { render, screen } from '@testing-library/react'
import ToonIndex from "./ToonIndex"
import { BrowserRouter } from 'react-router-dom'
import mockToons from '../mockToon'

describe("<ToonIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ToonIndex toons={mockToons}/>
      </BrowserRouter>,
      div
    )
  })
  it('displays all toon names', () => {
    const div = document.createElement("div")
    render(<ToonIndex toons={mockToons} />, div)
    mockToons.forEach(toon => {
      const toonName = screen.getByText(toon.name)
      expect(toonName).toBeInTheDocument()
    })
  })
})