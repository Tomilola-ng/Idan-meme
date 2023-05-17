const jokes = [
    'Idan no dey wear jersey play ball,Idan dey wear anything',
    ' As my babe no value me again Shey I tell anybody? 💔😂, I chop am lowkey Idan no dey cry',
    'What God has joined together let no Idan put asunder',
    'If your phone no pass 200k I\'m sorry you no be idan oó',
    'Idan wey japa no dey find job, na job dey find Idan',
    'IF IDAN DEY ON COLOS IDAN NO FIT HIGH CAUSED IDAN NA THE MOST HIGH',
    'Idan no Dey call idan to come and eat again e get reason',
    'Idan no dey fail questions, except the question no correct',
    'Idan no dey go airport oo, Na pilot dey come house come pick idan.',
    'Idan for be bishop but idan no fit fast cuz idan must chop'
  ]

const btn = document.getElementById('btn');

function randomizeJokes() {
  joke = jokes[Math.floor(Math.random() * jokes.length)];
  return joke
}

btn.onclick = () => {
  let main_div = document.getElementById('meme-container');
  joke = randomizeJokes();
  main_div.innerText = joke;
}