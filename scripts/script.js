function flames() {
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  var name1_arr = name1.split("");
  var name2_arr = name2.split("");

  for (var i = 0; i < name1_arr.length; i++) {
    for (var j = 0; j < name2_arr.length; j++) {
      if (name1_arr[i] == name2_arr[j]) {
        name1_arr.splice(i, 1);
        name2_arr.splice(j, 1);
        i--;
        break;
      }
    }
  }

  var count = name1_arr.length + name2_arr.length;
  var result = "";

  if (count == 0) {
    result = "Error: Names cannot be the same.";
  } else {
    var flames_arr = [
      "Friends",
      "Lovers",
      "Angry",
      "Married",
      "Engaged",
      "Siblings",
    ];

    while (flames_arr.length > 1) {
      var index = count % flames_arr.length;
      if (index == 0) {
        index = flames_arr.length;
      }
      flames_arr.splice(index - 1, 1);
    }

    result = flames_arr[0];
  }

  document.getElementById("result").value = result;
}
