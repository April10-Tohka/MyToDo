//返回三月14日星期四格式的时间
export function formatDate(date) {
    const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];

    return `${month}${day}日${dayOfWeek}`;
}
