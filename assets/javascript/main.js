// JAVASCRIPT //

console.log("YDD");

/*
Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
trasformare la stringa foto in una immagine effettiva

BONUS 2:
organizzare i singoli membri in card/schede

*/

//array
// const team =
// [
//     {
//       name: 'Wayne Barnett',
//       role: 'Founder & CEO',
//       image: 'wayne-barnett-founder-ceo.jpg',
//     },
//     {
//       name: 'Angela Caroll',
//       role: 'Chief Editor',
//       image: 'angela-caroll-chief-editor.jpg',
//     },
//     {
//       name: 'Walter Gordon',
//       role: 'Office Manager',
//       image: 'walter-gordon-office-manager.jpg',
//     },
//     {
//       name: 'Angela Lopez',
//       role: 'Social Media Manager',
//       image: 'angela-lopez-social-media-manager.jpg',
//     },
//     {
//       name: 'Scott Estrada',
//       role: 'Developer',
//       image: 'scott-estrada-developer.jpg',
//     },
//     {
//       name: 'Barbara Ramos',
//       role: 'Graphic Designer',
//       image: 'barbara-ramos-graphic-designer.jpg',
//     },
// ];


const team =
[
    {
      name: 'Toto1',
      role: 'Founder & CEO',
      image: '../img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Toto2',
      role: 'Chief Editor',
      image: '../img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Toto3',
      role: 'Office Manager',
      image: '../img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Toto4',
      role: 'Social Media Manager',
      image: '../img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Toto5',
      role: 'Developer',
      image: '../img/scott-estrada-developer.jpg',
    },
    {
      name: 'Toto6',
      role: 'Graphic Designer',
      image: '../img/barbara-ramos-graphic-designer.jpg',
    },
];


//Stampa su console
for(let i=0; i<team.length; i++)
{
    console.log(team[i].name)
    console.log(team[i].role)
    console.log(team[i].image)
    console.log("")
}





























// ----- FINE :) -----