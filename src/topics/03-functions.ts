function addNUmbers( a: number, b:number){
   return a+b;
}

const addNumbersArrow= (a: number, b:number):String => {
    return `${a+b}`;
}

function multiplay(firstNumber: number, secondNumber?: number, base:number=2){
    return firstNumber*base;
}


// const result: number= addNUmbers(1,2);
// const result2: String= addNumbersArrow(1,2);
// const multiplayResult: number= multiplay(5);

// console.log({result, result2, multiplayResult});

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter=(character: Character, amount:number ) => {
    character.hp += amount;
}

const strider: Character={
    name: 'Strider',
    hp: 50,
    showHp(){
        // console.log('Puntos de vida:', this.hp);
        console.log(`Puntos de vida: ${this.hp}`);
    }
};

healCharacter(strider, 10);
healCharacter(strider, 50);
strider.showHp();


export{};