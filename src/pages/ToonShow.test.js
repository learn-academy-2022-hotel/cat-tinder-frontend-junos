import React from "react"
import { render, screen } from '@testing-library/react'
import ToonShow from "./ToonShow"
import mockToons from '../mockToon'
import { BrowserRouter } from 'react-router-dom'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/toonshow/1"]}>
      <Routes>
        <Route path='toonshow/:id' element={<ToonShow toons={mockToons} /> } />
      </Routes>
    </MemoryRouter>
  )
}

describe("<ToonShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ToonShow toons={mockToons}/>
      </BrowserRouter>,
      div
    )
  })
  it("renders cards with enjoys doing", () => {
    renderShow()
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ToonShow toons={mockToons}/>
      </BrowserRouter>,
      div
    )  
    expect(screen.getByText(mockToons[0].enjoys_doing + '!')).toBeInTheDocument()
  })
})