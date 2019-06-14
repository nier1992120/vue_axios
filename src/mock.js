// 引入mock
const Mock = require('mockjs')
const Random = Mock.Random

// 创建一组mock数据
const itemsDate = function () {
  let items = []

  let item = {
    img: Random.dataImage('156x101', 'mock图片'),
    title: Random.csentence(10, 20),
    author: Random.cname(),
    desc: Random.csentence(20, 60)
  }
  items.push(item)
  return items
}

const tableData = function (pageSize, currentPage) {
  let items = {
    total: 40,
    tableList: []
  }

  for (let i = 0; i < 10; i++) {
    let item = {
      date: Random.datetime(),
      name: Random.cname(),
      address: Random.county(true)
    }
    items.tableList.push(item)
  }

  return items
}

const userList = [
  {
    id: 1,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 2,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 3,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 4,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 5,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 6,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 7,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 8,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 9,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 10,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 11,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 12,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }, {
    id: 13,
    username: 'nier',
    age: 10,
    phone: '16675169201',
    mail: '166168@qq.com'
  }]

const getUserList = function (pageSize, currentPage) {
  let start = (currentPage - 1) * pageSize
  let end = start + pageSize
  return {
    total: userList.length,
    userList: userList.slice(start, end)
  }
}
// Mock.mock(url,post/get,返回数据)
Mock.mock('item/itemList', 'post', itemsDate)

Mock.mock('item/tableList?pageSize=15&currentPage=1', 'get', tableData)

Mock.mock('item/getUserList?pageSize=10&currentPage=1', 'get', getUserList(10, 1))
