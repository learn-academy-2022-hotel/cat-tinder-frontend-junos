import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "./NotFound"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
      div
    )
  })
  
  it("renders a 404 Not Found message", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
      div
    )
    const names = screen.getByText("404 NOT FOUND")
    expect(names).toBeInTheDocument()
  })
})