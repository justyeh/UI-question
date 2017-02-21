var logData = [];

Page({
	data: {
		restNum: 200,
		imgs: []
	},
	handleTextareaInput: function(e) {
		this.setData({
			restNum: 200 - e.detail.value.length
		});
	},
	uploadFile: function() {
		var _this = this;
		wx.showActionSheet({
			itemList: ['从相册中选择', '拍照'],
			itemColor: "#18b7ee",
			success: function(res) {
				if (!res.cancel) {
					if (res.tapIndex == 0) {
						_this.chooseWxImage('album')
					} else if (res.tapIndex == 1) {
						_this.chooseWxImage('camera')
					}
				}
			}
		})
	},
	chooseWxImage: function(type) {
		var _this = this;
		wx.chooseImage({
			count: 1, // 默认9
			sizeType: ['original', 'compressed'],
			sourceType: [type],
			success: function(res) {
				var imgsArr = _this.data.imgs;
				imgsArr.push(res.tempFilePaths[0]);

				_this.setData({
					imgs: imgsArr
				})
			}
		})
	},
	handleFormSubmit: function() {
		if (this.data.restNum == 200) {
			wx.showToast({
				title: '请填写内容',
				icon: 'success',
				duration: 2000
			})
			return
		}
		wx.showModal({
			title: '提示',
			content: '是否提交您的问题',
			cancelColor:"#666",
			confirmColor:'#17b6ed',
			duration: 2000,
			success: function() {
				//提交表单
				var formData = {
					uid: util.getUserID(),
					user_name: e.detail.value.nick_name,
					baby_sex: e.detail.value.baby_sex,
					baby_age: e.detail.value.baby_age
				}
				console.log(formData)
				app.apiFunc.upload_file(app.apiUrl.modify_user, this.data.logo, 'photos', formData,
					function(res) {
						console.log(res);
					},
					function() {})
			}
		});
	},
	upload_file: function(url, filePath, name, formData, success, fail) {
		console.log('a=' + filePath)
		wx.uploadFile({
			url: rootUrl + url,
			filePath: filePath,
			name: name,
			header: {
				'content-type': 'multipart/form-data'
			}, // 设置请求的 header
			formData: formData, // HTTP 请求中其他额外的 form data
			success: function(res) {
				console.log(res);
				if (res.statusCode == 200 && !res.data.result_code) {
					typeof success == "function" && success(res.data);
				} else {
					typeof fail == "function" && fail(res);
				}
			},
			fail: function(res) {
				console.log(res);
				typeof fail == "function" && fail(res);
			}
		})
	}
});