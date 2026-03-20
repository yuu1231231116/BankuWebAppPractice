const mydataname = localStorage.getItem("key");
document.getElementById("valuename1").textContent =
  mydataname + "さんの口座ページです";
let NumberSave = [];
for (let i = 1; i <= 10; i++) {
  const randomNunber = Math.floor(Math.random() * 10);
  NumberSave.push(randomNunber);
}
const str = NumberSave.join(""); //この先でハイフンを入れたいから文字列に変換（""）で文字列に変換できる
const result = str.slice(0, 5) + "-" + str.slice(5);
document.getElementById("AccountNumber").textContent = result;
const mydata = localStorage.getItem("value");
document.getElementById("value1").textContent = "￥" + mydata + "円です！";
