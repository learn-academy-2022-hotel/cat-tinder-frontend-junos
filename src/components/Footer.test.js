import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Footer />, div)
  })

  it("has company and creator names", () => {
    const div = document.createElement("div")
    render(<Footer />, div)
    const names = screen.getByText("Created by: © JUNOS Inc. Octavio Sifuentes | Chris Lee")
    expect(names).toBeInTheDocument()
  })
})