// JS by Dan Høegh
// UCN MMD 2021

// let sager = "mig mig mig";
// let andresager = "dig dig dig"
// let elmOutput = document.querySelector("#output")
// elmOutput.innerHTML = "Det eneste jeg tænker på " + sager;
// elmOutput.innerHTML +=  ` <p> Det andet jeg tænker på er ${andresager}</p>`;



// let personer = [
//     {
//         name: "Dan",
//         age: 49,
//         kids: [
//             {
//                 name: "Emlie",
//                 age: 24
//             },
//             {
//                 name: "Magnus",
//                 age: 21
//             }
//         ]
//     }
// ];

//     console.log(personer[0].kids[1].age);


const personer = [
    {
        name: "Robinson Martin",
        age: "71",
        isAlive: true
    },
    {
        name: "X-Factor Martin",
        age: "22",
        isAlive: true
    },
    {
        name: "DJ Martin",
        age: "27",
        isAlive: false
    },
    {
        name: "Spilmester Martin",
        age: "37",
        isAlive: true
    }

];

// Her er det smart at bruge tal men som udgangspunkt er denne for-loop udfaset/gammeltdags
let elmTable = document.querySelector("#outputTbl");
for (let i = 0; i < personer.length; i++) {
    let item = personer[i];
    let isAliveText = item.isAlive ? "Levende" : "Død"; 
    let htmlOutput = `
    <tr>
        <td>${item.name}</td>
        <td>${item.age} år</td>
        <td>Status: ${isAliveText} </td>
    </tr>
        `;
    elmTable.innerHTML += htmlOutput;
    console.log(item.name);
}



// forEach er den nye metode der bruger loop uden du bruger .length
let elmTblForEach = document.querySelector("#outputTblForEach");
personer.forEach((person) => {
    let isAliveText = person.isAlive ? "Levende" : "Død"; 
    let htmlOutput = `
    <tr>
        <td>${person.name}</td>
        <td>${person.age} år</td>
        <td>Status: ${isAliveText} </td>
    </tr>
        `;
    elmTblForEach.innerHTML += htmlOutput;
    

});


