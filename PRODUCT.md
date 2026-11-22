# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS (`index.html`, `cards.js`) plus one Vercel Node function (`api/room.js`) backed by Upstash Redis through the Vercel integration. No build step. Deployed on Vercel from the GitHub repository RimuruLeThug/spyfall-anime (https://spyfall-anime.vercel.app).

## Users

A group of 3 to 5 friends playing together on a Discord voice call. Every player has the game open on their own device (phone or PC). Nobody shares their screen, so that no one reveals the word. One player is the host and creates the room.

## Product Purpose

Spyfall with anime content: each round, every player gets the same anime place, object, group or character, except the spy. The spy only knows which of the four categories it is. Players ask each other questions on voice, then vote. The game is inspired by the Spyfall videos of the French YouTubers Sunroof Geeky and Reyd.

Success: the group plays round after round without friction, and nobody's card is exposed by accident.

## Positioning

No public Spyfall site offers anime cards with this round flow. No account: a 4-letter room code and a pseudo are enough.

## Operating Context

- The host ticks the themes (anime, League of Legends) on the "Thèmes" tab, types a pseudo in "Créer" and creates a room. The page shows a 4-letter code to paste in the Discord chat.
- Players open "Rejoindre", type the code and their pseudo. The room holds 3 to 5 players; the host starts once at least 3 are in.
- Round flow: 1. Discussion on voice. Questions go round in a fixed order (room order, starting from a random first player); the player whose turn it is picks who to ask and types the question; the person asked answers yes or no on their own page (user rule); no limit on asking the same person (user rule). Everyone sees the round's questions and answers, and the history stays on screen during the vote (user rule). The host can skip a stuck turn or answer for someone who cannot. Each player asks exactly 2 questions; the vote opens automatically once all have, and cannot be forced earlier (user rule). Players may debate on voice meanwhile. 2. Vote in the page (automatic after the questions): each player votes for a suspect or "Je ne sais pas"; votes stay hidden until everyone has voted; a strict majority is needed to unmask. 3. Result: if the spy has no majority against them, the spy wins. If unmasked, the spy says one guess aloud and the other players mark it right or wrong in the page. Score kept per room.
- The host starts the next round for everyone, or sends the room back to the lobby so players can join or leave.
- The interface language is French.

## Capabilities and Constraints

- 14 anime: Chainsaw Man, Death Note, Demon Slayer, Dragon Ball, Fairy Tail, Fullmetal Alchemist, Hunter x Hunter, Jujutsu Kaisen, My Hero Academia, Naruto, One Piece, One Punch Man, Pokémon, Sword Art Online. Bleach was removed by the user. Four categories: Lieu, Objet, Groupe and Personnage (the best-known characters, added at the user's request). 158 anime cards in `cards.js`.
- A second theme besides anime, at the user's request: League of Legends, with all 173 champions (category Champion, up to Locke, patch 26.13). The host picks themes on the "Thèmes" tab; anime only is the default, LoL only and mixed are possible.
- One spy per round. No timer, by explicit user request. No list of possible answers on screen, by explicit user request (it made the spy's guess too easy).
- Rooms live in Redis and expire 6 hours after the last action. Each player only ever receives their own card; the spy is revealed at the result.
- The home page must not name any card (place, object, group or character); anime titles are fine.
- Anime names and card names are text only. No anime artwork, logos or characters are drawn or embedded.
- AdSense is planned later and needs a custom domain first.

## Brand Commitments

Name: "Spyfall Anime". Voice: casual French between friends, tutoiement.

## Evidence on Hand

The card list in `index.html`, curated by the user. No screenshots, testimonials or other assets exist; none may be invented.

## Product Principles

- The card stays private: hidden by default, revealed by the player, never shown to anyone else.
- The server is the single source of truth: every device shows the same phase, votes and result.
- The page follows the voice call: talking happens on voice, the page handles cards and votes.
- Setup takes under a minute for the host and seconds for players.

## Accessibility & Inclusion

Keyboard-operable controls and readable contrast. Played on desktop Chrome, should still work on a phone.
