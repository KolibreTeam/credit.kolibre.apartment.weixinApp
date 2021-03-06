// pages/user/detail.js
const app = getApp();
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
        if (options.key == "editorMobile2") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "editorMobile2.html"
            });
        }
        else if (options.key == "credit") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "credit.html"
            });
        }
        else if (options.key == "photo") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "photo.html"
            });
        }
        else if (options.key == "resetPassword") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "resetPassword.html"
            });
        }
        else if (options.key == "verify") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "verify.html"
            });
        }
        else if (options.key == "editorMobile") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "editorMobile.html"
            });
        }
        else if (options.key == "reserve") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "reserve.html"
            });
        }
        else if (options.key == "xcxtest") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "xcxtest.html"
            });
        }
        else if (options.key == "login") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "cookie.html?sync=login&X-KC-SID=" + app.getStorageSync("X-KC-SID")
            });
        }
        else if (options.key == "logout") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "cookie.html?sync=logout"
            });
        }
        else if (options.key == "tuikuan") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "settlement.html"
            });
        }
        else if (options.key == "waterElectricity") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "waterElectricity.html"
            });
        }
        else if (options.key == "gateLock") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "gateLock.html"
            });
        }
        else if (options.key == "invoice") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "invoiceList.html"
            });
        }
        else if (options.key == "favor") {
            this.setData({
                detailWebAppUrl: app.baseUrl + "favorites.html"
            });
        }
    }
})