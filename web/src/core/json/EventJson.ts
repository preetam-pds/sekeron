import { strings } from '@sekeron/domain'
import ImageAssets from 'src/assets'
import { commentData } from './HomePageJson'

export const dropDownData = [
  {
    id: '1',
    name: 'January',
    value: 'January',
    month: 0,
  },
  {
    id: '2',
    name: 'February',
    value: 'February',
    month: 1,
  },
  {
    id: '3',
    name: 'March',
    value: 'March',
    month: 2,
  },
  {
    id: '4',
    name: 'April',
    value: 'April',
    month: 3,
  },
  {
    id: '5',
    name: 'May',
    value: 'May',
    month: 4,
  },
  {
    id: '6',
    name: 'June',
    value: 'June',
    month: 5,
  },
  {
    id: '7',
    name: 'July',
    value: 'July',
    month: 6,
  },
  {
    id: '8',
    name: 'August',
    value: 'August',
    month: 7,
  },
  {
    id: '9',
    name: 'September',
    value: 'September',
    month: 8,
  },
  {
    id: '10',
    name: 'October',
    value: 'October',
    month: 9,
  },
  {
    id: '11',
    name: 'November',
    value: 'November',
    month: 10,
  },
  {
    id: '12',
    name: 'December',
    value: 'December',
    month: 11,
  },
]

export const imageAvatars = [
  {
    id: 1,
    imageUrl: ImageAssets.ic_indian_flag,
  },
  {
    id: 2,
    imageUrl: ImageAssets.ic_indian_flag,
  },
  {
    id: 3,
    imageUrl: ImageAssets.ic_indian_flag,
  },
  {
    id: 4,
    imageUrl: ImageAssets.ic_indian_flag,
  },
  {
    id: 5,
    imageUrl: ImageAssets.ic_indian_flag,
  },
  {
    id: 6,
    imageUrl: ImageAssets.ic_indian_flag,
  },
]

export const sliderImage = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
]

const description =
  'SPARKS is an event event About the event About the event About the is an event event About the event About the event About theis an event event About the event About the event About theis an event event About the event About the event '

const heading1 =
  'n event event About the event About the event About theis an event event About the event About the event About theis an event event About the event About the event About theis an event event About the event About'

const eventsQuestions = [
  {
    id: '1',
    question: 'Do you have a laptop?',
    isSelected: false,
  },
  {
    id: '2',
    question: 'Do you have a pendrive?',
    isSelected: false,
  },
  {
    id: '3',
    question: 'Are you ok with making calls ?',
    isSelected: false,
  },
  {
    id: '4',
    question: 'Do you line a mumbai?',
    isSelected: false,
  },
  {
    id: '5',
    question: 'Do you have  a guitar?',
    isSelected: false,
  },
]

