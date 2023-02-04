import React from "react"
import { render, screen } from '@testing-library/react'
import ToonEdit from "./ToonEdit"
import { BrowserRouter } from 'react-router-dom'
import mockToons from '../mockToon'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import editToon from '../App'

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/toonedit/1"]}>
        <Routes>
            <Route path="/toonedit/:id" element={<ToonEdit toons={mockToons} /> } />
        </Routes>
        </MemoryRouter>
    )
}

describe("<ToonEdit />", () => {
    it("renders without crashing", () => {
        renderShow()
        expect(screen.getByText(/name/i)).toBeInTheDocument()
    })
    it("verifies there is a button", () => {
        renderShow()
        expect(screen.getByRole('button'))
        // const div = document.createElement("div") 
        // render(<ToonEdit toons={mockToons}/>, div)
        // expect(screen.getByRole('input')).toHaveAttribute('name', 'name')
    })
})