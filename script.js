function total() {
  var eng = parseInt(document.getElementById("eng").value);
  var maths = parseInt(document.getElementById("maths").value);
  var sci = parseInt(document.getElementById("sci").value);
  var soc = parseInt(document.getElementById("soc").value);
  var lang = parseInt(document.getElementById("lang").value);

  if (eng > 100 || maths > 100 || sci > 100 || soc > 100 || lang > 100) {
    alert("Please enter correct marks");
  } else {
    var total = eng + maths + sci + soc + lang;
    document.getElementById("tot").innerHTML =
      "English:" +
      eng +
      "<br> Maths:" +
      maths +
      "<br> Science:" +
      sci +
      "<br> Social:" +
      soc +
      "<br> Language:" +
      lang +
      "<br> ______________<br> Total: " +
      total;
  }
  console.log(total);
}

function Average() {
  var eng = parseInt(document.getElementById("eng").value);
  var maths = parseInt(document.getElementById("maths").value);
  var sci = parseInt(document.getElementById("sci").value);
  var soc = parseInt(document.getElementById("soc").value);
  var lang = parseInt(document.getElementById("lang").value);

  if (eng > 100 || maths > 100 || sci > 100 || soc > 100 || lang > 100) {
    alert("Please enter correct marks");
  } else {
    var total = eng + maths + sci + soc + lang;
    var Avg = total / 5;
    document.getElementById("avg").innerHTML = "Your average marks: " + Avg;
  }
}

function grade() {
  var eng = parseInt(document.getElementById("eng").value);
  var maths = parseInt(document.getElementById("maths").value);
  var sci = parseInt(document.getElementById("sci").value);
  var soc = parseInt(document.getElementById("soc").value);
  var lang = parseInt(document.getElementById("lang").value);

  if (eng > 100 || maths > 100 || sci > 100 || soc > 100 || lang > 100) {
    alert("Please enter correct marks");
  } else {
    var total = eng + maths + sci + soc + lang;
    var Avg = total / 5;

    if (Avg >= 80 && Avg <= 100) {
      document.getElementById("grade").innerHTML = "Your grade is S";
    } else if (Avg >= 70 && Avg < 80) {
      document.getElementById("grade").innerHTML = "Your grade is A";
    } else if (Avg >= 65 && Avg < 70) {
      document.getElementById("grade").innerHTML = "Your grade is B";
    } else if (Avg >= 50 && Avg < 65) {
      document.getElementById("grade").innerHTML = "Your grade is C";
    } else if (Avg >= 45 && Avg < 50) {
      document.getElementById("grade").innerHTML = "Your grade is D";
    } else {
      document.getElementById("grade").innerHTML = "Your grade is F";
    }
  }
}
