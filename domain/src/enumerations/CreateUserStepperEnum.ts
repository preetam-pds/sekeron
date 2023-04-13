export enum CreateUserStepperEnum {
    userInformation = 0,
    otpVerification = 1,
    profileDetails = 2,
}

export class CreateUserStepperEnumUtils {

    public static getCreateUserStepperEnums(): {
        id: number;
        stepLabel: string;
    }[] {
        const options: { stepLabel: string; id: number }[] = [
            {
                id: CreateUserStepperEnum.userInformation,
                stepLabel: "",
            },
            {
                id: CreateUserStepperEnum.otpVerification,
                stepLabel: "",
            },
            {
                id: CreateUserStepperEnum.profileDetails,
                stepLabel: "",
            },
        ];
        return options;
    }
}
