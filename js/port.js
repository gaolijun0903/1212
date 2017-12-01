2017.11.11司机抽奖活动,活动已结束
原型图
https://prototype.yongche.org/hujingjing/%E5%8F%8C%E5%8D%81%E4%BA%8C%E6%B4%BB%E5%8A%A8/index.html#g=1&p=双十二抽奖活动

16825825825
16886318947  0001
16820171161
16886318957 测试手机号

// 抽奖页面 
// 无法获取登录状态时，提供弹窗窗口登录，并传递driver_id 能获取到则忽略次参数
http://yaoyakun.market.yongche.org/miscellaneous/Driverdoubletwelve/getInitPage?driver_id=50056790

{
    "code": 200,
    "msg": "OK",
    "result": {
        "isClick": 0, // 是否可抽奖
        "count": 0,   // 完成随叫随到单数
        "count_remain": 12, // 还差多少单才能抽奖
        "isLogin": 1, // 是否登录
        "driverList": [ // 获奖司机列表
             {
                "name": "test",
                "cellphone": 18810605345
            },
            {
                "name": "测试2",
                "cellphone": 13312345678
            }
        ]
    }
}


// 抽奖
http://yaoyakun.market.yongche.org/miscellaneous/Driverdoubletwelve/getResult?driver_id=50056790

{
    "code": 200,
    "msg": "恭喜您获得十个订单免佣资格 12月13日开始，完成的前10个订单将减免佣金"
}



    protected $award_arr = [
        0 => '恭喜您获得十个订单免佣资格 12月13日开始，完成的前10个订单将减免佣金',
        1 => '恭喜您获得二十个订单免佣资格 您12月13日完成的订单将减免佣金',
        2 => '恭喜您获得一百个订单免佣资格 您12月13日—12月17日期间完成的全部订单将减免佣金',
        3 => '恭喜您获得五万元现金 请保持手机畅通，客服人员24小时内联系您领取'
    ];