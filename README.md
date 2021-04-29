# rehype-title-figure

[Rehype](https://github.com/rehypejs/rehype) plugin that adds a caption using the title attribute of an img.

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

MIT
