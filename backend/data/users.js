import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Emily Nardello',
    email: 'emily@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tony Wilcox',
    email: 'tony@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rachael Wilcox',
    email: 'rachael@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
