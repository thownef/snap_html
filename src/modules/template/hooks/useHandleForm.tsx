import { useCallback } from 'react'
import ReactDOMServer from 'react-dom/server'
import * as htmlToImage from 'html-to-image'
import { IframeTemplate } from '@/modules/template/components/Template/IframeTemplate'
import BaseRenderBlock from '@/modules/template/components/Block/BaseRenderBlock'
import { settingKeys, SettingKeys } from '@/modules/template/hooks/useHandleSetting'
import { Block } from '@/modules/template/core/types/block.type'

const useHandleForm = (settings: SettingKeys) => {
  const handleGetHtmlValue = useCallback(
    (newBlocks: Block[]) => {
      const templateHtml = ReactDOMServer.renderToStaticMarkup(<IframeTemplate />)
      const parser = new DOMParser()
      const parsedTemplate = parser.parseFromString(templateHtml, 'text/html')
      const mountPoint = parsedTemplate.querySelector('#react-mount-point')
      const backgroundElement = parsedTemplate.querySelector('#template-background') as HTMLElement
      const blockElement = parsedTemplate.querySelector('#template-block') as HTMLElement

      if (backgroundElement) {
        backgroundElement.style.background = settings[settingKeys.ALL_BACKGROUND]
      }
      if (blockElement) {
        blockElement.style.background = settings[settingKeys.BACKGROUND]
        blockElement.setAttribute('align', settings[settingKeys.CONTENT_POSITION])
      }
      if (!mountPoint) return
      const blocksHtml = ReactDOMServer.renderToStaticMarkup(
        <>
          {newBlocks.map((block) => (
            <BaseRenderBlock key={block.id} block={block} settings={settings} />
          ))}
        </>
      )

      mountPoint.innerHTML = blocksHtml

      const finalHtml = parsedTemplate.documentElement.outerHTML
      return finalHtml
    },
    [settings]
  )

  const handleGetImage = async (htmlString: string): Promise<string | null> => {
    const iframe = document.createElement('iframe')
    iframe.style.width = '744px'
    iframe.style.height = '967px'
    document.body.appendChild(iframe)
  
    iframe.srcdoc = htmlString
  
    await new Promise<void>((resolve) => {
      iframe.onload = () => resolve()
    })
  
    const bodyNode = iframe.contentDocument?.body
    if (!bodyNode) {
      document.body.removeChild(iframe)
      return null
    }
  
    const img = await htmlToImage.toPng(bodyNode as HTMLElement, { cacheBust: true, width: 744, height: 967 })
  
    document.body.removeChild(iframe)
  
    return img
  }

  return {
    onGetHtmlValue: handleGetHtmlValue,
    onGetImage: handleGetImage,
  }
}

export default useHandleForm

