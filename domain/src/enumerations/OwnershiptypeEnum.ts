export enum OwnershiptypeEnum {
    soloOwnership = "Solo Ownership",
    collectiveOwnership = "Collective Ownership",
    jointOwnership = "Joint Ownership"
}

export class OwnershiptypeEnumUtils {
    public static getEnumValue(type: OwnershiptypeEnum): number {
        switch (type) {
            case OwnershiptypeEnum.soloOwnership:
                return 1;
            case OwnershiptypeEnum.collectiveOwnership:
                return 2;
            case OwnershiptypeEnum.jointOwnership:
                return 3;
        }
    }

    public static getOwnershipEnumText(type: number): string {
        switch (type) {
            case 1:
                return "Solo";
            case 2:
                return "Collective";
            case 3:
                return "Joint";
            default:
                return ''
        }
    }

    public static getOwnershiptypeEnums(): {
        id: number;
        ownershipType: OwnershiptypeEnum;
    }[] {
        const options: { ownershipType: OwnershiptypeEnum; id: number }[] = [
            {
                id: this.getEnumValue(OwnershiptypeEnum.soloOwnership),
                ownershipType: OwnershiptypeEnum.soloOwnership,
            },
            {
                id: this.getEnumValue(OwnershiptypeEnum.collectiveOwnership),
                ownershipType: OwnershiptypeEnum.collectiveOwnership,
            },
            {
                id: this.getEnumValue(OwnershiptypeEnum.jointOwnership),
                ownershipType: OwnershiptypeEnum.jointOwnership,
            },
        ];
        return options;
    }
}
