// ============================
//      Objekte-Level-1_2
// ============================
console.log("%c=====Objekte-Level-1_2=====", "color:yellowgreen");
let person = {
  name: "Runhong",
  age: 37,
};
const sagNameAlter = () => {
  alert(
    `Hallo, Mein Name ist ${person.name} und ich bin ${person.age} Jahre alt.`
  );
};
console.log(person.name);
console.log(person.age);
// sagNameAlter();

// ============================
//      Objekte-Level-1_4
// ============================
console.log("%c=====Objekte-Level-1_4=====", "color:yellowgreen");
let unsereHaustiere = [
  {
    tiertyp: "Katze",
    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);
unsereHaustiere[1].names = ["Balu", "Snoopy"];
console.log(unsereHaustiere[1].names);

// ============================
//      Objekte-Level-1_5
// ============================
console.log("%c=====Objekte-Level-1_5=====", "color:yellowgreen");
let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Untere Schublade"]);

// ============================
//      Objekte-Level-1_7
// ============================
console.log("%c=====Objekte-Level-1_7=====", "color:yellowgreen");

let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

myMusic.forEach((music) => {
  document.write(
    music.artist +
      "<br>" +
      music.title +
      "<br>" +
      music.medium +
      "<br>" +
      "<br>"
  );
  if (music.release_year < 1975) {
    console.log(music);
  }
});

// ============================
//      Objekte-Level-1_8
// ============================
console.log("%c=====Objekte-Level-1_8=====", "color:yellowgreen");
let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];
console.log(studentData);
studentData.forEach((student) => {
  console.log(student.name);
  console.log(student.coop);
  console.log(student.address.city);
  console.log(student.emails);
});
