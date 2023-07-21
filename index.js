const guessed = [
  {
    word: "Happy",
    hint: "Feeling joy or pleasure."
  },
  {
    word: "Sad",
    hint: "Feeling sorrow or unhappiness."
  },
  {
    word: "Big",
    hint: "Large in size."
  },
  {
    word: "Small",
    hint: "Not large, tiny."
  },
  {
    word: "Hot",
    hint: "High temperature."
  },
  {
    word: "Cold",
    hint: "Low temperature."
  },
  {
    word: "Fast",
    hint: "Quick or rapid."
  },
  {
    word: "Slow",
    hint: "Not fast, taking time."
  },
  {
    word: "Bright",
    hint: "Shining or full of light."
  },
  {
    word: "Dark",
    hint: "Lacking light, opposite of bright."
  },
  {
    word: "Kind",
    hint: "Showing compassion or goodwill."
  },
  {
    word: "Brave",
    hint: "Courageous or fearless."
  },
  {
    word: "Scared",
    hint: "Feeling fear or frightened."
  },
  {
    word: "Love",
    hint: "Strong affection or care."
  },
  {
    word: "Hate",
    hint: "Intense dislike or loathing."
  },
  {
    word: "Open",
    hint: "Not closed, accessible."
  },
  {
    word: "Close",
    hint: "Shut or near."
  },
  {
    word: "Friend",
    hint: "A person you like and trust."
  },
  {
    word: "Enemy",
    hint: "A person you oppose or dislike."
  },
  {
    word: "Quiet",
    hint: "Silent or calm."
  },
  {
    word: "Loud",
    hint: "Making a lot of noise."
  },
  {
    word: "Good",
    hint: "Morally right or excellent."
  },
  {
    word: "Bad",
    hint: "Morally wrong or inferior."
  },
  {
    word: "High",
    hint: "Elevated or tall."
  },
  {
    word: "Low",
    hint: "Not high, short or small in height."
  },
  {
    word: "Young",
    hint: "Not old, in the early stage of life."
  },
  {
    word: "Old",
    hint: "Aged, not young."
  },
  {
    word: "Rich",
    hint: "Having a lot of wealth or resources."
  },
  {
    word: "Poor",
    hint: "Lacking money or resources."
  },
  {
    word: "Happy",
    hint: "Feeling joy or pleasure."
  },
  {
    word: "Sad",
    hint: "Feeling sorrow or unhappiness."
  },
  {
    word: "Good",
    hint: "Morally right or excellent."
  },
  {
    word: "Bad",
    hint: "Morally wrong or inferior."
  },
  {
    word: "Right",
    hint: "Correct or accurate."
  },
  {
    word: "Wrong",
    hint: "Incorrect or mistaken."
  },
  {
    word: "Strong",
    hint: "Having great physical or mental power."
  },
  {
    word: "Weak",
    hint: "Lacking strength or power."
  },
  {
    word: "Brave",
    hint: "Courageous or fearless."
  },
  {
    word: "Coward",
    hint: "Someone who lacks bravery."
  },
  {
    word: "Love",
    hint: "Strong affection or care."
  },
  {
    word: "Hate",
    hint: "Intense dislike or loathing."
  },
  {
    word: "Open",
    hint: "Not closed, accessible."
  },
  {
    word: "Close",
    hint: "Shut or near."
  },
  {
    word: "Friend",
    hint: "A person you like and trust."
  },
  {
    word: "Enemy",
    hint: "A person you oppose or dislike."
  },
  {
    word: "Quiet",
    hint: "Silent or calm."
  },
  {
    word: "Loud",
    hint: "Making a lot of noise."
  },
  {
    word: "Kind",
    hint: "Showing compassion or goodwill."
  },
  {
    word: "Mean",
    hint: "Cruel or unkind."
  },
  {
    word: "Happy",
    hint: "Feeling joy or pleasure."
  },
  {
    word: "Sad",
    hint: "Feeling sorrow or unhappiness."
  },
  {
    word: "Good",
    hint: "Morally right or excellent."
  },
  {
    word: "Bad",
    hint: "Morally wrong or inferior."
  },
  {
    word: "High",
    hint: "Elevated or tall."
  },
  {
    word: "Low",
    hint: "Not high, short or small in height."
  },
  {
    word: "Wet",
    hint: "Moist or damp."
  },
  {
    word: "Dry",
    hint: "Lacking moisture or water."
  },
  {
    word: "Easy",
    hint: "Not difficult, simple."
  },
  {
    word: "Hard",
    hint: "Difficult or tough."
  },
  {
    word: "Fast",
    hint: "Quick or rapid."
  },
  {
    word: "Slow",
    hint: "Not fast, taking time."
  },
  {
    word: "Bright",
    hint: "Shining or full of light."
  },
  {
    word: "Dark",
    hint: "Lacking light, opposite of bright."
  },
  {
    word: "Big",
    hint: "Large in size."
  },
  {
    word: "Small",
    hint: "Not large, tiny."
  },
  {
    word: "Tall",
    hint: "Of great height."
  },
  {
    word: "Short",
    hint: "Not tall, of little height."
  },
  {
    word: "Happy",
    hint: "Feeling joy or pleasure."
  },
  {
    word: "Sad",
    hint: "Feeling sorrow or unhappiness."
  },
  {
    word: "Good",
    hint: "Morally right or excellent."
  },
  {
    word: "Bad",
    hint: "Morally wrong or inferior."
  },
  {
    word: "High",
    hint: "Elevated or tall."
  },
  {
    word: "Low",
    hint: "Not high, short or small in height."
  },
  {
    word: "Wet",
    hint: "Moist or damp."
  },
  {
    word: "Dry",
    hint: "Lacking moisture or water."
  },
  {
    word: "Easy",
    hint: "Not difficult, simple."
  },
  {
    word: "Hard",
    hint: "Difficult or tough."
  },
  {
    word: "Fast",
    hint: "Quick or rapid."
  },
  {
    word: "Slow",
    hint: "Not fast, taking time."
  },
  {
    word: "Bright",
    hint: "Shining or full of light."
  },
  {
    word: "Dark",
    hint: "Lacking light, opposite of bright."
  },
  {
    word: "Big",
    hint: "Large in size."
  },
  {
    word: "Small",
    hint: "Not large, tiny."
  },
  {
    word: "Tall",
    hint: "Of great height."
  },
  {
    word: "Short",
    hint: "Not tall, of little height."
  },
  {
    word: "Young",
    hint: "Not old, in the early stage of life."
  },
  {
    word: "Old",
    hint: "Aged, not young."
  },
  {
    word: "Rich",
    hint: "Having a lot of wealth or resources."
  },
  {
    word: "Poor",
    hint: "Lacking money or resources."
  },
  {
    word: "Strong",
    hint: "Having great physical or mental power."
  },
  {
    word: "Weak",
    hint: "Lacking strength or power."
  },
  {
    word: "Brave",
    hint: "Courageous or fearless."
  },
  {
    word: "Coward",
    hint: "Someone who lacks bravery."
  },
  {
    word: "Love",
    hint: "Strong affection or care."
  },
  {
    word: "Hate",
    hint: "Intense dislike or loathing."
  },
  {
    word: "Open",
    hint: "Not closed, accessible."
  },
  {
    word: "Close",
    hint: "Shut or near."
  },
  {
    word: "Friend",
    hint: "A person you like and trust."
  },
  {
    word: "Enemy",
    hint: "A person you oppose or dislike."
  },
  {
    word: "Quiet",
    hint: "Silent or calm."
  },
  {
    word: "Loud",
    hint: "Making a lot of noise."
  },
  {
    word: "Kind",
    hint: "Showing compassion or goodwill."
  }
];


