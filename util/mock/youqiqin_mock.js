// 添加匿名留言
Mock.mock('/user/personalCenter/addTalk',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        // 'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            // 'id|+1': 1
            "content":'@cword(5, 30)',
            "code":"0",
	        "msg":"success",
            // "time|1-10": 10,
            // 'picture|1':[
            // 	"./static/feedback.png",
            // 	"./static/feedback2.png",
            // 	"./static/feedback3.png",
            // ],
        // }]
})

// 获取匿名留言
Mock.mock('/user/personalCenter/getTalk',{
        // "code": "0",
		// "msg": "success",
		"data": [
			{
				'content': '@cword(5, 30)',
				'create_time|1-10': 10
			},
			{
				'content': '@cword(5, 30)',
				'create_time|1-10': 10
			},
			{
				'content': '@cword(5, 30)',
				'create_time|1-10': 10
			},
			{
				'content': '@cword(5, 30)',
				'create_time|1-10': 10
			},
			{
				'content': '@cword(5, 30)',
				'create_time|1-10': 10
			},
			{
				'content': '@cword(5, 30)',
				'create_time|1-10': 10
			},
		]
})
// Mock.mock('/new_infor',{
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//         'list|5': [{
//             // 属性 id 是一个自增数，起始值为 1，每次增 1
//             // 'id|+1': 1
//             'contents':'@cword(10, 25)',
//             // 'year':'@date("yyyy.MM.dd")',
//             // 'hour':'@time("HH:mm:ss")',
//             'states|1':[{
//             	'msg': "已拒绝",
//             },
//             {
//             	'msg':"已接受",
//             }
//             ]
//         }]
// })


// 修改密码
Mock.mock('/user/personalCenter/updatePassword',{
// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    // 'list|1': [
        // {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            // 'id|+1': 1
	"code":"0",
	"msg":"成功"
	        
   //  },
   //  {
   //  	"code":"2",
   //      "msg":"失败"	
   //  }
// ]
// "boolean|1": true

})


// 申请点赞币
Mock.mock('/user/personalCenter/addApply',{
	"code":"0",
	"msg":"成功"
})


// 购买点赞币
Mock.mock('/alipay/wappay',{
	"code": "0",
	"msg": "success",
})



Mock.mock('/order',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|5': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            // 'id|+1': 1
            'content':'@cword(10, 25)',
            'year':'@date("yyyy.MM.dd")',
            'hour':'@time("HH:mm:ss")',
            'state|1':[{
            	'msg': "已拒绝",
            },
            {
            	'msg':"已接受",
            }
            ],
        }]
})

// 我的订单
Mock.mock('/user/personalCenter/getOrderList',{
	"code": "0",
	"msg": "success",
	"data": [
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10,
	    },	
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10
		},
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10
		},
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10
		},
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10
		},
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10
		},
	]
})



Mock.mock('/order',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|5': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            // 'id|+1': 1
            'content':'@cword(10, 25)',
			'name': '@cname',
            // 'year':'@date("yyyy.MM.dd")',
            // 'hour':'@time("HH:mm:ss")',
            'state|1':[{
            	'msg': "已拒绝",
            },
            {
            	'msg':"已接受",
            }
            ],
        }]
})


// 接受订单任务>历史记录
Mock.mock('/user/personalCenter/getProcessOrderr',{
	"data":[
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		},
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		},
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		},
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		},
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		}
	]
})
// })


