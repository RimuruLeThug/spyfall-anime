/* Spyfall Anime : cartes et tirage, partagés entre la page et l'API. */
(function (root) {
var ANIME = [
 {id:"csm",name:"Chainsaw Man",
  L:["L'Enfer","L'appartement d'Aki","Les bureaux de la Sécurité publique"],
  O:["La cordelette de Denji"],
  G:["La 4e section spéciale de la Sécurité publique"],
  P:["Denji", "Power", "Makima", "Aki Hayakawa", "Pochita"]},
 {id:"dn",name:"Death Note",
  L:["Le QG de la cellule d'enquête","Le monde des Shinigami","La chambre de Light"],
  O:["Le Death Note","Une pomme de Ryuk","Le paquet de chips"],
  G:["Les Shinigami"],
  P:["Light Yagami", "L", "Ryuk", "Misa Amane"]},
 {id:"ds",name:"Demon Slayer",
  L:["Le Train de l'Infini","Le Château Infini"],
  O:["Un sabre Nichirin","Le bambou de Nezuko","Le masque de sanglier d'Inosuke"],
  G:["Les Piliers","Les Lunes démoniaques"],
  P:["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira", "Kyojuro Rengoku", "Muzan Kibutsuji"]},
 {id:"db",name:"Dragon Ball",
  L:["La Kame House","La planète Namek","La Salle de l'esprit et du temps","Le Tournoi des Arts Martiaux"],
  O:["Les Dragon Balls","Un scouter","Le nuage magique","Les haricots magiques"],
  G:["Les Saiyans","Les Nameks","Le Commando Ginyu","L'Armée du Ruban Rouge"],
  P:["Son Goku", "Vegeta", "Piccolo", "Freezer", "Bulma", "Krilin"]},
 {id:"ft",name:"Fairy Tail",
  L:["La ville de Magnolia","L'île Tenrō"],
  O:["Les clés célestes de Lucy"],
  G:["La guilde Fairy Tail","Les Dragon Slayers"],
  P:["Natsu Dragneel", "Lucy Heartfilia", "Happy", "Erza Scarlett", "Grey Fullbuster"]},
 {id:"fma",name:"Fullmetal Alchemist",
  L:[],
  O:["La pierre philosophale","L'armure d'Alphonse","La montre d'Alchimiste d'État"],
  G:["Les Homonculus"],
  P:["Edward Elric", "Alphonse Elric", "Roy Mustang", "Winry Rockbell"]},
 {id:"hxh",name:"Hunter x Hunter",
  L:["L'examen de Hunter","Greed Island","La Tour Céleste","Yorknew City"],
  O:["La licence de Hunter","Les yeux écarlates"],
  G:["La Brigade fantôme","La famille Zoldyck","Les Fourmis-Chimères"],
  P:["Gon Freecss", "Killua Zoldyck", "Kurapika", "Hisoka", "Leorio"]},
 {id:"jjk",name:"Jujutsu Kaisen",
  L:["L'École d'exorcisme de Tokyo","Shibuya","Shinjuku"],
  O:["Un doigt de Sukuna","Le bandeau de Gojo"],
  G:["Le clan Zen'in","Les Fléaux"],
  P:["Yuji Itadori", "Satoru Gojo", "Megumi Fushiguro", "Nobara Kugisaki", "Ryomen Sukuna"]},
 {id:"mha",name:"My Hero Academia",
  L:["Le lycée Yuei"],
  O:[],
  G:["La Ligue des Super-vilains","La Seconde A"],
  P:["Izuku Midoriya", "All Might", "Katsuki Bakugo", "Shoto Todoroki"]},
 {id:"naruto",name:"Naruto",
  L:["Konoha","Ichiraku Ramen"],
  O:["Le bandeau frontal","Un kunai","Le Paradis du Batifolage"],
  G:["L'Akatsuki","L'Équipe 7"],
  P:["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake", "Itachi Uchiha"]},
 {id:"op",name:"One Piece",
  L:["Le Thousand Sunny","Marineford","Impel Down","Le pays des Wa"],
  O:["Le chapeau de paille","Un fruit du démon","Le One Piece","Un avis de recherche"],
  G:["L'équipage du Chapeau de paille","La Marine","Les Quatre Empereurs","Les Sept Grands Corsaires"],
  P:["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Sanji", "Tony Tony Chopper"]},
 {id:"opm",name:"One Punch Man",
  L:[],
  O:[],
  G:["La classe S"],
  P:["Saitama", "Genos", "Tatsumaki", "Garou"]},
 {id:"pkmn",name:"Pokémon",
  L:["Bourg Palette","Le Centre Pokémon","Une arène Pokémon","La Ligue Pokémon"],
  O:["Une Poké Ball","Le Pokédex","Un badge d'arène","La casquette de Sacha"],
  G:["La Team Rocket","Les champions d'arène"],
  P:["Sacha", "Pikachu", "Ondine", "Pierre", "Mewtwo"]},
 {id:"sao",name:"Sword Art Online",
  L:["Aincrad","Alfheim"],
  O:["Le NerveGear"],
  G:[],
  P:["Kirito", "Asuna", "Sinon"]}
];
var CATS=[{k:"L",label:"Lieu",plural:"Lieux"},{k:"O",label:"Objet",plural:"Objets"},{k:"G",label:"Groupe",plural:"Groupes"},{k:"P",label:"Personnage",plural:"Personnages"}];
var FULL=(1<<ANIME.length)-1;

function hash(str){
  var h1=0xdeadbeef^0,h2=0x41c6ce57^0;
  for(var i=0;i<str.length;i++){var c=str.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677);}
  h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);
  h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);
  return (h1>>>0)^(h2>>>0);
}
function rng(seed){var a=hash(seed)>>>0;return function(){a=(a+0x6D2B79F5)>>>0;var t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296;};}
function shuffle(arr,r){var a=arr.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function pool(mask){
  var out=[];
  ANIME.forEach(function(a,i){
    if(!(mask&(1<<i)))return;
    CATS.forEach(function(c){(a[c.k]||[]).forEach(function(name){out.push({name:name,anime:a.name,cat:c.k});});});
  });
  return out;
}
function catOf(k){for(var i=0;i<CATS.length;i++)if(CATS[i].k===k)return CATS[i];}

var api={ANIME:ANIME,CATS:CATS,FULL:FULL,hash:hash,rng:rng,shuffle:shuffle,pool:pool,catOf:catOf};
if(typeof module!=="undefined"&&module.exports)module.exports=api;else root.SpyfallCards=api;
})(this);
