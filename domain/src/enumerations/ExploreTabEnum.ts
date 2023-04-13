export enum ExploreTabEnums {
  bestOfSekeron = 'Best of SEKERON',
  posts = 'Posts',
  projects = 'Projects',
  profile = 'Profile',
  blogs = 'Blogs',
  events = 'Evens',
}

export class ExploreTabEnumUtils {
  public static getEnumValue(type: ExploreTabEnums): number {
    switch (type) {
      case ExploreTabEnums.bestOfSekeron:
        return 1
      case ExploreTabEnums.posts:
        return 2
      case ExploreTabEnums.projects:
        return 3
      case ExploreTabEnums.profile:
        return 4
      case ExploreTabEnums.events:
        return 5
      case ExploreTabEnums.blogs:
        return 6
    }
  }

  public static getExploreTabEnumUtils(): {
    id: number
    name: ExploreTabEnums
  }[] {
    const options: { name: ExploreTabEnums; id: number; value: number }[] = [
      {
        id: this.getEnumValue(ExploreTabEnums.bestOfSekeron),
        name: ExploreTabEnums.bestOfSekeron,
        value: this.getEnumValue(ExploreTabEnums.bestOfSekeron),
      },
      {
        id: this.getEnumValue(ExploreTabEnums.posts),
        name: ExploreTabEnums.posts,
        value: this.getEnumValue(ExploreTabEnums.posts),
      },
      {
        id: this.getEnumValue(ExploreTabEnums.projects),
        name: ExploreTabEnums.projects,
        value: this.getEnumValue(ExploreTabEnums.projects),
      },
      {
        id: this.getEnumValue(ExploreTabEnums.profile),
        name: ExploreTabEnums.profile,
        value: this.getEnumValue(ExploreTabEnums.profile),
      },
      {
        id: this.getEnumValue(ExploreTabEnums.events),
        name: ExploreTabEnums.events,
        value: this.getEnumValue(ExploreTabEnums.events),
      },
      {
        id: this.getEnumValue(ExploreTabEnums.blogs),
        name: ExploreTabEnums.blogs,
        value: this.getEnumValue(ExploreTabEnums.blogs),
      },
    ]
    return options
  }
}
