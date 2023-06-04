"use strict";

const TEXT = `
Natürlich! Hier ist ein Text auf Deutsch:

"Guten Tag! Ich hoffe, es geht Ihnen gut. Ich möchte Ihnen gerne ein bisschen über meine Erfahrungen erzählen. Vor einigen Jahren habe ich beschlossen, Deutsch zu lernen. Es war eine Herausforderung, aber auch eine lohnende Erfahrung.

Zu Beginn habe ich mich auf das Lernen der Grundlagen konzentriert - die Aussprache, die Grammatik und den Wortschatz. Ich habe viel Zeit damit verbracht, deutsche Bücher zu lesen, Filme anzuschauen und Podcasts zu hören, um mein Hörverständnis zu verbessern.

Nach einiger Zeit konnte ich einfache Gespräche auf Deutsch führen und mich in Alltagssituationen verständigen. Das hat mein Selbstvertrauen gestärkt und mich dazu ermutigt, weiterzumachen.

Ein wichtiger Teil meines Lernprozesses war auch der Besuch eines Deutschkurses. Die Möglichkeit, mit anderen Lernenden zu interagieren und von einem Lehrer zu lernen, hat mir sehr geholfen. Ich hatte auch die Gelegenheit, nach Deutschland zu reisen und die Sprache in der Praxis anzuwenden. Das war eine tolle Erfahrung und hat mir geholfen, meine Kenntnisse weiter zu verbessern.

Deutsch zu lernen hat mir nicht nur geholfen, eine neue Sprache zu beherrschen, sondern auch meine kulturelle Perspektive erweitert. Ich habe viel über die deutsche Kultur, Geschichte und Traditionen gelernt.

Wenn Sie daran interessiert sind, eine neue Sprache zu lernen, kann ich Deutsch auf jeden Fall empfehlen. Es mag zunächst schwierig erscheinen, aber mit der richtigen Motivation und einem strukturierten Lernansatz können Sie es schaffen.

Ich hoffe, dass Sie meine Erfahrungen inspirieren und ermutigen, Ihre eigenen Sprachlernziele zu verfolgen. Viel Erfolg dabei!"

Bitte beachten Sie, dass der obige Text 500 Zeichen enthält, aber nicht unbedingt 500 Wörter.
`;

//const ALPH = 'aäbcdefghijklmnoöpqrsßtuüvwxyz';
const ALPH = "abcdefghijklmnopqrstuvwxyzäöüß";

const LENGTH = TEXT.length;

let text = TEXT.toLowerCase();

const COLUMS = 10;

const ROWS = Math.ceil(LENGTH / COLUMS);

printHead();

//добавили недостаюшие символы до конца строки
const symbolsToAdd = COLUMS - (LENGTH % COLUMS);
for (let i = 0; i < symbolsToAdd; i++) {
  text += "*";
}

//сформировали массив
let c = 0;
let textArr = [];
for (let i = 0; i < ROWS; i++) {
  textArr[i] = [];
  for (let j = 0; j < COLUMS; j++) {
    textArr[i][j] = text.charAt(c++);
  }
}

document.querySelector(".tableInput").innerHTML += printMatrix(textArr);

//шифрование (обход массива зигзагом)
function encrypt(matrix) {
  let encryptMess = "";

  let even = true,
    odd = false;

  let timeStart = performance.now();
  ///////////////////////     START     ///////////////////////
  for (let i = 0; i < COLUMS; i++) {
    if (even) {
      for (let j = 0; j < ROWS; j++) {
        encryptMess += matrix[j][i];
      }
      even = false;
      odd = true;
      continue;
    }
    if (odd) {
      for (let j = ROWS - 1; j >= 0; j--) {
        encryptMess += matrix[j][i];
      }
      even = true;
      odd = false;
      continue;
    }
  }
  ///////////////////////     FINISH     ///////////////////////
  let timeFinish = performance.now();

  document.querySelector(".encryptTime").innerHTML +=
    timeFinish - timeStart + " мс";
  return encryptMess;
}

let encryptText = encrypt(textArr);
document.querySelector(".encrypt").innerHTML = encryptText;
makeChart("encryptChart", encryptText);

//расшифровка
function decrypt(encryptText) {
  let decryptArr = [];

  for (let i = 0; i < ROWS; i++) {
    decryptArr[i] = [];
  }

  let even = true,
    odd = false,
    encryptIndex = 0;

  let timeStart = performance.now();
  ///////////////////////     START     ///////////////////////
  for (let i = 0; i < COLUMS; i++) {
    if (even) {
      for (let j = 0; j < ROWS; j++) {
        decryptArr[j][i] = encryptText[encryptIndex++];
      }
      if (encryptText != encryptText.length) {
        even = false;
        odd = true;
        continue;
      } else {
        break;
      }
    }
    if (odd) {
      for (let j = ROWS - 1; j >= 0; j--) {
        decryptArr[j][i] = encryptText[encryptIndex++];
      }
      if (encryptText != encryptText.length) {
        even = true;
        odd = false;
        continue;
      } else {
        break;
      }
    }
  }

  ///////////////////////     FINISH     ///////////////////////
  let timeFinish = performance.now();

  return decryptArr;
}

let decryptText = decrypt(encryptText).flat().join("");
document.querySelector(".decrypt").innerHTML = decryptText;
makeChart("decryptChart", decryptText);

function printMatrix(matrix) {
  let result = "";
  for (let i = 0; i < matrix.length; i++) {
    result += `<tr>`;
    for (let j = 0; j < matrix[i].length; j++) {
      result += `<td>${matrix[i][j]}</td>`;
    }
    result += `</tr>`;
  }
  return result;
}

function printHead() {
  let result = "";
  for (let i = 0; i < COLUMS; i++) {
    result += `<th>${i}</th>`;
  }
  document.querySelector(".tableHeadInput").innerHTML = result;
}

function makeChart(id, text) {
  const alphArr = ALPH.split("");
  const data = Frequency(text, alphArr);

  new Chart(document.getElementById(id), {
    type: "bar",
    data: {
      labels: Object.keys(data),
      datasets: [
        {
          data: Object.values(data),
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: id,
      },
    },
  });
}

function Frequency(str, alph) {
  let letters = {};

  alph.forEach((letter) => {
    letters[letter] =
      str.split(letter).length > 0
        ? ((str.split(letter).length - 1) / str.length).toFixed(4)
        : 0;
  });

  console.log(letters);
  return letters;
}
