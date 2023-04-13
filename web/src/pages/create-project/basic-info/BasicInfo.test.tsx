import "@testing-library/jest-dom/extend-expect"

import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore } from '@sekeron/domain'
import BasicInfo from "./BasicInfo"

const { store } = createStore()

const MockBasicInfo = () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()

    return (
        <BrowserRouter>
            <Provider store={store}>
                <BasicInfo />
            </Provider>
        </BrowserRouter>
    )
}

describe("BasicInfo form", () => {

    it("renders default state", () => {
        const { getByTestId } = render(<MockBasicInfo />);
        const projectName = getByTestId("projectName") as HTMLInputElement;
        const category = getByTestId("category") as HTMLInputElement;
        const ownershipType = getByTestId("ownershipType") as HTMLInputElement;
        const revenueShareType = getByTestId("revenueShareType") as HTMLInputElement;
        const startDate = getByTestId("startDate") as HTMLInputElement;
        const endDate = getByTestId("endDate") as HTMLInputElement;
        const description = getByTestId("description") as HTMLInputElement;
        const offline = getByTestId("offline") as HTMLInputElement;

        expect(projectName).toBeInTheDocument()
        expect(category).toBeInTheDocument()
        expect(ownershipType).toBeInTheDocument()
        expect(revenueShareType).toBeInTheDocument()
        expect(startDate).toBeInTheDocument()
        expect(endDate).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(offline).toBeInTheDocument()

        expect(projectName.value).toBe("")
        expect(category.value).toBe("")
        expect(ownershipType.value).toBe("")
        expect(revenueShareType.value).toBe("")
        expect(description.value).toBe("")
        expect(offline).not.toBeChecked()
    });

    it("renders the address text filed and location button after clicking on  offline checkbox", async () => {

        const { getByTestId } = render(<MockBasicInfo />);
        const offline = getByTestId("offline") as HTMLInputElement;
        expect(offline).toBeInTheDocument()
        fireEvent.click(offline)

        await waitFor(() => {
            const locationButton = screen.getByRole("button", { name: /Enter Location on map/i });
            const adress = getByTestId("adress") as HTMLInputElement;
            expect(adress).toBeInTheDocument()
            expect(locationButton).toBeInTheDocument()

            expect(adress.value).toBe("")
            expect(locationButton).not.toHaveClass("Mui-disabled")
        })

    });

});

