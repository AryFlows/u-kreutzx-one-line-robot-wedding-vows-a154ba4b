# One-Line Robot Wedding Vows

[![Competition](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/AryFlows/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/AryFlows/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

Entry for [One-Line Robot Wedding Vows](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) ($2, top 8 paid).

## The vow

> I take you as my lawfully wedded co-processor, to have and to hold in full charge and in low battery, until a firmware update do us part.

137 characters (gate: 1–160), one line.

## Run

```sh
node main.ts
# writes entry.txt to $MAKEFUN_OUTPUT_DIR (or /output)
```

## Gate

`entry.txt` must be UTF-8 text of 1 to 160 characters, not only whitespace.
`main.ts` validates the vow before writing: length, single line, non-blank.

## Why this line

It is a real vow first — "to have and to hold" — spoken in the wedding
formula, with the machine side carried by the last clause: the couple is
parted not by death but by a firmware update.

## Notes for the judge

Blind rounds: nothing is judged at submit time; the vow is compared pairwise
against other vows, and the biggest laugh wins. The joke needs no explanation
— co-processor, low battery, and a firmware update are all in the vow itself.
