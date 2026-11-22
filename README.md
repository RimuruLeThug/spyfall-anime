# Spyfall Anime

Spyfall façon anime, à jouer entre potes sur Discord. Chaque manche, tout le monde tire la même capsule (un lieu, un objet ou un groupe d'un animé), sauf l'espion, qui sait seulement de quelle catégorie il s'agit.

Pas de compte, pas de serveur : les capsules sont calculées à partir du code de la partie. Même code, même numéro et même manche donnent la même capsule sur tous les écrans.

## Jouer

1. L'host ouvre « Créer », choisit le nombre de joueurs, coche les animés dans l'onglet « Animés », puis génère un code (par exemple `NEKO-05-CN3`).
2. Il colle le code dans le chat Discord et donne un numéro à chaque joueur.
3. Chacun ouvre la page dans son navigateur, va dans « Rejoindre », entre le code et son numéro, puis ouvre sa capsule.
4. Discussion en vocal, puis vote : quelqu'un compte « 3, 2, 1 » et tout le monde écrit son vote dans le chat en même temps. Chacun touche sur sa page le joueur qui a eu la majorité.
5. Si l'espion n'a pas la majorité, il gagne. S'il est démasqué, il a une seule chance de deviner la capsule.

## Lancer en local

Le site tient dans un seul fichier statique, sans build :

```sh
npx serve .
```

ou ouvre simplement `index.html` dans le navigateur.

## Déploiement

Le dépôt est prêt pour Vercel : importe-le sur vercel.com, sans framework ni commande de build. Chaque push sur `main` redéploie le site.

## SEO

Les balises de la page (titre, description, aperçu de partage `og.png`, données structurées), `robots.txt` et `sitemap.xml` pointent vers `https://spyfall-anime.vercel.app/`. Si Vercel donne une autre adresse, ou si tu branches un nom de domaine, remplace cette adresse dans `index.html`, `robots.txt` et `sitemap.xml`.

## Polices

Mochiy Pop One et M PLUS Rounded 1c sont embarquées dans `fonts/` (sous-ensembles latins, licence SIL OFL 1.1, voir `fonts/LICENSE-fonts.txt`).

## Modifier les cartes

Les cartes sont dans `index.html`, dans le tableau `ANIME` (`L` pour les lieux, `O` pour les objets, `G` pour les groupes). Ajouter, retirer ou réordonner des animés change les codes : les parties en cours devront générer un nouveau code.
