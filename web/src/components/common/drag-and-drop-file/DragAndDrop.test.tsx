import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore } from '@sekeron/domain'
import 'blob-polyfill';
import DragAndDropFile from "./DragAndDropFile"

const { store } = createStore()

const MockDragAndDropFile = () => {
    const handleFileUploadMockFn = jest.fn();
    return (
        <BrowserRouter>
            <Provider store={store}>
                <DragAndDropFile name={""} handleMediaUpload={handleFileUploadMockFn} />
            </Provider>
        </BrowserRouter>
    )
}

describe("DragAndDropFile form", () => {
    let imageFile
    let audioFile

    beforeEach(() => {
        imageFile = new File(["dummy content"], "example.png", { type: "image/png" });
        audioFile = new File(["dummy content"], "example.mp3", { type: "audio/mp3" });
    });

    window.URL.createObjectURL = jest.fn();

    it("checking the file-if we upload a png image that should be stored in value", async () => {
        const { getByTestId } = render(<MockDragAndDropFile />);

        let inputFile = getByTestId("inputFile") as HTMLInputElement;

        fireEvent.change(inputFile, {
            target: { files: [imageFile] },
        })
        await waitFor(() => {
            expect(inputFile.files[0].name).toBe("example.png");
            expect(inputFile.files.length).toBe(1);
        }
        );

    });


    it("checking for the audio file", async () => {
        const { getByTestId } = render(<MockDragAndDropFile />);

        let inputFile = getByTestId("inputFile") as HTMLInputElement;

        fireEvent.change(inputFile, {
            target: { files: [audioFile] },
        })
        await waitFor(() => {
            expect(inputFile.files[0].name).toBe("example.mp3");
            expect(inputFile.files.length).toBe(1);
        }
        );

    });

    it("checking for the multiple file upload", async () => {
        const { getByTestId } = render(<MockDragAndDropFile />);

        let inputFile = getByTestId("inputFile") as HTMLInputElement;

        fireEvent.change(inputFile, {
            target: { files: [audioFile, imageFile] },
        })
        await waitFor(() => {
            expect(inputFile.files[0].name).toBe("example.mp3");
            expect(inputFile.files[1].name).toBe("example.png");
            expect(inputFile.files.length).toBe(2);
        }
        );

    });

});