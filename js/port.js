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

http://yaoyakun.market.yongche.org/miscellaneous/Driverdoubletwelve/getCurrentPage?page=1&pageCount=20
{
    "code": 200,
    "msg": "OK",
    "result": {
        "driverList": [
            {
                "name": "y*****t",
                "cellphone": "330****",
                "award_type": 5
            },
              {
                "name": "y*****t",
                "cellphone": "221****",
                "award_type": 4
            }]
    }
}

// 抽奖
http://yaoyakun.market.yongche.org/miscellaneous/Driverdoubletwelve/getResult?driver_id=50056790

{
    "code": 200,
    "msg": "恭喜您获得十个订单免佣资格 12月13日开始，完成的前10个订单将减免佣金",
    "result":{
    	"award_type":0
    }
}

 * code说明
 *
 * 101 活动未开始
 * 102 活动已结束
 * 201 司机不存在
 * 202 请完成8单随叫随到订单后再来抽奖哦~
 * 203 请登录后再抽奖
 * 205 您已抽过奖


    protected $award_arr = [
        0 => '100元',
        1 => '500元',
        2 => '1000元',
        3 => '华为手机',
        4 => '凯美瑞汽车'
    ];
    



一、免佣活动细则：
1、活动3天，所有车型产品40元及以下订单免易到佣金；
2、订单开始时间和结束时间均在活动期间内有效；
3、参与活动的订单类型为所有订单类型。

二、奖品活动细则
1、活动当天完成8单及以上的司机，可参与100元现金、100个500个现金奖、20个1000元现金奖励、1辆丰田凯美瑞车、2部华为手机；
2、活动当天完成任务后即可抽奖，仅限活动当天可抽奖，过期视为自动放弃抽奖资格；
3、中奖率100%，中奖后10个工作日内奖励发放至车主账户内，汽车中奖用户需要来易到办理相关手续进行奖品领取，如中奖司机有违规行为，易到有权取消获奖资格；
4、订单开始时间和结束时间均在活动期间内有效；
5、参与活动的订单类型为马上用车订单；
6、活动当天订单无差评、无风控、无账单疑义等。


maskBgs:[
 	"//i3.Yongche.name/media/g2/M02/1A/19/rBEBP1oiePSIRXpEAABfUxlAWiMAAKRaALHmTUAAF9r754.png",
 	"//i2.Yongche.name/media/g2/M04/1A/19/rBEBP1oiePSIRd23AABc3EhAE3MAAKRZwKbAqAAAFz0095.png",
 	"//i2.Yongche.name/media/g2/M01/1A/19/rBEBJVoiePSIDCxfAABfeA4SNmAAAKRaQHSTr4AAF-Q383.png",
 	"//i2.Yongche.name/media/g2/M01/1A/19/rBEBJVoiePSIEphcAAB3Myr6mTMAAKRaQHSrk4AAHdL638.png",
 	"//i3.Yongche.name/media/g2/M02/1A/19/rBEBP1oiePSIGHTEAAB7Y68mDz8AAKRaALH-KAAAHt7477.png",
 	"//i2.Yongche.name/media/g2/M01/1A/19/rBEBJVoiePSICfGCAABWXRbGPZYAAKRaQHRmmkAAFZ1472.png",
 	"//i1.Yongche.name/media/g2/M01/1A/19/rBEBJVoiePSIA11WAABdyPvrzIYAAKRaQHR8N4AAF3g619.png",
 	"//i3.Yongche.name/media/g2/M04/1A/19/rBEBP1oiePSIbuiNAADAiEvDveQAAKRZwKbX5QAAMCg925.png"],
prizeArr:[
	{
		blue:"//i1.Yongche.name/media/g2/M03/1A/1B/rBEBP1okuOCIW-x-AAA7KC5mkCMAAKSFQGFpG8AADtA510.png",
		red:"//i3.Yongche.name/media/g2/M04/1A/1B/rBEBJVokuOCIfaJHAABOPy8Z2FwAAKSEAP_m7cAAE5X359.png"
	},
	{
		blue:"//i2.Yongche.name/media/g2/M02/1A/19/rBEBJVoiewOITn9fAAA8aqWUuRYAAKRaANpXDMAADyC297.png",
		red:"//i3.Yongche.name/media/g2/M04/1A/19/rBEBP1oiewOIL28oAABRTPvt19sAAKRZwOT_5UAAFFk231.png"
	},
	{
		blue:"//i3.Yongche.name/media/g2/M04/1A/1D/rBEBP1omFeaIVF1zAAClI_muiLsAAKSsAJTODIAAKU7890.png",
		red:"//i1.Yongche.name/media/g2/M03/1A/1D/rBEBP1omFeaIXyEPAADcj6QdeXcAAKSsQCZZRgAANyn258.png"
	},
	{
		blue:"//i2.Yongche.name/media/g2/M04/1A/19/rBEBP1oiemCIPAttAAA8cU12gvMAAKRZwLFTt0AADyJ825.png",
		red:"//i3.Yongche.name/media/g2/M01/1A/19/rBEBJVoiemCIehtQAABQqpZw4PYAAKRaQIRElQAAFDC138.png"
	},
	{
		blue:"//i2.Yongche.name/media/g2/M04/1A/1D/rBEBJVomFeaILXQmAAA89C3E1sUAAKSsAJS-yYAAD0M071.png",
		red:"//i2.Yongche.name/media/g2/M03/1A/1D/rBEBJVomFeaIIUB6AADdrSjlhYoAAKSsQCYh1MAAN3F893.png"
	},
	{
		blue:"//i3.Yongche.name/media/g2/M04/1A/1D/rBEBP1omFeaIYqegAAA8D_k4dT8AAKSsAJSvv8AADwn670.png",
		red:"//i1.Yongche.name/media/g2/M03/1A/1D/rBEBP1omFeaIdh_9AADjzwJRr4sAAKSsQCXo2wAAOPn502.png"
	}
],






						<div class="prize" :class="{'prize-bottom':index>=3}"  v-for="(prize,index) in prizeArr">
							<img v-show="currentIdx!=(5-index)" :src="prize.blue" width="100%" height="100%"/>
							<img v-show="currentIdx===(5-index)" :src="prize.red" width="100%" height="100%"/>
						</div>
						
						