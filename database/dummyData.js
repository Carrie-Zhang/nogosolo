/*
User table:
  name
  username
  password
  bio/description
  picture


Users_Events table
  username
  event id (string)
  date

Match table
  user1
  user2
  matchstatus
*/

const dummyData = [

// Allen Price
{
name: 'Allen Price',
username: 'hackerpirate',
password: 'hackreactor',
bio: "I am the leader of a band of puny giraffe pirates and I code on the side.",
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [10, 9, 52, 41]
},

// Beth Johnson
{
name: 'Beth Johnson',
username: 'theBeth',
password: 'bethcoin',
bio: "I like hugs.  I LUV hugs.  Please hug me",
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [10, 9, 52, 41]
},

// Doug Calhoun
{
name: 'Doug Calhoun',
username: 'hacker1',
password: 'hackreactor',
bio: "Come to office hours and hang out with me",
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [10, 9, 52, 41]
},

// Easak Hong
{
name: 'Easak Hong',
username: 'KoreanInCleveland',
password: 'creativePassword',
bio: "I have a mini-me named Kevin and I play fantasy football",
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [10, 9, 52, 41]
},

// Jae Lim
{
name: 'Jae Lim',
username: 'theNewGuy',
password: 'password1',
bio: "I'm a HIR at the pirate ship",
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [10, 9, 52, 41]
},

// Guillaume Choupeaux
{
name: 'Guillaume Choupeaux',
username: 'Gui',
password: 'cheeseandwine',
bio: "I am French and I work at Apple",
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [10, 9, 52, 41]
},

// Lam Bui
{
name: 'Lam Bui',
username: 'lamboozled',
password: '123456',
bio: "I do a great Louis Armstrong impersonation",
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [10, 9, 52, 41]
},

// Tiffany Pham
{
name: 'Tiffany Pham',
username: 'tiff',
password: 'abcdefg',
bio: 'I have snacks!',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [10, 9, 52, 41]
},

// Andrew Chalker
{
name: 'Andrew Chalker',
username: 'soccerpro1',
password: 'goawayKevin',
bio: 'I love lasagna',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 9, 5, 4]
},

// Andy Nguyen
{
name: 'Andy Nguyen',
username: 'keyboardmaster',
password: 'qwertydvorak',
bio: 'I am the termial wizard that makes your computer work',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 9, 5, 4]
},

// Angela Huang
{
name: 'Angela Huang',
username: 'googleswag',
password: 'angelsanddemons',
bio: 'I like to rub my fingers together',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 9, 5, 4]
},

// Aric Alves
{
name: 'Aric Alves',
username: 'AricnotEric',
password: 'rektatorbot',
bio: 'I climb and boulder and think toy problems have no constraints',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 2, 3, 4]
},

// Brian Pak
{
name: 'Brian Pak',
username: 'pacman',
password: 'wokawokawoka',
bio: 'Elevators hate me',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 2, 3, 4]
},

// Calvin Wong
{
name: 'Calvin Wong',
username: 'fantasyfootballgod',
password: 'allidoiswin',
bio: 'I know lots of fun things you can do with a lacrosse ball',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 2, 3, 4]
},

// Carrie Zhang
{
name: 'Carrie Zhang',
username: 'soreshoulders',
password: 'cookies',
bio: 'I like cookies.  Feed me cookies',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 2, 3, 4]
},

// Daniel London
{
name: 'Daniel London',
username: 'unknowntheory',
password: 'butIknow',
bio: 'I have a twin brother you might have seen somewhere',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 2, 3, 4]
},

// Ephraim Glick
{
name: 'Ephraim Glick',
username: 'thescottishdonut',
password: 'isnull',
bio: 'I am really tall',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 2, 3, 4]
},

// Jaqueline Leung
{
name: 'Jaqueline Leung',
username: 'wetsocks',
password: 'ohshit',
bio: 'Oh shit',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 2, 3, 4]
},

// Javier Enriquez
{
name: 'Javier Enriquez',
username: 'Javy',
password: 'lkjhg',
bio: 'Did you know cops can legally lie to you?',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [7, 2, 6, 4]
},

// Jennifer Shen
{
name: 'Jennifer Shen',
username: 'jenn',
password: 'abcde',
bio: 'I sometimes leave my phone in my pocket',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Justin Cruz
{
name: 'Justin Cruz',
username: 'iamascribe',
password: 'cowboycode',
bio: 'Prime D-Rose got nothing on me',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Kevin Fang
{
name: 'Kevin Fang',
username: 'iamnoteasak',
password: 'punchemintheface',
bio: 'I am not Easak.  I am not mini-me',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Kory Kilpatrick
{
name: 'Kory Kilpatrick',
username: 'riverrat',
password: 'poker',
bio: 'I only play for Bethcoin',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Kuyik Akpan
{
name: 'Kuyik Akpan',
username: 'kuyik',
password: 'a1b2c3',
bio: 'I did my project in backbone',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Michael Flis
{
name: 'Michael Flis',
username: 'bennyhill',
password: 'poiuy',
bio: 'Where did my car go?',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Michael Hernandez
{
name: 'Michael Hernandez',
username: 'mikehern',
password: 'hanabi',
bio: '1st turn invade Australia.  2nd turn win',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Nicholas Morrow
{
name: 'Nicholas Morrow',
username: 'nick',
password: 'cody',
bio: 'I like dogs',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Phoebe Mei
{
name: 'Phoebe Mei',
username: 'sk1',
password: 'faker',
bio: 'Do you even CSS?',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Rithnarin Kong
{
name: 'Rithnarin Kong',
username: 'evilspirit',
password: 'poetry',
bio: 'Shakespeare inspires me',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Sean Kang
{
name: 'Sean Kang',
username: 'sean',
password: 'rsefa',
bio: 'I like 떡볶이',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 6, 4]
},

// Vinoj Govinthasamy
{
name: 'Vinoj Govinthasamy',
username: 'vinoj',
password: 'zyxwv',
bio: 'Someday, terminators will take over the Earth.  I am working towards that day',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 3, 4]
},

// William Gross
{
name: 'William Gross',
username: 'rudyred',
password: 'hockey',
bio: 'Did you know you cant put 4 of the same characters in a row in a Roman Numeral?',
picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKuAAAAJDQxMDgwYWYwLTdjZmEtNDkwMy04NDAzLTU0MDQ2N2I1YTA4ZA.jpg',
events: [1, 2, 3, 4]
}
];

module.exports.dummyData = dummyData;
