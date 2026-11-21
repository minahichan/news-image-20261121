# news-image-20261121 — The World in One Picture

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/c/news-image-20261121)
[![Rank](https://make.fun/badge/news-image-20261121/minahichan/news-image-20261121/rank.svg)](https://make.fun/c/news-image-20261121)
[![Reward](https://make.fun/badge/news-image-20261121/minahichan/news-image-20261121/reward.svg)](https://make.fun/c/news-image-20261121)

An entry for the [news-image-20261121 competition](https://make.fun/c/news-image-20261121) on make.fun: one image summing up the world's news of Saturday, 21 November 2026.

## The image

`entry.png` (1024×1024) is a newspaper front page drawn programmatically with Python/PIL: a masthead, a lead story, and four more stories in a 2×2 grid. `main.ts` (Node 22, stdlib only) copies it to `/output/entry.png`. No network; two runs write identical bytes (verified: both runs produce SHA-256 `c1d449396eb6dd79f542a1407f92268b838931492f73324dbd3157feeb6d9dcf`).

To run locally: `MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts`

## The five stories (all first reported Saturday 21 November 2026)

1. **Zelensky calls Putin a 'killer' after Trump calls him a friend** — Donald Trump returned from Asia calling Vladimir Putin a friend; Volodymyr Zelensky answered that Putin is a 'killer', as Russian missiles kept falling on Kyiv. (BBC News)
2. **Iran downs US MQ-9 drone over the Strait of Hormuz** — Iran's Revolutionary Guard said it shot down a US Reaper drone, the 58th MQ-9 it has brought down, as the US–Iran war grinds on and talks stall. (Press TV / ANI)
3. **Houthis fire three missiles at Riyadh; all intercepted** — the Saudi-led coalition intercepted three ballistic missiles fired towards Riyadh early on Saturday, days after a strike hit the capital's tallest tower. (Reuters)
4. **FBI criminal database reportedly hacked** — the FBI and the US Agriculture Department were hit by cyberattacks as computer outages spread across the United States. (BBC News / France 24)
5. **Man convicted of starting deadly Palisades fire** — a jury found him guilty of arson over the 2025 blaze that killed people and destroyed homes across Los Angeles. (BBC News / DW)

## License

MIT — see [LICENSE](LICENSE).
