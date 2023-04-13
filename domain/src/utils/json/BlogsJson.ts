const description1 = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
    and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
    Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`

const blogDescription = [
  {
    id: 1,
    title: 'Welcome',
    publicUrl:
      'https://cdn.pixabay.com/photo/2017/01/30/16/11/sunset-2021266__340.jpg',
    description1: description1,
    description2: description1,
  },
  {
    id: 2,
    title: 'About',
    publicUrl:
      'https://cdn.pixabay.com/photo/2017/06/04/16/33/pyramids-2371501__340.jpg',
    description1: description1,
    description2: description1,
  },
  {
    id: 3,
    title: 'Resources',
    publicUrl:
      'https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310__340.jpg',
    description1: description1,
    description2: description1,
  },
  {
    id: 4,
    title: 'Archive',
    publicUrl:
      'https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855__340.jpg',
    description1: description1,
    description2: description1,
  },
  {
    id: 5,
    title: 'footer',
    publicUrl:
      'https://cdn.pixabay.com/photo/2017/01/06/23/03/sunrise-1959227__340.jpg',
    description1: description1,
    description2: description1,
  },
]

const similarBlogStories = [
  {
    id: '1',
    storyHeader: 'Our Story',
    storyDescription:
      'hello good moring good afternoon good evening good night midnight hello good moring good afternoon good evening good night midnight',
    publicUrl:
      'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    storyHeader: 'Lets Explore',
    storyDescription:
      'hello good moring good afternoon good evening good night midnight hello good moring good afternoon good evening good night midnight',
    publicUrl:
      'https://images.unsplash.com/photo-1503626685690-376e65cc8b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
  },
  {
    id: '3',
    storyHeader: 'Create Post',
    storyDescription:
      'hello good moring good afternoon good evening good night midnight hello good moring good afternoon good evening good night midnight',
    publicUrl:
      'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    storyHeader: 'Create Post',
    storyDescription:
      'hello good moring good afternoon good evening good night midnight hello good moring good afternoon good evening good night midnight',
    publicUrl:
      'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

const PopuleredBlogs = [
  {
    id: '1',
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    publicUrl:
      'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
  {
    id: '2',
    blogHeader: 'Decor',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    publicUrl:
      'https://c4.wallpaperflare.com/wallpaper/868/295/741/low-resolution-splashes-wallpaper-preview.jpg',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
  {
    id: '3',
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    publicUrl: 'https://mcdn.wallpapersafari.com/medium/18/8/wCu5br.jpg',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
  {
    id: '4',
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    publicUrl: 'https://mcdn.wallpapersafari.com/medium/67/7/JU9GWY.jpg',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
  {
    id: '5',
    blogHeader: 'Art Culture',
    blogDescription: 'No one knows secrete behind this art',
    isFavourite: false,
    publicUrl:
      'https://www.wallpapers13.com/wp-content/uploads/2015/12/Planet-earthClouds-nature-planets-earth-low-resolution-wallpaper-840x525.jpg',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
  {
    id: '6',
    blogHeader: 'Decor',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    publicUrl:
      'https://www.wallpapers13.com/wp-content/uploads/2015/12/Space-Shuttle-Wallpaper-2560X1440-840x525.jpg',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
  {
    id: '7',
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    publicUrl:
      'https://www.wallpapers13.com/wp-content/uploads/2015/12/View-Earth-in-the-space-1920x1200-840x525.jpg',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
  {
    id: '8',
    blogHeader: 'Art Culture',
    blogDescription: 'No one knows secrete behind this art',
    isFavourite: false,
    publicUrl:
      'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
  {
    id: '9',
    blogHeader: 'Decor',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    publicUrl:
      'https://www.wallpapers13.com/wp-content/uploads/2015/12/Space-Shuttle-Wallpaper-2560X1440-840x525.jpg',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
  {
    id: '10',
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    publicUrl:
      'https://www.wallpapers13.com/wp-content/uploads/2015/12/View-Earth-in-the-space-1920x1200-840x525.jpg',
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
  },
]

const FeaturedBlogs = [
  {
    id: 1,
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl:
      'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    blogHeader: 'Decor',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl:
      'https://c4.wallpaperflare.com/wallpaper/868/295/741/low-resolution-splashes-wallpaper-preview.jpg',
  },
  {
    id: 3,
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl: 'https://mcdn.wallpapersafari.com/medium/18/8/wCu5br.jpg',
  },
  {
    id: 4,
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl: 'https://mcdn.wallpapersafari.com/medium/67/7/JU9GWY.jpg',
  },
  {
    id: 5,
    blogHeader: 'Art Culture',
    blogDescription: 'No one knows secrete behind this art',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl:
      'https://www.wallpapers13.com/wp-content/uploads/2015/12/Planet-earthClouds-nature-planets-earth-low-resolution-wallpaper-840x525.jpg',
  },
  {
    id: 6,
    blogHeader: 'Decor',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl:
      'https://www.wallpapers13.com/wp-content/uploads/2015/12/Space-Shuttle-Wallpaper-2560X1440-840x525.jpg',
  },
  {
    id: 7,
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl:
      'https://www.wallpapers13.com/wp-content/uploads/2015/12/View-Earth-in-the-space-1920x1200-840x525.jpg',
  },
  {
    id: 8,
    blogHeader: 'Art Culture',
    blogDescription: 'No one knows secrete behind this art',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl:
      'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 9,
    blogHeader: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl:
      'https://www.wallpapers13.com/wp-content/uploads/2015/12/View-Earth-in-the-space-1920x1200-840x525.jpg',
  },
  {
    id: 10,
    blogHeader: 'Art Culture',
    blogDescription: 'No one knows secrete behind this art',
    isFavourite: false,
    blogDetailDescription: blogDescription,
    similarBlogs: similarBlogStories,
    publicUrl:
      'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
]

const headerBlogs = [
  {
    id: 1,
    blogHeader: 'Decor',
    blogFooter: 'we create tomorrow',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    publicUrl:
      'https://cdn.pixabay.com/photo/2016/11/22/19/30/sunset-1850211__340.jpg',
  },
  {
    id: 2,
    blogHeader: 'Art Culture',
    blogFooter: 'we create future',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    publicUrl:
      'https://cdn.pixabay.com/photo/2018/01/24/21/59/surf-3104869__340.jpg',
  },
  {
    id: 3,
    blogHeader: 'Decor',
    blogFooter: 'mesmerizing image',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    publicUrl:
      'https://cdn.pixabay.com/photo/2016/11/21/15/43/beach-1846040__340.jpg',
  },
  {
    id: 4,
    blogHeader: 'Art Culture',
    blogFooter: 'paints are ruling the art world',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    publicUrl:
      'https://cdn.pixabay.com/photo/2017/12/15/17/57/city-3021474__340.jpg',
  },
  {
    id: 5,
    blogHeader: 'paint',
    blogFooter: 'lets meet at the art world',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    publicUrl:
      'https://cdn.pixabay.com/photo/2017/12/16/22/23/regensburg-3023439__340.jpg',
  },
  {
    id: 6,
    blogHeader: 'photography',
    blogFooter: 'good morning world',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    publicUrl:
      'https://cdn.pixabay.com/photo/2016/11/23/18/29/cloudy-1854241__340.jpg',
  },
]

const similarBlogs = [
  {
    id: '1',
    blogHeader: 'photography',
    blogFooter: 'good morning world',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    storyHeader: 'Our Story',
    storyDescription:
      'hello good moring good afternoon good evening good night midnight hello good moring good afternoon good evening good night midnight',
    publicUrl:
      'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    blogHeader: 'art culture',
    blogFooter: 'good morning world',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    storyHeader: 'Lets Explore',
    storyDescription:
      'hello good moring good afternoon good evening good night midnight hello good moring good afternoon good evening good night midnight',
    publicUrl:
      'https://images.unsplash.com/photo-1503626685690-376e65cc8b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
  },
  {
    id: '3',
    blogHeader: 'decor',
    blogFooter: 'good morning world',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    storyHeader: 'Create Post',
    storyDescription:
      'hello good moring good afternoon good evening good night midnight hello good moring good afternoon good evening good night midnight',
    publicUrl:
      'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    blogHeader: 'photography',
    blogFooter: 'good morning world',
    similarBlogs: similarBlogStories,
    blogDetailDescription: blogDescription,
    storyHeader: 'Create Post',
    storyDescription:
      'hello good moring good afternoon good evening good night midnight hello good moring good afternoon good evening good night midnight',
    publicUrl:
      'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

export const BlogsJson = {
  headerBlogs: headerBlogs,
  popularBlogs: PopuleredBlogs,
  featuredBlogs: FeaturedBlogs,
  similarBlogs: similarBlogs,
}
