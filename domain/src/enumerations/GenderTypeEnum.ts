export enum GenderTypeEnum {
  Male = "Male",
  Female = "Female",
  Others = 'Others',
}

export class GenderTypeEnumUtils {
  public static getEnumValue(type: GenderTypeEnum): number {
    switch (type) {
      case GenderTypeEnum.Male:
        return 1;
      case GenderTypeEnum.Female:
        return 2;
      case GenderTypeEnum.Others:
        return 3;
    }
  }

  public static getGenderTypeEnums(): {
    id: number;
    genderType: GenderTypeEnum;
  }[] {
    const options: { genderType: GenderTypeEnum; id: number }[] = [
      {
        id: this.getEnumValue(GenderTypeEnum.Male),
        genderType: GenderTypeEnum.Male,
      },
      {
        id: this.getEnumValue(GenderTypeEnum.Female),
        genderType: GenderTypeEnum.Female,
      },
      {
        id: this.getEnumValue(GenderTypeEnum.Others),
        genderType: GenderTypeEnum.Others,
      },
    ];
    return options;
  }
}