String.prototype.shuffle = function (n) {
  let arr = this.split(""),
    char = " ";

  while (n--) {
    arr.splice(Math.floor(Math.random() * (arr.length + 1)), 0, char);
  }

  return arr.join("");
}; //shuffle

function generate(value) {
  let textarea = document.getElementById("textareaID");
  let input = document.getElementById("inputID");
  let text = textarea.value;
  let key = input.value;
  let output = document.getElementById("output_textareaID");
  if (value) {
    output.value = CryptoJS.AES.encrypt(text, key).toString().shuffle(100);
  } else {
    let bytes = CryptoJS.AES.decrypt(text.replace(/ /g, ""), key);
    output.value = bytes.toString(CryptoJS.enc.Utf8);
  }
}

// function downloadGenerated() {
//   let output_text = "";
//   let textarea = document.getElementById("textareaID");
//   let input = document.getElementById("inputID");
//   let text = textarea.value;
//   let key = input.value;
//   let output = document.getElementById("output_textareaID");
//   if (value) {
//     output_text = CryptoJS.AES.encrypt(text, key).toString().shuffle(100);
//   } else {
//     let bytes = CryptoJS.AES.decrypt(text.replace(/ /g, ""), key);
//     output_text = bytes.toString(CryptoJS.enc.Utf8);
//   }

//   let link = document.createElement("a");
//   // If you don't know the name or want to use
//   // the webserver default set name = ''
//   let name = getRandomFileName();
//   link.setAttribute("download", name);
//   link.href = uri;
//   document.body.appendChild(link);
//   link.click();
//   link.remove();
// }

function getRandomFileName() {
  let timestamp = new Date().toISOString().replace(/[-:.]/g, "");
  let random = ("" + Math.random()).substring(2, 8);
  let random_number = timestamp + random;
  return random_number;
}
