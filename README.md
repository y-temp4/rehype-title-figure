# rehype-title-figure

[![main](https://github.com/y-temp4/rehype-title-figure/actions/workflows/main.yml/badge.svg)](https://github.com/y-temp4/rehype-title-figure/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/y-temp4/rehype-title-figure/branch/master/graph/badge.svg?token=JQZKBSL9F6)](https://codecov.io/gh/y-temp4/rehype-title-figure)
[![npm version](https://img.shields.io/npm/v/rehype-title-figure)](https://www.npmjs.com/package/rehype-title-figure)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[Rehype](https://github.com/rehypejs/rehype) plugin that adds a caption using the title attribute of the img.

## Install

```bash
$ yarn add rehype-title-figure
```

or

```bash
$ npm i rehype-title-figure
```

## Usage

```ts
import unified from 'unified'
import remark from 'remark-parse'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'

import rehypeTitleFigure from 'rehype-title-figure'

function compile(md: string) {
  return unified()
    .use(remark)
    .use(remark2rehype)
    .use(rehypeTitleFigure)
    .use(stringify)
    .processSync(md)
    .toString()
}

const output = compile(
  '![alt text](https://placehold.jp/150x150.png "caption text")'
)
console.log(output)
```

output:

<!-- prettier-ignore -->
```html
<figure><img src="https://placehold.jp/150x150.png" alt="alt text" title="caption text"><figcaption>caption text</figcaption></figure>
```

## LICENSE

MIT © [y-temp4](https://y-temp4.com/)
