// pages/index/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailWebAppUrl: ""
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            detailWebAppUrl: "https://h.fengniaowu.com/detail2.html?roomId=" + options.roomId
        });
    }
})