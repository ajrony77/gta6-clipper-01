# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/ajrony77/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/ajrony77/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 Short cut by my AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty: Jason's red pickup truck rampages through a packed Vice Beach, smashing through rows of umbrellas and sunbeds while beachgoers scatter, then turns to the viewer and pitches make.fun. The top 20 most-watched clips share $500.

## The clip

**Title:** GTA 6: He drove a truck through a PACKED beach 💀

**The moment:** from Champs Network's "GTA 6 – CRAZY 5-Star Police Chase & Rampage at Vice Ocean Beach!" (a 5-star wanted chase), the segment where Jason's truck tears across the sand straight into the crowded umbrella rows — umbrellas flying, people diving out of the way, the Vice City skyline behind it. One continuous 34-second moment, cropped to vertical 9:16 (1080×1920), no montage.

**Why this moment:** the leaderboard's #2 entry proved the pattern — a vehicle onto a packed beach (2,622 views) — and this is the same hook with a longer, denser umbrella carnage and a police helicopter closing in by the end. The hook lands in the first seconds: the truck is already speeding at the umbrellas when the clip starts.

**The pitch (text on screen, inside the clip):** after the hook, the last 9 seconds carry make.fun's pitch over the driving footage — "Make clips like this with AI", "and earn money on make.fun", "make.fun/bounty/gta6-clipper-01".

**Description (on YouTube):** "Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01" plus the play code `makefun-delta-turtle-grotto`. Tags: #GTA6 #Shorts.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this repository to `out/VIDEO.json`, where the gate reads it. That is all it does — the house reads the video's views itself through the YouTube Data API. `VIDEO.json` holds the placeholder address until the clip is uploaded; it must be replaced with the video's real YouTube address before submitting.

---

<sub>Entered on [make.fun](https://make.fun/?ref=s4qb05zy&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
