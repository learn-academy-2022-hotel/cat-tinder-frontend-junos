import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })

  it("renders a logo with a src and alt", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      div
    )
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "biggerlogo.gif")
    expect(logo).toHaveAttribute("alt", "TinderToons Logo")
  })
})