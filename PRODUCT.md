# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, one `index.html`, no build step. Deployed on Vercel from the GitHub repository RimuruLeThug/spyfall-anime.

## Users

A group of friends (3 to 12) playing together on a Discord voice call. Every player has the game open in their own Chrome tab on their PC, next to Discord. Nobody shares their screen, so that no one reveals the word. One player is the host and sets up the game.

## Product Purpose

Spyfall with anime content: each round, every player gets the same anime place, object or group, except the spy. The spy only knows whether it is a place, an object or a group. Players ask each other questions on voice, then vote. The game is inspired by the Spyfall videos of the French YouTubers Sunroof Geeky and Reyd.

Success: the group plays round after round without friction, and nobody's card is exposed by accident.

## Positioning

No public Spyfall site offers anime cards with this round flow. The page needs no account and no server: every card is computed from a shared game code, so the same code, player number and round always give the same card on every device.

## Operating Context

- The host opens "Créer", picks the number of players, optionally types pseudos, and ticks the anime on the "Animés" page. The page generates a code such as `NEKO-05-CN3`, which the host pastes in the Discord chat and assigns a number to each player.
- Players open "Rejoindre", enter the code and their number, and reveal their card.
- Round flow: 1. Discussion on voice (the page names who asks the first question). 2. Vote: someone counts "3, 2, 1" and everyone types their accusation in the Discord chat at the same time; then each player taps on their own page the player who got the majority, or "no majority". 3. Result: if the spy is not voted by majority, the spy wins. If the spy is voted, the spy gets one guess, said aloud; if right, the spy still wins, otherwise the agents win.
- Everyone moves to the next round together and checks they show the same round number.
- The interface language is French.

## Capabilities and Constraints

- 14 anime: Chainsaw Man, Death Note, Demon Slayer, Dragon Ball, Fairy Tail, Fullmetal Alchemist, Hunter x Hunter, Jujutsu Kaisen, My Hero Academia, Naruto, One Piece, One Punch Man, Pokémon, Sword Art Online. Bleach was removed by the user. 92 cards curated with the user.
- One spy per round. No timer, by explicit user request.
- No server, so votes are cast in the Discord chat, not in the page. The page records the outcome locally and keeps a local score.
- The anime selection is encoded in the game code (base-36 bitmask), so players configure nothing.
- Anime names and card names are text only. No anime artwork, logos or characters are drawn or embedded.

## Brand Commitments

Name: "Spyfall Anime". Voice: casual French between friends, tutoiement.

## Evidence on Hand

The card list in `index.html`, curated by the user. No screenshots, testimonials or other assets exist; none may be invented.

## Product Principles

- The card stays private: hidden by default, revealed by the player, never shown to anyone else.
- Same inputs, same result on every device: the code is the single source of truth.
- The page follows the voice call, never replaces it: talk and vote happen on Discord.
- Setup takes under a minute for the host and seconds for players.

## Accessibility & Inclusion

Keyboard-operable controls and readable contrast. Played on desktop Chrome, should still work on a phone.
