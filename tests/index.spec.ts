import path from 'path'
import unified from 'unified'
import remark from 'remark-parse'
import remark2rehype from 'remark-rehype'
import raw from 'rehype-raw'
import stringify from 'rehype-stringify'
import vfile from 'to-vfile'
import rehypeTitleFigure from '../src'

function compile(file: string) {
  return unified()
    .use(remark)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(rehypeTitleFigure)
    .use(stringify)
    .processSync(vfile.readSync(`${path.resolve('')}/tests/fixtures/${file}`))
    .toString()
}

describe('index.ts', () => {
  test('add figcaptions', () => {
    const got = compile('sample.md')
    const want = compile('sample.html')
    expect(got).toBe(want)
  })

  test('no images', () => {
    const got = compile('no-images.md')
    const want = compile('no-images.html')
    expect(got).toBe(want)
  })
})
