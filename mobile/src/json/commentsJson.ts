import MediaAssets from "../assets";

export const commentsData = {
    count: 20,
    comments: [{
            id: 1,
            profilePic: MediaAssets.profile_pic,
            name: 'Stancey Kibler',
            username: '@stacky',
            comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
            replyCount: 2,
            isRepliesVisible: true,
            commentDuration: '20 m',
            replyComments: [{
                    id: 1,
                    username: '@neha',
                    profilePic: MediaAssets.profile_pic,
                    name: 'Neha',
                    comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
                    commentDuration: '20 m',
                },
                {
                    username: '@nayan',
                    profilePic: MediaAssets.profile_pic,
                    name: 'Nayan',
                    id: 2,
                    comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
                    commentDuration: '20 m',
                }
            ]

        },
        {
            id: 2,
            profilePic: MediaAssets.profile_pic,
            name: 'Neha',
            username: '@neha',
            comment: 'This is an Incredible Post',
            replyCount: 3,
            isRepliesVisible: true,
            commentDuration: '10 m',
            replyComments: [{
                    id: 1,
                    username: '@neha',
                    name: 'Neha',
                    comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
                    profilePic: MediaAssets.profile_pic,
                    commentDuration: '20 m',
                },
                {
                    username: '@nayan',
                    name: 'Nayan',
                    id: 2,
                    comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
                    profilePic: MediaAssets.profile_pic,
                    commentDuration: '20 m',
                },
                {
                    username: '@abin',
                    name: 'Abin',
                    id: 3,
                    comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
                    profilePic: MediaAssets.profile_pic,
                    commentDuration: '20 m',
                }
            ]

        },
        {
            id: 3,
            profilePic: MediaAssets.profile_pic,
            name: 'Abin Benny ',
            username: '@abin',
            comment: 'Incredible',
            replyCount: 1,
            isRepliesVisible: true,
            commentDuration: '15 m',
            replyComments: [{
                    id: 1,
                    username: '@neha',
                    name: 'Neha',
                    comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
                    profilePic: MediaAssets.profile_pic,
                    commentDuration: '20 m',
                },
            ]

        },
        {
            id: 4,
            profilePic: MediaAssets.profile_pic,
            name: 'Junaid Jimmy',
            username: '@junaid',
            comment: 'lalalalalal im commenting lalalalala',
            replyCount: 0,
            isRepliesVisible: false,
            commentDuration: '20 m',

        },
        {
            id: 5,
            profilePic: MediaAssets.profile_pic,
            name: 'Rohit Koparde',
            username: '@rohit',
            comment: 'lalalalalal im commenting lalalalala',
            replyCount: 0,
            isRepliesVisible: false,
            commentDuration: '30 m',

        },
        {
            id: 6,
            profilePic: MediaAssets.profile_pic,
            name: 'Anoop',
            username: '@anoop',
            comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
            replyCount: 0,
            isRepliesVisible: false,
            commentDuration: '05 m',

        },
        {
            id: 7,
            profilePic: MediaAssets.profile_pic,
            name: 'Farhan Gani',
            username: '@farhan',
            comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
            replyCount: 0,
            isRepliesVisible: false,
            commentDuration: '05 m',


        },
        {
            id: 8,
            profilePic: MediaAssets.profile_pic,
            name: 'Aftab Bhadki',
            username: '@aftab',
            comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
            replyCount: 0,
            isRepliesVisible: false,
            commentDuration: '38 m',


        },
        {
            id: 9,
            profilePic: MediaAssets.profile_pic,
            name: 'Sri Ram',
            username: '@ram.s',
            comment: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis',
            replyCount: 0,
            isRepliesVisible: false,
            commentDuration: '38 m',


        }

    ]
}