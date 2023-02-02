import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Header />, div)
  })

  it("renders a logo with a src and alt", () => {
    const div = document.createElement("div")
    render(<Header />, div)
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "biggerlogo.gif")
    expect(logo).toHaveAttribute("alt", "TinderToons Logo")
  })
})