export const EventsData = [
  {
    id: '1',
    eventsHeader: 'Cocacola Battle of the Bonds',
    eventHoster: 'Sekeron',
    eventLocation: 'Jayanagar, Bangalore',
    eventTime: '7Pm, 12th August - 9AM 14th september',
    eventImages: sliderImage,
    noOfAdmirations: 23,
    noOfComments: 34,
    isNotified: false,
    isAdmired: false,
    imageAvatars: imageAvatars,
    commentsData: commentData,
    eventType: 'music',
    eventMode: 'free',
    eventHostedTime: '3d',
    description: description,
    heading1: heading1,
    eventCost: 0,
    eventsQuestions: eventsQuestions,
    links: [
      {
        id: '1',
        link: 'https://www.google.com/search?q=movie+ where+love+is',
      },
      {
        id: '2',
        link: 'https://www.google.com/search?q=movie+ where+love+is',
      },
    ],
  },
  {
    id: '2',
    eventsHeader: 'Charcol Battle of the Bonds',
    eventHoster: 'Facebook',
    eventLocation: 'Vijayanagar, Bangalore',
    eventTime: '7Pm, 12th may - 9AM 14th June',
    eventImages: sliderImage,
    noOfAdmirations: 12,
    noOfComments: 67,
    isNotified: false,
    isAdmired: false,
    imageAvatars: imageAvatars,
    commentsData: commentData,
    eventType: 'photowalk',
    eventMode: 'paid',
    eventHostedTime: '1d',
    description: description,
    heading1: heading1,
    eventCost: 499,
    eventsQuestions: eventsQuestions,
    links: [
      {
        id: '1',
        link: 'https://www.google.com/search?q=movie+ where+love+is',
      },
      {
        id: '2',
        link: 'https://www.google.com/search?q=movie+ where+love+is',
      },
    ],
  },
  {
    id: '3',
    eventsHeader: 'Pepsi Battle of the Bonds',
    eventHoster: 'Flipkart',
    eventLocation: 'Majestic, Bangalore',
    eventTime: '7Pm, 12th January - 9AM 14th February',
    eventImages: sliderImage,
    noOfAdmirations: 89,
    noOfComments: 26,
    isNotified: false,
    isAdmired: false,
    imageAvatars: imageAvatars,
    commentsData: commentData,
    eventType: 'music',
    eventMode: 'paid',
    eventHostedTime: '14d',
    description: description,
    heading1: heading1,
    eventCost: 999,
    eventsQuestions: eventsQuestions,
    links: [
      {
        id: '1',
        link: 'https://www.google.com/search?q=movie+ where+love+is',
      },
      {
        id: '2',
        link: 'https://www.google.com/search?q=movie+ where+love+is',
      },
    ],
  },
  {
    id: '4',
    eventsHeader: 'Thumbs Up Battle of the Bonds',
    eventHoster: 'Myntra',
    eventLocation: 'Pattabhiram nagar, Bangalore',
    eventTime: '7Pm, 12th Octomber - 9AM 14th December',
    eventImages: sliderImage,
    noOfAdmirations: 99,
    noOfComments: 111,
    isNotified: false,
    isAdmired: false,
    imageAvatars: imageAvatars,
    commentsData: commentData,
    eventType: 'photography',
    eventMode: 'paid',
    eventHostedTime: '4d',
    description: description,
    heading1: heading1,
    eventCost: 9999,
    eventsQuestions: eventsQuestions,
    links: [
      {
        id: '1',
        link: 'https://www.google.com/search?q=movie+ where+love+is',
      },
      {
        id: '2',
        link: 'https://www.google.com/search?q=movie+ where+love+is',
      },
    ],
  },
]

const categories = [
  {
    id: '1',
    name: 'Music',
    isSelected: false,
  },
  {
    id: '2',
    name: 'Photography',
    isSelected: false,
  },
  {
    id: '3',
    name: 'Dance',
    isSelected: false,
  },
  {
    id: '4',
    name: 'Fashion',
    isSelected: false,
  },
  {
    id: '5',
    name: 'Art',
    isSelected: false,
  },
  {
    id: '6',
    name: 'Design',
    isSelected: false,
  },
  {
    id: '7',
    name: 'Decor',
    isSelected: false,
  },
  {
    id: '8',
    name: 'poetry',
    isSelected: false,
  },
  {
    id: '9',
    name: 'fashion',
    isSelected: false,
  },
  {
    id: '10',
    name: 'Photography',
    isSelected: false,
  },
  {
    id: '11',
    name: 'Music',
    isSelected: false,
  },
  {
    id: '6',
    name: 'Design',
    isSelected: false,
  },
  {
    id: '7',
    name: 'Decor',
    isSelected: false,
  },
  {
    id: '8',
    name: 'poetry',
    isSelected: false,
  },
  {
    id: '9',
    name: 'fashion',
    isSelected: false,
  },
  {
    id: '10',
    name: 'Photography',
    isSelected: false,
  },
  {
    id: '11',
    name: 'Music',
    isSelected: false,
  },
]

const eventType = [
  {
    id: '1',
    name: 'paid',
    isSelected: false,
  },
  {
    id: '2',
    name: 'free',
    isSelected: false,
  },
]

const eventMode = [
  {
    id: '1',
    name: 'offline',
    isSelected: false,
  },
  {
    id: '2',
    name: 'Online',
    isSelected: false,
  },
]

export const filterTypes = [
  {
    id: '1',
    name: 'Event Type',
    eventSubType: eventType,
    isFilterSelected: false,
  },
  {
    id: '2',
    name: 'Event mode',
    eventSubType: eventMode,
    isFilterSelected: false,
  },
  {
    id: '3',
    name: 'Category',
    eventSubType: categories,
    isFilterSelected: true,
  },
]
