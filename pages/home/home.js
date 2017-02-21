// pages/index/index.js
var cgf = require('../../utils/cfg')
Page({
  data: {
    hasQuestion: false,
    hasNewMsg: {
      question: false,
      ask: true
    }
  },
  //页面加载
  onLoad: function(options) {

    /*var slideDots = [];
    this.data.imgUrls.forEach((item,index)=>{
      var flag = index === 0 ? true : false;
      slideDots.push({
        act: flag
      });
    })
    this.setData({
      swiper:cgf.swiperCfg,
      slideDots
    })

    var self = this;
    this.setData({
      welcomeImg:'https://img6.bdstatic.com/img/image/pcindex/PC112.jpg'
    });
    wx.getSystemInfo({
      success: function(res) {
          self.setData({
               windowHeight:res.windowHeight
          })
      }
    });*/
  },
  //渲染完成
  onReady: function() {
    /*var animation = wx.createAnimation({
      duration: 500,
      delay:2000,
      timingFunction: 'ease'
    })
    animation.opacity(0).step();
    this.setData({
        fadeOut:animation,
    })
    setTimeout(function(){
      this.setData({
        isWelcome:false
        //更改颜色navigationBarBackgroundColor：#65b1ec
      })
    }.bind(this),2500);*/

  },
  //修复自带swiper组件不能设置dot颜色的bug
  swiperChange: function(event) {
    var slideDots = this.data.slideDots;
    slideDots.forEach((item, index) => {
      item.act = event.detail.current === index ? true : false
    })
    this.setData({
      slideDots
    })
  }
})