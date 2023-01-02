// var now=new Date;
// function createtime(){
//     now.setTime(now.getTime()+1e3);
//     var e=new Date("08/14/2022 00:00:00"),
//         t=Math.trunc(234e8+(now-e)/1e3*17),
//         a=(t/1496e5).toFixed(6),
//         o=new Date("08/14/2022 00:00:00"),
//         n=(now-o)/1e3/60/60/24,r=Math.floor(n),
//         i=(now-o)/1e3/60/60-24*r,s=Math.floor(i);
//     1==String(s).length&&(s="0"+s);
//     var d=(now-o)/1e3/60-1440*r-60*s,l=Math.floor(d);
//     1==String(l).length&&(l="0"+l);
//     var g=(now-o)/1e3-86400*r-3600*s-60*l,
//         b=Math.round(g);1==String(b).length&&(b="0"+b);let c="";
//     c = s < 18 && s >= 9 ? `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br>
// <div style="font-size:13px;font-weight:bold">
//     小破站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒
//     <i id="heartbeat" class='fas fa-heartbeat'></i>
//     <br>
//     🌠目前距离🌏 ${t} 千米，约为 ${a} 个天文单位🚀
// </div>
// ` : `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'>
//     <br>
// <div style="font-size:13px;font-weight:bold">
//     小破站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i>
//     <br>
//     🌠目前距离🌏 ${t} 千米，约为 ${a} 个天文单位🚀
// </div>
// `, document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = c);
// }
// setInterval((() => {
//     createtime()
// }), 1e3);
var now = new Date();
function createtime() {
    var grt = new Date("08/14/2022 00:00:00");
    now.setTime(now.getTime() + 250);
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum).length && (hnum = "0" + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum).length && (mnum = "0" + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum).length && (snum = "0" + snum);
    let currentTimeHtml = "";
    (currentTimeHtml =
        hnum < 18 && hnum >= 9
            ? `上班摸鱼中...<img class='boardsign' src='/images/svg/棒棒糖.svg' title='距离月入25k也就还差一个大佬带我~' height="20"><span class='textTip'> <br> 小破站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
            : `下班休息中...<img class='boardsign' src='/images/svg/心跳.svg' title='距离月入25k也就还差一个大佬带我~' height="20"><span class='textTip'><br> 小破站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`),
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
setInterval(() => {
    createtime();
}, 250);
