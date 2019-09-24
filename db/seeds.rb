john = User.create!(
  email: 'john.doe@a.com',
  first_name: 'John',
  last_name: 'Doe'
)

jane = User.create!(
  email: 'jane.doe@a.com',
  first_name: 'Jane',
  last_name: 'Doe'
)

Project.create!(
  [
    {
      title: 'new project',
      description: 'Building new apps',
      user: john,
      is_completed: false
    },
    {
      title: 'Building teams',
      description: 'How to build great teams',
      user: jane,
      is_completed: false
    },
    {
      title: 'prject',
      description: 'Hammers?',
      user: john,
      is_completed: false
    },
    {
      title: 'new project 27',
      description: 'apps',
      user: john,
      is_completed: false
    },
    {
      title: 'Jane projectz',
      description: 'Building new apps for new stuff',
      user: jane,
      is_completed: false
    },
  ]
)
