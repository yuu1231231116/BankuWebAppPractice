function save() {
  const value = document.getElementById("data").value;

  if (balance) {
    localStorage.setItem("value", value);
    alert("残高を保存しました");
  }
}
function savename() {
  const valuename = document.getElementById("name").value;

  if (namedecision) {
    localStorage.setItem("key", valuename);
    alert("名前を保存しました");
  }
}

/*function savename(//名前のアラートとセット
      const namevalue = document.getElementById(name).value;
    if(namevalue){
            localStorage.setItem("name", value);
            alert("名前を保存しました");  
        }

    )*/
//電話番号はログイン後ユーザー情報で見れるようにしたいからまたあとで実装
