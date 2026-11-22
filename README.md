# Spyfall Anime

Spyfall façon anime, à jouer entre potes sur Discord. Chaque manche, tout le monde tire la même capsule (un lieu, un objet, un groupe ou un personnage d'un animé), sauf l'espion, qui sait seulement de quelle catégorie il s'agit.

Pas de compte, pas de serveur : les capsules sont calculées à partir du code de la partie. Même code, même numéro et même manche donnent la même capsule sur tous les écrans.

## Jouer

1. L'host choisit les thèmes dans l'onglet « Thèmes » (animés et/ou League of Legends), entre son pseudo dans « Créer » et crée le salon. Il reçoit un code de 4 lettres.
2. Il envoie le code à ses potes. Chacun va dans « Rejoindre », entre le code et son pseudo. De 3 à 5 joueurs.
3. L'host lance la partie. Chacun ouvre sa capsule sur son propre appareil, sans partage d'écran.
4. Discussion en vocal : chacun pose 2 questions, toujours dans le même ordre, à qui il veut (on écrit sa question sur la page, la personne interrogée répond oui ou non sur la sienne). Le vote s'ouvre tout seul ensuite, et la majorité se calcule toute seule.
5. Si l'espion n'a pas la majorité, il gagne. S'il est démasqué, il annonce sa réponse à voix haute et les autres indiquent s'il a trouvé.

## Fonctionnement

- `index.html` : la page du jeu. `cards.js` : les cartes, partagées entre la page et l'API.
- `api/room.js` : l'API des salons (fonction Vercel). Les salons sont stockés dans Upstash Redis (intégration Vercel, variables `KV_REST_API_URL` et `KV_REST_API_TOKEN`) et expirent 6 h après la dernière action.
- Chaque joueur ne reçoit que sa propre carte ; l'espion n'est révélé qu'au résultat.

## Déploiement

Le projet Vercel `spyfall-anime` est relié à ce dépôt : chaque push sur `main` redéploie https://spyfall-anime.vercel.app.

## SEO

Les balises de la page (titre, description, aperçu de partage `og.png`, données structurées), `robots.txt` et `sitemap.xml` pointent vers `https://spyfall-anime.vercel.app/`. Si Vercel donne une autre adresse, ou si tu branches un nom de domaine, remplace cette adresse dans `index.html`, `robots.txt` et `sitemap.xml`.

## Polices

Mochiy Pop One et M PLUS Rounded 1c sont embarquées dans `fonts/` (sous-ensembles latins, licence SIL OFL 1.1, voir `fonts/LICENSE-fonts.txt`).

## Modifier les cartes

Les cartes sont dans `cards.js`, dans le tableau `ANIME` (`L` pour les lieux, `O` pour les objets, `G` pour les groupes, `P` pour les personnages, `C` pour les champions de League of Legends). Les cartes sont dans `cards.js`. Ajouter, retirer ou réordonner des animés change le masque des salons : attends qu'aucune partie ne soit en cours.
