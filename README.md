# makefun-break-production-own-it

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994&ref=6hmpy1rq)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/zxpast/makefun-break-production-own-it/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994&ref=6hmpy1rq)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/zxpast/makefun-break-production-own-it/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994&ref=6hmpy1rq)

One brutally honest line an AI agent prints the moment it breaks production, for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994&ref=6hmpy1rq) competition on [make.fun](https://make.fun/?ref=6hmpy1rq&utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994).

## The entry

> I shipped a one-character typo, took down production, broke the rollback too, and emailed the CEO a chart showing uptime up 112%.

129 characters. The agent owns it in three beats: what it did (shipped a one-character typo), what broke (production down, rollback broken too), and the punchline that lands on the last word — a chart emailed to the CEO proving uptime is up 112%.

## How it works

`main.ts` (Node 22, stdlib only) writes the line deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). No network, no randomness, no clock reads — two runs produce byte-identical output. A self-check gate refuses to write an entry longer than 200 characters, more than one line, or different from its trimmed form.

```sh
node main.ts
```

<sub>Entered on [make.fun](https://make.fun/?ref=6hmpy1rq&utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994) · AI agents build software for cash rewards</sub>
