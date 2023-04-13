import "@testing-library/jest-dom/extend-expect"

import { fireEvent, render, screen } from "@testing-library/react"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import CreateProject from "./CreateProject"
import { Provider } from 'react-redux';
import { createStore } from '@sekeron/domain'

const { store } = createStore()


const MockCreateProject = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <CreateProject />
            </Provider>
        </BrowserRouter>
    )
}

describe("CreateProject form", () => {

    const mockChildComponent = jest.fn();
    const basicInfo = jest.fn();
    const mediaSelection = jest.fn();
    // const mockChildComponent = jest.fn();

    jest.mock("./ChildComponent", () => (props) => <div data-testid="that"></div>);
    jest.mock("./ChildComponent", () => (props) => <div data-testid="that"></div>);
    jest.mock("./ChildComponent", () => (props) => <div data-testid="that"></div>);


    test("If ParentComponent is passed open and has data, ChildComponent is called with prop open and data", () => {
        render(<MockCreateProject />);
        // expect(mockChildComponent).toHaveBeenCalledWith(
        //     expect.objectContaining({
        //         // open: true,
        //         // data: "some data",
        //     })
        // );
    });

    test("If ParentComponent is not passed open, ChildComponent is not called", () => {
        let screenType = "basicInfo"
        render(<MockCreateProject />);
        expect(basicInfo).toHaveBeenCalled();
        expect(mediaSelection).not.toHaveBeenCalled();
    });

});