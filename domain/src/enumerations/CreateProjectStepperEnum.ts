
export enum CreateProjectStepperEnum {
    BasicInfo = "Basic Info",
    Media = "Media",
    Collaborations = 'Collaborations',
}

export class CreateProjectStepperEnumUtils {
    public static getEnumValue(type: CreateProjectStepperEnum): number {
        switch (type) {
            case CreateProjectStepperEnum.BasicInfo:
                return 1;
            case CreateProjectStepperEnum.Media:
                return 2;
            case CreateProjectStepperEnum.Collaborations:
                return 3;
        }
    }

    public static getCreateProjectStepperEnums(): {
        id: number;
        stepLabel: CreateProjectStepperEnum;
    }[] {
        const options: { stepLabel: CreateProjectStepperEnum; id: number }[] = [
            {
                id: this.getEnumValue(CreateProjectStepperEnum.BasicInfo),
                stepLabel: CreateProjectStepperEnum.BasicInfo,
            },
            {
                id: this.getEnumValue(CreateProjectStepperEnum.Media),
                stepLabel: CreateProjectStepperEnum.Media,
            },
            {
                id: this.getEnumValue(CreateProjectStepperEnum.Collaborations),
                stepLabel: CreateProjectStepperEnum.Collaborations,
            },
        ];
        return options;
    }
}
