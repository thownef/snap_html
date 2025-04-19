import { useEffect, ReactNode, useState, useMemo, memo } from 'react'
import ReactDOM from 'react-dom/client'
import ReactDOMServer from 'react-dom/server'
import { HEAD_CONTENT, MAX_WIDTH, mediaQuery, MIN_WIDTH, SRCDOC } from '@/modules/template/core/constants'
import { IframeTemplate } from '@/modules/template/components/Template/IframeTemplate'

interface IframeProps {
  content: ReactNode
  className?: string
  ref: React.RefObject<HTMLIFrameElement | null>
}

const Iframe = memo(({ content, className, ref }: IframeProps) => {
  const [iframeWidth, setIframeWidth] = useState(mediaQuery.matches ? MIN_WIDTH : MAX_WIDTH)
  const [iframeRoot, setIframeRoot] = useState<ReactDOM.Root | null>(null)

  // Cache content
  const memoizedContent = useMemo(() => content, [content])

  useEffect(() => {
    if (!ref.current?.contentWindow) return

    ref.current.srcdoc = SRCDOC

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIframeWidth(e.matches ? MIN_WIDTH : MAX_WIDTH)
      const iframeDoc = ref.current?.contentWindow?.document
      const wrapperDiv = iframeDoc?.querySelector('.frame-content > div') as HTMLDivElement
      if (wrapperDiv) {
        wrapperDiv.style.width = mediaQuery.matches ? `${MIN_WIDTH - 20}px` : `${MAX_WIDTH - 20}px`
      }
    }

    const setupIframe = () => {
      const iframeDoc = ref.current?.contentWindow?.document
      if (!iframeDoc) return

      if (!iframeDoc.querySelector('.frame-content')) {
        iframeDoc.head.innerHTML = HEAD_CONTENT
        const frameRoot = iframeDoc.querySelector('.frame-root')
        if (!frameRoot) return

        const contentDiv = document.createElement('div')
        contentDiv.className = 'frame-content'

        const wrapperDiv = document.createElement('div')
        wrapperDiv.style.width = mediaQuery.matches ? `${MIN_WIDTH - 20}px` : `${MAX_WIDTH - 20}px`
        wrapperDiv.style.margin = 'auto'

        const templateHtml = ReactDOMServer.renderToStaticMarkup(<IframeTemplate />)
        const parser = new DOMParser()
        const parsedTemplate = parser.parseFromString(templateHtml, 'text/html')
        const importedTemplate = iframeDoc.importNode(parsedTemplate.documentElement, true)
        wrapperDiv.appendChild(importedTemplate)

        const mountPoint = wrapperDiv.querySelector('#react-mount-point')
        if (!mountPoint) return

        const root = ReactDOM.createRoot(mountPoint)
        setIframeRoot(root)
        mountPoint.removeAttribute('id')

        contentDiv.appendChild(wrapperDiv)
        frameRoot.appendChild(contentDiv)
      }
    }

    ref.current.onload = setupIframe

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  useEffect(() => {
    if (iframeRoot) {
      iframeRoot.render(memoizedContent)
    }
  }, [memoizedContent, iframeRoot])

  return <iframe ref={ref} className={className} width={iframeWidth} height={'100%'} />
}, (prevProps, nextProps) => {
  return prevProps.content === nextProps.content
})

Iframe.displayName = 'Iframe'

export default Iframe
