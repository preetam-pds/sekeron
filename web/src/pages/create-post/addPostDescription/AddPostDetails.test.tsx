import "@testing-library/jest-dom/extend-expect"

import { fireEvent, render, screen } from "@testing-library/react"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore } from '@sekeron/domain'
import AddPostDetails from "./AddPostDetails"

const { store } = createStore()

const MockAddPostDetails = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AddPostDetails />
            </Provider>
        </BrowserRouter>
    )
}

describe("AddPostDetails form", () => {
    it("renders default state", () => {
        const { getByTestId } = render(<MockAddPostDetails />);
        const title = getByTestId("project-title") as HTMLInputElement;
        const description = getByTestId("project-description") as HTMLInputElement;
        const addMoreMedia = getByTestId("add-more-media");
        const clearAll = screen.getByRole("button", { name: /Clear All/i });
        const next = screen.getByRole("button", { name: /Next/i });

        const mediaCards = getByTestId("media-cards");

        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()

        expect(title.value).toBe("")
        expect(description.value).toBe("")

        expect(addMoreMedia).toBeInTheDocument()
        expect(next).toBeInTheDocument()
        expect(clearAll).toBeInTheDocument()

        expect(mediaCards).toBeInTheDocument()

    });
});