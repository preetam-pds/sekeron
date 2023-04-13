import "@testing-library/jest-dom/extend-expect"

import { fireEvent,render, screen, waitFor } from "@testing-library/react"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import CreateUser from "./CreateUser"

const MockCreateUser = () => {
    return (
        <BrowserRouter>
            <CreateUser />
        </BrowserRouter>
    )
}

describe("CreateUser form", () => {
    it("renders default state of userinformation form", async () => {
        const { getByTestId } = render(<MockCreateUser />);

        const fullName = getByTestId("fullName") as HTMLInputElement;
        const gender = getByTestId("fullName");
        const dateOfBirth = getByTestId("fullName");

        const verify = screen.getByRole("button", { name: /Continue/i });

        await waitFor(() => expect(fullName).toBeInTheDocument())
        await waitFor(() => expect(gender).toBeInTheDocument())
        await waitFor(() => expect(dateOfBirth).toBeInTheDocument())
        expect(verify).toBeInTheDocument()
    });

    it("keeps the sendotp button disabled when the fullName is not provided", async () => {
        const { getByTestId } = render(<MockCreateUser />);

        const fullName = getByTestId("fullName") as HTMLInputElement;
        const gender = getByTestId("gender") as HTMLSelectElement;
        const dateOfBirth = getByTestId("dateOfBirth") as HTMLInputElement;

        const verify = screen.getByRole("button", { name: /Continue/i });

        await waitFor(() => expect(fullName.value).toBe(""))
        await waitFor(() => expect(gender.value).toBe(""))
        await waitFor(() => expect(dateOfBirth.value).toBe(""))
        await waitFor(() => expect(verify).toHaveClass("Mui-disabled"))
    });

    it("keeps the sendotp button disabled when the fullName is not provided", async () => {
        const { getByTestId } = render(<MockCreateUser />);

        const fullName = getByTestId("fullName") as HTMLInputElement;
        const gender = getByTestId("gender") as HTMLSelectElement;
        const verify = screen.getByRole("button", { name: /Continue/i });

        await waitFor(() => fireEvent.change(fullName, { target: { value: 'Test' } }))
        await waitFor(() => fireEvent.change(gender, { target: { value: 'Test' } }))
        await waitFor(() => expect(fullName.value).toBe("Test"))
        await waitFor(() => expect(verify).toHaveClass("Mui-disabled"))
    });

});