import "@testing-library/jest-dom/extend-expect"

import { fireEvent,render, screen } from "@testing-library/react"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"

import Login from "./Login"

const MockLogin = () => {
    return (
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )
}

describe("Login form", () => {
    it("renders default state", () => {
        const { getByTestId } = render(<MockLogin />);
        const email = getByTestId("email") as HTMLInputElement;
        const sendotp = screen.getByRole("button", { name: /Send Otp/i });
        const loginText = screen.getByText("Login")

        expect(email).toBeInTheDocument()
        expect(sendotp).toBeInTheDocument()
        expect(loginText).toBeInTheDocument()
    });

    it("keeps the sendotp button disabled when the email is not provided", () => {
        const { getByTestId } = render(<MockLogin />);
        const email = getByTestId("email") as HTMLInputElement;
        const sendotp = screen.getByRole("button", { name: /Send Otp/i });

        expect(email.value).toBe("")
        expect(sendotp).toHaveClass("Mui-disabled")
    });

    it("enables the button once the correct email is provided", () => {
        const { getByTestId } = render(<MockLogin />);

        const email = getByTestId("email") as HTMLInputElement;
        const sendotp = screen.getByRole("button", { name: /Send Otp/i });

        fireEvent.change(email, { target: { value: 'y@gmail.com' } })
        expect(email.value).toBe('y@gmail.com')
        expect(sendotp).not.toHaveClass("Mui-disabled")
    });

    it("check if the second view is rendered once we provide email and click on Send Otp button", () => {
        const { getByTestId } = render(<MockLogin />);
        const email = getByTestId("email") as HTMLInputElement;
        const sendotp = screen.getByRole("button", { name: /Send Otp/i });
        fireEvent.change(email, { target: { value: 'y@gmail.com' } })
        fireEvent.click(sendotp)

        const continueButton = screen.getByRole("button", { name: /Continue/i });
        expect(continueButton).toBeInTheDocument()

        const otpinput = getByTestId("otpinput") as HTMLInputElement;
        expect(otpinput).toBeInTheDocument()

    });

});