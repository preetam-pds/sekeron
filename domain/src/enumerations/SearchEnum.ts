export enum SearchTabEnums {
  bestOfSekeron = 'Best of SEKERON',
  posts = 'Posts',
  projects = 'Projects',
  profile = 'Profile',
  blogs = 'Blogs',
  events = 'Evens',
}

export class SearchTabEnumUtils {
  public static getEnumValue(type: SearchTabEnums): number {
    switch (type) {
      case SearchTabEnums.bestOfSekeron:
        return 1
      case SearchTabEnums.posts:
        return 2
      case SearchTabEnums.projects:
        return 3
      case SearchTabEnums.profile:
        return 4
      case SearchTabEnums.events:
        return 5
      case SearchTabEnums.blogs:
        return 6
    }
  }

  public static getSearchTabEnumUtils(): {
    id: number
    name: SearchTabEnums
  }[] {
    const options: { name: SearchTabEnums; id: number; value: number }[] = [
      {
        id: this.getEnumValue(SearchTabEnums.bestOfSekeron),
        name: SearchTabEnums.bestOfSekeron,
        value: this.getEnumValue(SearchTabEnums.bestOfSekeron),
      },
      {
        id: this.getEnumValue(SearchTabEnums.posts),
        name: SearchTabEnums.posts,
        value: this.getEnumValue(SearchTabEnums.posts),
      },
      {
        id: this.getEnumValue(SearchTabEnums.projects),
        name: SearchTabEnums.projects,
        value: this.getEnumValue(SearchTabEnums.projects),
      },
      {
        id: this.getEnumValue(SearchTabEnums.profile),
        name: SearchTabEnums.profile,
        value: this.getEnumValue(SearchTabEnums.profile),
      },
      {
        id: this.getEnumValue(SearchTabEnums.events),
        name: SearchTabEnums.events,
        value: this.getEnumValue(SearchTabEnums.events),
      },
      {
        id: this.getEnumValue(SearchTabEnums.blogs),
        name: SearchTabEnums.blogs,
        value: this.getEnumValue(SearchTabEnums.blogs),
      },
    ]
    return options
  }
}
