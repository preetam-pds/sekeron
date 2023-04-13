export enum RevenueShareTypeEnum {
    equalSplit = "Equal Split",
    unEqualSplit = "Unequal Split",
}

export class RevenueShareTypeEnumUtils {
    public static getEnumValue(type: RevenueShareTypeEnum): number {
        switch (type) {
            case RevenueShareTypeEnum.equalSplit:
                return 1;
            case RevenueShareTypeEnum.unEqualSplit:
                return 2;
        }
    }

    public static getRevenueShareTypeEnums(): {
        id: number;
        revenueShareType: RevenueShareTypeEnum;
    }[] {
        const options: { revenueShareType: RevenueShareTypeEnum; id: number }[] = [
            {
                id: this.getEnumValue(RevenueShareTypeEnum.equalSplit),
                revenueShareType: RevenueShareTypeEnum.equalSplit,
            },
            {
                id: this.getEnumValue(RevenueShareTypeEnum.unEqualSplit),
                revenueShareType: RevenueShareTypeEnum.unEqualSplit,
            },
        ];
        return options;
    }
}
