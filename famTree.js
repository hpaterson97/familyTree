
class ftConstruct {
    constructor (name, parent1, parent2) {
        this.name = name;
        this.parents = [parent1, parent2];

    }
    childOf(){
        
        if (typeof this.parents[0] != 'undefined'){ //if parent1 and parent2 have been defined when creating new object then this function will return the following statement
            return this.name + ' is a child of ' + this.parents.join(' & ');
        }
        else{
            return "Parents have not been defined" //if an object has been created but has not been given defined parents then this function will return this statement
        }
        
    }
}

const firstGen = [ //first generation array of objects
    new ftConstruct("King George VI"),
    new ftConstruct("Queen Elizabeth")
];
const secGen = [ //second generation array of objects
    new ftConstruct("Queen Elizabeth II", firstGen[0].name, firstGen[1].name),
    new ftConstruct("Princess Margaret", firstGen[0].name, firstGen[1].name),
    new ftConstruct("Prince Philip")
];
const thirdGen = [//third generation array of objects
    new ftConstruct("Prince Charles", secGen[0].name, secGen[2].name),
    new ftConstruct("Princess Anne", secGen[0].name, secGen[2].name),
    new ftConstruct("Prince Andrew", secGen[0].name, secGen[2].name),
    new ftConstruct("Prince Edward", secGen[0].name, secGen[2].name),
];
//console.log(thirdGen[2].childOf());
//module.exports = {firstGen, secGen, thirdGen};
module.exports = {ftConstruct};
