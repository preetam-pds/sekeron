export enum NotificatoinTabEnums {
  all = 'All',
  posts = 'Posts',
  projects = 'Projects',
  events = 'Events',
}

export class NotificationTabEnumUtils {
  public static getEnumValue(type: NotificatoinTabEnums): number {
    switch (type) {
      case NotificatoinTabEnums.all:
        return 1
      case NotificatoinTabEnums.posts:
        return 2
      case NotificatoinTabEnums.projects:
        return 3
      case NotificatoinTabEnums.events:
        return 4
    }
  }

  public static getNotificatoinTabEnums(): {
    id: number
    name: NotificatoinTabEnums
  }[] {
    const options: {
      name: NotificatoinTabEnums
      id: number
      value: number
    }[] = [
      {
        id: this.getEnumValue(NotificatoinTabEnums.all),
        name: NotificatoinTabEnums.all,
        value: this.getEnumValue(NotificatoinTabEnums.all),
      },
      {
        id: this.getEnumValue(NotificatoinTabEnums.posts),
        name: NotificatoinTabEnums.posts,
        value: this.getEnumValue(NotificatoinTabEnums.posts),
      },
      {
        id: this.getEnumValue(NotificatoinTabEnums.projects),
        name: NotificatoinTabEnums.projects,
        value: this.getEnumValue(NotificatoinTabEnums.projects),
      },
      {
        id: this.getEnumValue(NotificatoinTabEnums.events),
        name: NotificatoinTabEnums.events,
        value: this.getEnumValue(NotificatoinTabEnums.events),
      },
    ]
    return options
  }
}
