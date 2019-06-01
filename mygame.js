var cards = document.querySelectorAll(".Mcard");
var lock =false;
var open_cards=0;
var hasflipped = false;
var first,second;
var pscore=0;
 function flipCard() {
  if(lock) return;
  if(this === first) return;
   this.classList.toggle('flip');
   if(!hasflipped){
    hasflipped=true;
    first = this;
    return;
   }
      //hasflipped = false;
      second = this;
      checkmatch();
   
  }
function checkmatch(){
  if(first.dataset.framework === second.dataset.framework){
    open_cards+=2;
    pscore+=5;
    document.getElementById('score').innerHTML = "" + pscore;
    visible();
    if(open_cards === 16){
    alert("you won the game");
    reset();
  }
    }else{
      pscore-=1;
      document.getElementById('score').innerHTML = "" + pscore;
      close();
    }
}

function visible(){
  first.removeEventListener('click',flipCard);
  second.removeEventListener('click',flipCard);
  reset();
}
function close(){
  lock = true;
  setTimeout(()=>{
        first.classList.remove('flip');
        second.classList.remove('flip');
        lock = false;
        reset();
      }, 1000);

  
}
function reset() {
  [hasflipped, lock] = [false, false];
  [first, second] = [null, null];
}

(function shuffle(){
 cards.forEach(card =>{
  var position = Math.floor(Math.random() * 16);
  card.style.order = position;
 })
})();
// function shuffle()
// map=[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]
cards.forEach(card => card.addEventListener('click', flipCard));
