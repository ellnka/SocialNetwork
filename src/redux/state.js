const state = {
  navbarPage: {
    menu: {
      items: [
        {
          title: 'Profile',
          link: '/myprofile'
        },
        {
          title: 'Posts',
          link: '/posts'
        },
        {
          title: 'Messages',
          link: '/messages'
        },
        /*         {
          title: 'Friends',
          link: '/friends'
        }, */
        {
          title: 'Users',
          link: '/users'
        }
        /*        {
          title: 'Settings',
          link: '/settings'
        } */
      ]
    }
  },
  messagesPage: {
    dialogs: [
      { id: 1, user: 'John' },
      { id: 2, user: 'Mark' },
      { id: 3, user: 'Helen' },
      { id: 4, user: 'Lucy' }
    ],
    messages: [
      { id: '1', text: 'Hello' },
      { id: '2', text: 'How are you?' },
      { id: '3', text: 'Do you know React?' }
    ]
  },

  profilePage: {
    posts: [
      { id: '1', text: 'my post 1' },
      { id: '2', text: 'my post 2' },
      { id: '3', text: 'my post 3' },
      { id: '4', text: 'my post 4' }
    ],
    newPostText: ''
  },

  usersPage: {
    users: [
      {
        id: 1,
        name: 'John Doe'
      }, {
        id: 2,
        name: 'Anna Miles'
      }, {
        id: 3,
        name: 'Kate Smith'
      }, {
        id: 4,
        name: 'Jack Jackson'
      }
    ]
  }
}

export default state
window.state = state
