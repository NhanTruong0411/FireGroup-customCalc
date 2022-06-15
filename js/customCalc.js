myFunction = () => {
  // lấy element từ ô input và message-errors
  let input = document.getElementById("myInput").value;
  let messageText = document.getElementById('message-error');
  let resultDiv = document.getElementById('result');
  let result = {};
  // check input rỗng
  if (!input) {
    messageText.innerHTML = "This field is required !";
    messageText.style.visibility = "visible";
  // input không rỗng
  } else {
    messageText.style.visibility = "hidden";
    // check các giá trị trong input có phải là number ko?
    let arrayInput = input.split(',').map(Number);
    for(let i=0; i<arrayInput.length; i++) {
      if(isNaN(arrayInput[i])) {
        messageText.innerHTML = "This field must be a NUMBER and separate by a comma !";
        messageText.style.visibility = "visible";
        break;
      } 
    }
    result = customCalc(arrayInput);
    resultDiv.innerHTML = `{ max: ${result.max}, min: ${result.min}, avg: ${result.avg}, sum: ${result.sum} }`
  }
}

customCalc = (arrayInput) => {
  let max = Math.max(...arrayInput);
  let min = Math.min(...arrayInput);
  let sum = arrayInput.reduce((sum,v) => sum += v, 0);
  let avg = sum/arrayInput.length;
  return result = {max, min, avg, sum};
}

myReset = () => {
  document.getElementById("myInput").value = "";
}
