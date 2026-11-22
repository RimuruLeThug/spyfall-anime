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
  L:["L'École d'exorcisme de Tokyo","Shibuya","Shinjuku","Le Culling Game"],
  O:["Un doigt de Sukuna","Le bandeau de Gojo"],
  G:["Le clan Zen'in","Les Fléaux"],
  P:["Yuji Itadori", "Satoru Gojo", "Megumi Fushiguro", "Nobara Kugisaki", "Ryomen Sukuna","Kenjaku"]},
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
  P:["Kirito", "Asuna", "Sinon"]},
 {id:"lol",name:"League of Legends",kind:"jeu",
  L:["Demacia", "Noxus", "Ionia", "Freljord", "Piltover", "Zaun", "Shurima", "Targon", "Bilgewater", "Les Îles obscures", "Bandle", "Ixtal", "Le Néant"],
  C:["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Ambessa", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Aurora", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Locke", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Mel", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu et Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yunara", "Yuumi", "Zaahen", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"]},
 {id:"jojo",name:"JoJo's Bizarre Adventure",
  L:["Le manoir de DIO au Caire", "Morioh", "La prison de Green Dolphin Street"],
  O:["Le masque de pierre", "La Flèche à Stand", "Le rouleau compresseur de DIO"],
  G:["La famille Joestar", "Les Hommes du Pilier", "Passione", "L'équipe Bucciarati"],
  P:["Jonathan Joestar", "Joseph Joestar", "Jotaro Kujo", "DIO", "Jean-Pierre Polnareff", "Josuke Higashikata", "Yoshikage Kira", "Giorno Giovanna"]},
 {id:"aot",name:"L'Attaque des Titans",
  L:["Le Mur Maria", "Le district de Shiganshina", "L'île du Paradis"],
  O:["L'équipement tridimensionnel", "L'écharpe de Mikasa"],
  G:["Le Bataillon d'exploration"],
  P:["Eren Jäger", "Mikasa Ackerman", "Armin Arlert", "Livaï", "Erwin Smith", "Reiner Braun", "Annie Leonhart"]},
 {id:"solo",
  name:"Solo Leveling",
  L:["L'île de Jeju"],
  G:["L'armée des ombres"],
  P:["Sung Jin-Woo", "Igris", "Beru"]},
 {id:"frieren",
  name:"Frieren",
  P:["Frieren", "Fern", "Stark"]},
 {id:"dandadan",
  name:"Dandadan",
  O:["Les bijoux d'Okarun"],
  P:["Momo Ayase", "Okarun", "Mamie Turbo", "Seiko Ayase"]},
 {id:"tg",
  name:"Tokyo Ghoul",
  L:["L'Antique (le café)"],
  O:["Le masque de Kaneki"],
  G:["Le CCG", "L'Arbre Aogiri"],
  P:["Ken Kaneki", "Touka Kirishima", "Rize Kamishiro"]},
 {id:"7ds",
  name:"Seven Deadly Sins",
  G:["Les Sept Péchés capitaux"],
  P:["Meliodas", "Ban", "King", "Diane", "Escanor"]},
 {id:"geass",
  name:"Code Geass",
  P:["Lelouch", "C.C."]},
 {id:"fr",
  name:"Personnalités françaises",
  kind:"people",
  F:["Squeezie", "Inoxtag", "Michou", "Tibo InShape", "Cyprien", "Norman", "Amixem", "Natoo", "Mister V", "ZeratoR", "Gotaga", "Kameto", "HugoDécrypte", "Emmanuel Macron", "Jean-Luc Mélenchon", "Marine Le Pen", "Jordan Bardella", "Sébastien Lecornu", "François Hollande", "Nicolas Sarkozy", "Raphaël Glucksmann", "Édouard Philippe", "Kylian Mbappé", "Zinedine Zidane", "Antoine Griezmann", "Teddy Riner", "Antoine Dupont", "Léon Marchand", "Victor Wembanyama", "Tony Parker", "Jean-Jacques Goldman", "Aya Nakamura", "Jul", "Ninho", "Orelsan", "Gims", "Louane", "Florent Pagny", "Omar Sy", "Jean Dujardin", "Cyril Hanouna", "Thomas Pesquet", "Michel-Édouard Leclerc"]}
];
var CATS=[{k:"L",label:"Lieu",plural:"Lieux"},{k:"O",label:"Objet",plural:"Objets"},{k:"G",label:"Groupe",plural:"Groupes"},{k:"P",label:"Personnage",plural:"Personnages"},{k:"C",label:"Champion",plural:"Champions"},{k:"F",label:"Personnalité",plural:"Personnalités",art:"une"}];
var FULL=(1<<ANIME.length)-1;
// Par défaut : tous les animés, sans les jeux vidéo ni les personnalités.
function kindOf(a){return a.kind||"anime";}
var DEFAULT_MASK=ANIME.reduce(function(m,a,i){return kindOf(a)!=="anime"?m:(m|(1<<i));},0);

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
    CATS.forEach(function(c){(a[c.k]||[]).forEach(function(name){out.push({name:name,anime:a.name,cat:c.k,kind:kindOf(a)});});});
  });
  return out;
}
function catOf(k){for(var i=0;i<CATS.length;i++)if(CATS[i].k===k)return CATS[i];}

var api={ANIME:ANIME,CATS:CATS,FULL:FULL,DEFAULT_MASK:DEFAULT_MASK,kindOf:kindOf,hash:hash,rng:rng,shuffle:shuffle,pool:pool,catOf:catOf};
if(typeof module!=="undefined"&&module.exports)module.exports=api;else root.SpyfallCards=api;
})(this);
