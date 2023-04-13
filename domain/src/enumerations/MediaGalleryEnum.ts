export enum mediaGalleryTabSwitcherEnum {
    all = 0,
    images = 1,
    videos = 2,
    audios = 3,
    scripts = 4
}

export class mediaGalleryTabSwitcherEnumUtils {

    public static getmediaGalleryTabSwitcherEnums(): {
        id: number;
        name: string;
        value: string;
    }[] {
        const options: { name: string; id: number, value: string }[] = [
            {
                id: mediaGalleryTabSwitcherEnum.all,
                name: "All",
                value: "All",
            },
            {
                id: mediaGalleryTabSwitcherEnum.images,
                name: "Images",
                value: "Images",
            },
            {
                id: mediaGalleryTabSwitcherEnum.videos,
                name: "Videos",
                value: "Videos",
            },
            {
                id: mediaGalleryTabSwitcherEnum.audios,
                name: "Audios",
                value: "Audios",
            },
            {
                id: mediaGalleryTabSwitcherEnum.scripts,
                name: "Scripts",
                value: "Scripts",
            },
        ];
        return options;
    }
}
