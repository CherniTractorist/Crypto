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

const text = TEXT.toLocaleLowerCase(),
  keyName = "maxim",
  keySurname = "manuilov",
  keyNameArr = [2,0,4,1,3 ],
  keySurnameArr = [3, 0, 4, 6, 1, 2, 5, 7],
  ROWS = keyName.length,
  COLUMS = keySurname.length;

let matrixText = [],
  entable = [];

function multiplyPermutationsEncrypt() {
  let textIndex = 0;
  for (let i = 0; i < ROWS; i++) {
    matrixText[i] = [];
    for (let j = 0; j < COLUMS; j++) {
      if (text[textIndex]) {
        matrixText[i][j] = text[textIndex++];
      }
    }
  }

  let timeStart = performance.now();
  ///////////////////////     START     ///////////////////////
  for (let i = 0; i < ROWS; i++) {
    entable[i] = [];
    for (let j = 0; j < COLUMS; j++) {
      entable[i][j] =
        matrixText[keyNameArr.indexOf(i)][keySurnameArr.indexOf(j)];
    }
  }
  ///////////////////////     FINISH     ///////////////////////
  let timeFinish = performance.now();

  document.querySelector(".encryptTime").innerHTML +=
    timeFinish - timeStart + " мс";

  document.querySelector(".tableInput").innerHTML += printMatrix(matrixText);
  document.querySelector(".tableInput2").innerHTML += printMatrix(entable);

  return entable.flat().join("");
}

function multiplyPermutationsDecrypt(text) {
  let textIndex = 0;
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMS; j++) {
      if (text[textIndex]) {
        matrixText[i][j] = text[textIndex++];
      }
    }
  }

  let timeStart = performance.now();

  ///////////////////////     START     ///////////////////////
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMS; j++) {
      entable[i][j] = matrixText[keyNameArr[i]][keySurnameArr[j]];
    }
  }
  ///////////////////////     FINISH     ///////////////////////
  let timeFinish = performance.now();

  document.querySelector(".decryptTime").innerHTML +=
    timeFinish - timeStart + " мс";
  return entable.flat().join("");
}

let encryptText = multiplyPermutationsEncrypt();
let decryptText = multiplyPermutationsDecrypt(encryptText);

makeChart("encryptChart", encryptText);
makeChart("decryptChart", decryptText);

document.querySelector(".encrypt").innerHTML = encryptText;
document.querySelector(".decrypt").innerHTML = decryptText;

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
      str.split(letter).length == 1
        ? 0
        : ((str.split(letter).length - 1) / str.length).toFixed(4);
  });
  console.log(letters);
  return letters;
}
