  var instruments=['Guitar','Bass Guitar','Lead Guitar','Drums'];
  var musicians=['John Lennon,','Paul McCartney','George Harrison', 'Ringo Starr'];
  
function theBeatlesPlay(musicians,instruments){
  var empty =[]
  for (let i=0; i < musicians.length; i++)
  empty.push(musicians [i] + " plays " + instruments [i] )
return empty;
}

var facts=[
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
        ];
 
function johnLennonFacts(facts){
  var newFacts=[]
  let i=0
  while(i<=facts.length){
newFacts.push(johnLennonFacts(i)+"!!!")
  }
  return (newFacts[i])
  

        

}

  


// add solution here
