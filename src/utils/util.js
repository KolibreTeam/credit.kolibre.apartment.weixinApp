function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function formatTime2(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return [year, month, day].map(formatNumber).join('-');
}

function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

function formatMonth(date) {
  return date.substring(5, 7);
}

module.exports = {
    formatTime: formatTime,
    formatTime2: formatTime2,
    formatMonth: formatMonth
};
