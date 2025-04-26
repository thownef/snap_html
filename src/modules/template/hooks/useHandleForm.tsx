import { useCallback } from 'react'
import ReactDOMServer from 'react-dom/server'
import { IframeTemplate } from '@/modules/template/components/Template/IframeTemplate'
import BaseRenderBlock from '@/modules/template/components/Block/BaseRenderBlock'
import { blockList } from '@/modules/template/data/blockList'
const useHandleForm = () => {
  const handleGetHtmlValue = useCallback((newBlocks: typeof blockList) => {
    const templateHtml = ReactDOMServer.renderToStaticMarkup(<IframeTemplate />)
    const parser = new DOMParser()
    const parsedTemplate = parser.parseFromString(templateHtml, 'text/html')
    const mountPoint = parsedTemplate.querySelector('#react-mount-point')
    if (!mountPoint) return
    const blocksHtml = ReactDOMServer.renderToStaticMarkup(
      <>
        {newBlocks.map((block) => (
          <BaseRenderBlock key={block.id} id={block.id} block={block} />
        ))}
      </>
    )

    mountPoint.innerHTML = blocksHtml

    const finalHtml = parsedTemplate.documentElement.outerHTML
    return finalHtml
  }, [])

  return {
    handleGetHtmlValue
  }
}

export default useHandleForm
