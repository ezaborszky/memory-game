const cards = document.querySelectorAll('[data-card]')
console.log(cards)
const resetButton = document.getElementById('reset')
let temp = 0;
let memory;
let node;
let idMemory;


function shuffle() {
    const shuffledList = []
    for(let i = 0; i < 12;) {

    let number = Math.floor(Math.random()*6)+1  ;
        if (shuffledList.filter(x => x===number).length < 2) {
            console.log(number)
            shuffledList.push(number)
            i++;
        }
    }

    return shuffledList

}



let shuffledList = shuffle();

console.log(shuffledList);


function assing(shuffledList) {
[...cards].forEach(card => {

    switch(shuffledList[0   ]){
        case 1 : 
            card.classList.add('one');
            break;
        case 2 :
            card.classList.add('two');
            break;
        case 3 :
            card.classList.add('three');
            break;
        case 4 :
            card.classList.add('four');
            break;
        case 5 :
            card.classList.add('five');
            break;
        case 6 :
            card.classList.add('six');
            break;    
        }
    shuffledList.shift();
})}

assing(shuffledList);

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        
        if(temp < 2){
            e.target.classList.add('revealed')
            if(temp === 0) {
                memory = e.target.classList[1]
                node = e.target;
                idMemory = e.target.id; 
                } else if(temp === 1) {
                    if(e.target.classList[1] === memory && e.target.id !== idMemory) {
                        e.target.classList.add('solved')
                        node.classList.add('solved')
                    }
                }
            
            temp++
        } else {
            cards.forEach(card => card.classList.remove('revealed'))
            node = undefined;
            temp = 0;
            idMemory = undefined;
        }
    
        console.log(temp)
    }
    )

})

resetButton.addEventListener('click', () => {
    cards.forEach(card => {
        card.classList.remove('solved')
        card.classList.remove('revealed')
        card.classList.remove(card.classList[1]) 
        
    })
    temp = 0;
    memory = undefined;
    node = undefined;
    idMemory = undefined;
    let shuffledList = shuffle();
    assing(shuffledList);
    console.log(shuffledList);
})
