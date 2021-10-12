const firstGen = [
    {
        name: "Queen Elizabeth",
        parents: [],
               
    
},
    {
        name: "King George VI",
        parents: [],
      
    
},

];

const secGen = [
    {
        name: "Queen Elizabeth II",
        parents: [firstGen[0].name, firstGen[1].name],
        childOf: firstGen[0].name + " & " + firstGen[1].name,
        
    },
    {
        name: "Princess Margaret",
        parents: [firstGen[0].name, firstGen[1].name],
        childOf: firstGen[0].name + " & " + firstGen[1].name,
    },
    {
        name: "Prince Phillip",
        parents: [],
        
    
},
];

const thirdGen = [
    {
        name: "Diana",
    },
    {},
    {},
];

