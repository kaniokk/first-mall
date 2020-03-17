const express = require('express')
const path = require("path")

const app = express()
app.use(express.static('img'))
app.use('/static',express.static(path.join(__dirname,'img')))

var cors=require('cors');
app.use(cors({
    origin:['http://127.0.0.1:8080'],  //指定接收的地址，将localhost改成前端IP地址
    methods:['GET','POST'],  //指定接收的请求类型
    alloweHeaders:['Content-Type','Authorization']  //指定header
}))

var data = {
  pop: {
    list:[{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27898065-1_l_3.jpg',
      'title': '外星人学校',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27906906-1_l_2.jpg',
      'title': '很爱很爱你',
      'iid': 'aaa'
    },{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27868279-1_l_6.jpg',
      'title': '思维导图',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27869801-1_l_2.jpg',
      'title': '那爷爷讲故事',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27871865-1_l_21.jpg',
      'title': '笑背古诗',
      'iid': 'kkk'
    }]
  },
  new: {
    list: [{
      'img': 'http://127.0.0.1:3000/static/Life/9224823-1_l_3.jpg',
      'title': '家常菜精选',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/Life/23194043-1_l_1.jpg',
      'title': '捕捉儿童敏感期',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/Life/25262421-1_l_3.jpg',
      'title': '合理安排时间',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/Life/25265439-1_l_3.jpg',
      'title': '爱和自由',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/Life/27922891-1_l_5.jpg',
      'title': '养育男孩',
      'iid': 'kkk'
    }]
  },
  sell: {
    list: [{
      'img': 'http://127.0.0.1:3000/static/Novel/25182491-1_l_6.jpg',
      'title': '失乐园',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/Novel/25224258-1_l_7.jpg',
      'title': '主角',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/Novel/25353757-1_l_2.jpg',
      'title': '三体',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/Novel/27911609-1_l_8.jpg',
      'title': '春日序曲',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/Novel/27911800-1_l_3.jpg',
      'title': '你想活出怎样的人生',
      'iid': 'kkk'
    }]
  }
}

app.get('/home/data',(req,res) => {
  // 输出流行
  if(req.query.page == 1 && req.query.type == 'pop'){
    res.send(data.pop)
  }
  else if (req.query.page == 2 && req.query.type == 'pop'){
    res.send(data.new)
  }
  else if (req.query.page == 3 && req.query.type == 'pop'){
    res.send(data.sell)
  }
  // 输出新款
  else if (req.query.page == 1 && req.query.type == 'new'){
    res.send(data.new)
  }
  else if (req.query.page == 2 && req.query.type == 'new'){
    res.send(data.sell)
  }
  else if (req.query.page == 3 && req.query.type == 'new'){
    res.send(data.pop)
  }
  // 输出精选
  else if (req.query.page == 1 && req.query.type == 'sell'){
    res.send(data.sell)
  }
  else if (req.query.page == 2 && req.query.type == 'sell'){
    res.send(data.pop)
  }
  else if (req.query.page == 3 && req.query.type == 'sell'){
    res.send(data.sell)
  }
  else {
    res.send(data.new)
  }
})

app.get('/detail',(req,res) => {
  if(req.query.iid === 'kkk') {
    res.send({
      result: {
        topImages:
          ['http://127.0.0.1:3000/static/Novel/25182491-1_l_6.jpg',
          'http://127.0.0.1:3000/static/Novel/25224258-1_l_7.jpg']
      },
      content: {
        images: ["http://127.0.0.1:3000/static/Novel/27911800-1_l_3.jpg",
                  'http://127.0.0.1:3000/static/Novel/25182491-1_l_6.jpg',
                  'http://127.0.0.1:3000/static/Novel/25224258-1_l_7.jpg'
                ],
        style: "red"
      },
      summy: {
        name: "你想活出怎样的人生",
        price: "59.9",
        sum: "100",
        topic: "影响宫崎骏一生的经典小说，入选日本学校教材，荣获日本中学教师票选“送你一本书大奖”，中日知名院士、学者一致推荐。生而为人真正重要的事，都在这本书里了！"
      },
      extra: {
        author: "吉野源三郎",
        publisher: "南海出版公司",
        date: "1535694719",
        iid: "kkk"
      }
    })
  }else if(req.query.iid === 'aaa') {
    res.send({
      result: {    
        topImages: 
        ['http://127.0.0.1:3000/static/Life/25262421-1_l_3.jpg',
        'http://127.0.0.1:3000/static/Novel/25224258-1_l_7.jpg']
      },
      content: {
        images: ["http://127.0.0.1:3000/static/Novel/25224258-1_l_7.jpg",
                  'http://127.0.0.1:3000/static/Novel/25182491-1_l_6.jpg',
                  'http://127.0.0.1:3000/static/Life/25262421-1_l_3.jpg'
                ],
        style: "red"
      },
      summy: {
        name: "你坎坎坷坷看人生",
        price: "59.9",
        sum: "100",
        topic: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
      },
      extra: {
        author: "吉野源三郎",
        publisher: "南海出版公司",
        date: "1535694719",
        iid: "aaa"
      }
    })
  } 
})


// 推荐数据
app.get("/recommend", (req,res) => {
  res.send({
    list:[{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27898065-1_l_3.jpg',
      'title': '外星人学校',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27906906-1_l_2.jpg',
      'title': '很爱很爱你',
      'iid': 'aaa'
    },{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27868279-1_l_6.jpg',
      'title': '思维导图',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27869801-1_l_2.jpg',
      'title': '那爷爷讲故事',
      'iid': 'kkk'
    },{
      'img': 'http://127.0.0.1:3000/static/ChildrenBook/27871865-1_l_21.jpg',
      'title': '笑背古诗',
      'iid': 'kkk'
    }]
  })
}
)

app.listen(3000,() => {
  console.log("server has been started on port 3000")
})
