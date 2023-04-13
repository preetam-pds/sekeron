export enum BlogsTabEnums {
  bestOfSekeron = 'Best of SEKERON',
  garphicDesign = 'Graphic Design',
  photography = 'Photography',
}

export class BlogsTabEnumUtils {
  public static getEnumValue(type: BlogsTabEnums): number {
    switch (type) {
      case BlogsTabEnums.bestOfSekeron:
        return 1
      case BlogsTabEnums.garphicDesign:
        return 2
      case BlogsTabEnums.photography:
        return 3
    }
  }

  public static getBlogsTabEnumUtils(): {
    id: number
    name: BlogsTabEnums
  }[] {
    const options: { name: BlogsTabEnums; id: number; value: number }[] = [
      {
        id: this.getEnumValue(BlogsTabEnums.bestOfSekeron),
        name: BlogsTabEnums.bestOfSekeron,
        value: this.getEnumValue(BlogsTabEnums.bestOfSekeron),
      },
      {
        id: this.getEnumValue(BlogsTabEnums.garphicDesign),
        name: BlogsTabEnums.garphicDesign,
        value: this.getEnumValue(BlogsTabEnums.garphicDesign),
      },
      {
        id: this.getEnumValue(BlogsTabEnums.photography),
        name: BlogsTabEnums.photography,
        value: this.getEnumValue(BlogsTabEnums.photography),
      },
    ]
    return options
  }
}
