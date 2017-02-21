var cfg = require('../../utils/cfg');

Page({
  data: {
    hasAnswer:true,
    isLoading: true,
    questionList: [] 
  },
  goDetail: function(event) {
    wx.navigateTo({
      url: '/pages/detail/detail?topicId=' + event.currentTarget.id
    })
  },
  onLoad: function(options) {
    var _self = this;
    wx.request({
      url: cfg.api.host + 'topics',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        var questionList = res.data.data.slice(1,3); 
        for(var i=0;i<questionList.length;i++){
          questionList[i].showMore = false;
        }
        _self.setData({
          isLoading: false,
          questionList: questionList
        })
      }
    })
  },
  showMore:function(e){
    var questionList = this.data.questionList;
    questionList[e.currentTarget.dataset.index].showMore = true;
    this.setData({
      questionList
    })
  }
})