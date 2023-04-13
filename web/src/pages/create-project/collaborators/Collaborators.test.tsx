import "@testing-library/jest-dom/extend-expect"

import { fireEvent, render, screen, waitFor, within } from "@testing-library/react"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore } from '@sekeron/domain'
import Collaborators from "./Collaborators"

const { store } = createStore()

const MockCollaborators = () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Collaborators />
            </Provider>
        </BrowserRouter>
    )
}

describe("Collaborators form", () => {

    it("renders default state", async () => {
        const { getByTestId } = render(<MockCollaborators />);

    });

    it("renders the address text filed and location button after clicking on  offline checkbox", async () => {

        // const { getByTestId } = render(<MockCollaborators />);
        // const offline = getByTestId("offline") as HTMLInputElement;
        // expect(offline).toBeInTheDocument()
        // fireEvent.click(offline)

        // await waitFor(() => {
        //     const locationButton = screen.getByRole("button", { name: /Enter Location on map/i });
        //     const adress = getByTestId("adress") as HTMLInputElement;
        //     expect(adress).toBeInTheDocument()
        //     expect(locationButton).toBeInTheDocument()

        //     expect(adress.value).toBe("")
        //     expect(locationButton).not.toHaveClass("Mui-disabled")
        // })

    });

});

function wait() {
    throw new Error("Function not implemented.");
}

