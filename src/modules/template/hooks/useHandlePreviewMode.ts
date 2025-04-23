import { useCallback, useRef, useState, useEffect } from 'react'
import { RadioChangeEvent } from 'antd'
import { MIN_WIDTH } from '@/modules/template/core/constants'
import { MAX_WIDTH } from '@/modules/template/core/constants'

const useHandlePreviewMode = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const mediaQuery = window.matchMedia('(max-width: 1424px)')
  const [mode, setMode] = useState<'mobile' | 'pc'>('pc')

  const handleChangeMode = useCallback((e: RadioChangeEvent) => {
    if (iframeRef.current) {
      const newMode = e.target.value
      setMode(newMode)
      
      if (newMode === 'mobile') {
        iframeRef.current.width = '743'
        const iframeDoc = iframeRef.current.contentWindow?.document
        const wrapperDiv = iframeDoc?.querySelector('.frame-content > div') as HTMLDivElement
        if (wrapperDiv) {
          wrapperDiv.style.width = '360px'
        }
      } else {
        iframeRef.current.width = mediaQuery.matches ? `${MIN_WIDTH}` : `${MAX_WIDTH}`
        const iframeDoc = iframeRef.current.contentWindow?.document
        const wrapperDiv = iframeDoc?.querySelector('.frame-content > div') as HTMLDivElement
        if (wrapperDiv) {
          wrapperDiv.style.width = mediaQuery.matches ? `${MIN_WIDTH - 20}px` : `${MAX_WIDTH - 20}px`
        }
      }
    }
  }, [mediaQuery.matches])

  useEffect(() => {
    const updateSize = () => {
      if (iframeRef.current && mode === 'pc') {
        iframeRef.current.width = mediaQuery.matches ? `${MIN_WIDTH}` : `${MAX_WIDTH}`
        const iframeDoc = iframeRef.current.contentWindow?.document
        const wrapperDiv = iframeDoc?.querySelector('.frame-content > div') as HTMLDivElement
        if (wrapperDiv) {
          wrapperDiv.style.width = mediaQuery.matches ? `${MIN_WIDTH - 20}px` : `${MAX_WIDTH - 20}px`
        }
      } else {
        if (iframeRef.current) {
          iframeRef.current.width = '743'
          const iframeDoc = iframeRef.current.contentWindow?.document
          const wrapperDiv = iframeDoc?.querySelector('.frame-content > div') as HTMLDivElement
          if (wrapperDiv) {
            wrapperDiv.style.width = '360px'
          }
        }
      }
    }

    mediaQuery.addEventListener('change', updateSize)
    return () => mediaQuery.removeEventListener('change', updateSize)
  }, [mediaQuery, mode])

  return {
    iframeRef,
    mode,
    onChangeMode: handleChangeMode
  }
}

export default useHandlePreviewMode
