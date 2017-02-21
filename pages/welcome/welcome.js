// pages/welcome/welcome.js
Page({
  data:{
    teaList:[]
  },
  onLoad:function(options){
    let arrList = [];
    for(let i=0;i<12;i++){
      arrList[i] = 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png?t=2017213';
    }
    this.setData({
      teaList:arrList
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})