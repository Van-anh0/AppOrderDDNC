const bcrypt = require('bcrypt')
const users = [
  {
    email: "thienson@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    fullname: "Thien Son",
  },
  {
    email: "phduc@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    fullname: "Huy Duc",
  },
  {
    email: "trungnguyen@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    fullname: "Trung Nguyen",
  },
  {
    email: "Van Anh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    fullname: "Van Anh",
  },
  {
    email: "Van Nhut@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    fullname: "Van Nhut",
  },
];

module.exports = users