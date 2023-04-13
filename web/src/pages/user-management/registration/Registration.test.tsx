import "@testing-library/jest-dom/extend-expect"

import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { OtpInput } from "src/components/common/otp-input/OtpInput"
import Registration from "./Registration"

const MockRegistration = () => {
    return (
        <BrowserRouter>
            <Registration />
        </BrowserRouter>
    )
}

describe("Registration form", () => {
    it("renders default state", () => {
        const { getByTestId } = render(<MockRegistration />);

        const email = getByTestId("email") as HTMLInputElement;
        const verify = screen.getByRole("button", { name: /Verify/i });

        expect(email).toBeInTheDocument()
        expect(verify).toBeInTheDocument()
    });

    it("keeps the verify button disabled when the email is not provided", () => {
        const { getByTestId } = render(<MockRegistration />);

        const email = getByTestId("email") as HTMLInputElement;
        const verify = screen.getByRole("button", { name: /Verify/i });

        expect(email.value).toBe("")
        expect(verify).toHaveClass("Mui-disabled")
    });

    it("enables the button once the correct email is provided", () => {
        const { getByTestId } = render(<MockRegistration />);

        const email = getByTestId("email") as HTMLInputElement;
        const verify = screen.getByRole("button", { name: /Verify/i });

        fireEvent.change(email, { target: { value: 'y@gmail.com' } })
        expect(email.value).toBe('y@gmail.com')
        expect(verify).not.toHaveClass("Mui-disabled")
    });

    it("check if the otp verification view is rendered and the button text changed to continue, once we provide email and click on button", () => {
        const { getByTestId } = render(<MockRegistration />);

        const email = getByTestId("email") as HTMLInputElement;
        const verify = screen.getByRole("button", { name: /Verify/i });

        fireEvent.change(email, { target: { value: 'y@gmail.com' } })
        fireEvent.click(verify)

        const continueButton = screen.getByRole("button", { name: /Continue/i });
        expect(continueButton).toBeInTheDocument()
        const otpinput = getByTestId("otpinput") as HTMLInputElement;
        expect(otpinput).toBeInTheDocument()

    });

});