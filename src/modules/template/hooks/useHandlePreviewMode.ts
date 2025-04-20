import { useRef } from 'react'
import { RadioChangeEvent } from 'antd'
import { MIN_WIDTH } from '@/modules/template/core/constants'
import { MAX_WIDTH } from '@/modules/template/core/constants'

const useHandlePreviewMode = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const mediaQuery = window.matchMedia('(max-width: 1424px)')

  const handleChangeMode = (e: RadioChangeEvent) => {
    if (iframeRef.current) {
      switch (e.target.value) {
        case 'mobile': {
          iframeRef.current.width = '743'
          const iframeDoc = iframeRef.current.contentWindow?.document
          const wrapperDiv = iframeDoc?.querySelector('.frame-content > div') as HTMLDivElement
          if (wrapperDiv) {
            wrapperDiv.style.width = '360px'
          }
          break
        }
        case 'pc': {
          iframeRef.current.width = mediaQuery.matches ? `${MIN_WIDTH}` : `${MAX_WIDTH}`
          const iframeDoc = iframeRef.current.contentWindow?.document
          const wrapperDiv = iframeDoc?.querySelector('.frame-content > div') as HTMLDivElement
          if (wrapperDiv) {
            wrapperDiv.style.width = mediaQuery.matches ? `${MIN_WIDTH - 20}px` : `${MAX_WIDTH - 20}px`
          }
          break
        }
        default:
          break
      }
    }
  }
  return {
    iframeRef,
    onChangeMode: handleChangeMode
  }
}

export default useHandlePreviewMode
