import visit from 'unist-util-visit'
import h from 'hastscript'
import type { Processor, Transformer } from 'unified'
import type { Node } from 'unist'
import type hast from 'hast'

export function rehypeTitleFigure(this: Processor): Transformer {
  function buildFigure(el: hast.Element) {
    const title = `${el.properties?.title || ''}`
    if (!title) return el
    const figure = h('figure', [
      h('img', { ...el.properties }),
      h('figcaption', title),
    ])
    return figure
  }
  function transformer(tree: Node) {
    if (!Array.isArray(tree?.children)) return tree
    visit<hast.Element>(
      tree,
      { tagName: 'p' },
      (el: hast.Element, index: number) => {
        if (!Array.isArray(tree?.children)) return
        const isImgElement = (
          el: hast.Element | hast.Comment | hast.Text
        ): el is hast.Element => 'tagName' in el && el.tagName === 'img'
        const images = el.children.filter(isImgElement).map(buildFigure)
        if (images.length === 0) return
        tree.children[index] = images
      }
    )
    tree.children = tree.children.flat()
    return tree
  }
  return transformer
}

export default rehypeTitleFigure