let buttontext = Array.from(document.querySelectorAll('button'));
let b;
let number;
let arraylength = Number.parseInt(guessed.length);
let wordlength;
let wordgetting;
let wrongcount = 0;
let image = document.getElementById(`imagesource`);
let mainList = document.querySelector('.main');
let gettinghint = document.getElementById('hintstyping')
let maxwrongcount = 6;
let typing;
let forresultletter=[];
let gettingmessageloose  = document.getElementById(`last`)
let looseimg = document.getElementById(`img`)
let loosetext = document.getElementById(`loosetext`);
let clickedButtons = [];

gettingrandomwords();

function gettingrandomwords() {
  for (let i = 0; i < guessed.length; i++) {
    guessed[i].word = guessed[i].word.toUpperCase();
  }
  number = Math.floor(Math.random() * arraylength);
  const { word, hint } = guessed[number];
  
  wordgetting = word;
  gettinghint.innerText = hint;
  wordlength = word.length;
  mainList.innerHTML = '';

  for (let i = 0; i < wordlength; i++) {
    const liElement = document.createElement('li');
    liElement.className = 'list';
    liElement.textContent = '';
    mainList.appendChild(liElement);
  }

  wrongcount = 0;
  image.src = `images/hangman-${wrongcount}.svg`;
}

buttontext.forEach((button) => {
  button.addEventListener('click', function (e) {
    b = e.target.id;
    if (clickedButtons.includes(b)) {
      wrongcount++;

      image.src = `images/hangman-${wrongcount}.svg`;
      if (wrongcount === maxwrongcount) {
        loosetext.innerText = `YOU LOOSE!\nThe word was: ${wordgetting}`;
        gettingmessageloose.classList.add('op');
       
      }
      return; 
    }

    if (wordgetting.includes(b)) {
      const liElements = mainList.querySelectorAll('.list');
      for (let i = 0; i < wordlength; i++) {
        if (wordgetting[i] === b) {
          liElements[i].innerText = b;
          forresultletter.push(liElements[i]);
          clickedButtons.push(b);
        }
      }
      if (forresultletter.length === wordlength) {
        loosetext.innerText = `YOU WIN!`;
        gettingmessageloose.classList.add('op');
        looseimg.src = "winner/victory.gif" ;
      }


    } else{
      wrongcount++;

      image.src = `images/hangman-${wrongcount}.svg`;
      if (wrongcount === maxwrongcount) {
        loosetext.innerText = `YOU LOOSE!\nThe word was: ${wordgetting}`;
        gettingmessageloose.classList.add('op');
       
      }
    }
  });
});

// ...

function replay() {
  forresultletter = [];
  gettingrandomwords();
  gettingmessageloose.classList.remove('op');
  looseimg.src = "winner/lost.gif"
}

function chor(){
  alert(`yo`)
}
