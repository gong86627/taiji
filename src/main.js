let html = document.querySelector("#html");
let style = document.querySelector("#style");
let str = `/*
*大家好，我是Harray
*接下来我要演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/**
 * 接下来我把div变成一个八卦图
 * 注意看好啦
 * 首先，把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.5);
    border:none;
}
/**
 * 八卦是阴阳两极的
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/**
 * 加两个风火轮
 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translate(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translate(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/**
 * 我们让太极动起来
 */
#div1{
  animation: rotate 3s linear infinite;
}
`;
let show_str = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (str[n] === "\n") {
      show_str += "<br>";
    } else if (str[n] == " ") {
      show_str += "&nbsp;";
    } else {
      show_str += str[n];
    }
    html.innerHTML = show_str;
    style.innerHTML = str.substr(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n + 1 < str.length) {
      n += 1;
      step();
    }
  }, 20);
};

step();
