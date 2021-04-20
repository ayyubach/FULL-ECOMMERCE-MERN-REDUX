const bcrypt = require('bcryptjs')

const users = [
{    
    name: 'Ayyub',
    email: 'ayyub@email.com',
    password: '123456',
    address:'12 street',
    city:'Khenifra',
    zipcode:54010,
    country:'Morocco',
    isAdmin: true,

},
{    
    name: 'John',
    email: 'user@example.com',
    password: '123456',
    address:'12 street',
    city:'NY',
    zipcode:54010,
    country:'USA',
    isAdmin: false,

},

]

module.exports = users;