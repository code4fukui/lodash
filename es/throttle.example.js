import throttle from "../throttle.js";

let nsend = 0;
const send = () => {
  console.log("send", nsend++);
};

//setInterval(send, 100);
setInterval(throttle(send, 1000), 10); // どんだけ呼ばれても1秒起き
