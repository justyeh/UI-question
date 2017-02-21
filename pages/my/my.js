var cfg = require('../../utils/cfg');

Page({
	data: {
		isLoading: true,
		questionList: []
	},
	goDetail: function(event) {
		wx.navigateTo({
			url: '/pages/replyMng/replyMng'
		})
	},
	onLoad: function(options) {
		/*wx.setNavigationBarTitle({
			title: options.type === 'question' ? '我的提问' : '我的回复',
		})*/
		var _self = this;
		wx.request({
			url: cfg.api.host + 'topics',
			header: {
				'content-type': 'application/json'
			},
			success: function(res) {
				//console.log(res)
				_self.setData({
					isLoading: false,
					questionList: res.data.data
				})
			}
		});
	}
})