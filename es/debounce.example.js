import debounce from "../debounce.js";

let nsend = 0;
const send = () => {
  console.log("send", nsend++);
};

let n = 0;
const f = debounce(send, 200); // 0.2秒呼ばれなければsend
//const f = debounce(send, 200, { maxWait: 300 }); // 0.2秒呼ばれなければsend ただし、1秒に1度はsend
setInterval(() => {
  if (n++ % 10 < 9) {
    f(); 
    console.log("d", n);
  } else {
    console.log("-", n);
  }
}, 110);
