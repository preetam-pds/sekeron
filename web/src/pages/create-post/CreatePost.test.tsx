import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore } from '@sekeron/domain'
import 'blob-polyfill';
import CreatePost from "./CreatePost"

const { store } = createStore()

const MockLogin = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <CreatePost />
            </Provider>
        </BrowserRouter>
    )
}

describe("Login form", () => {

    // let file
    // beforeEach(() => {
    //     file = new File(["dummy content"], "chucknorris.png", { type: "image/png" });
    // });

    // window.URL.createObjectURL = jest.fn();

    it("cover photo upload", async () => {
        //     const { getByTestId } = render(<MockLogin />);

        //     let inputFile = getByTestId("inputFile") as HTMLInputElement;

        //     await waitFor(() =>
        //         fireEvent.change(inputFile, {
        //             target: { files: [file] },
        //         })
        //     );

        //     let image = document.getElementById("inputFile") as HTMLInputElement;
        //     expect(image.files[0].name).toBe("chucknorris.png");
        //     expect(image.files.length).toBe(1);
    });

});