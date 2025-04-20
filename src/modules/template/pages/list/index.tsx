import { useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Radio, RadioChangeEvent } from 'antd'
import BlockContainer from '@/modules/template/components/Block/BlockContainer'
import { MIN_WIDTH, MAX_WIDTH } from '@/modules/template/core/constants'
import useHandleBlock from '@/modules/template/hooks/useHandleBlock'
import Iframe from '@/modules/template/components/Iframe/Iframe'

const TemplatePage = () => {
  const { handleSubmit, setValue } = useForm<any>()
  const { blocks, onDuplicate, onDelete, onDuplicateColumn, onDeleteColumn, onMoveUp, onMoveDown } =
    useHandleBlock(setValue)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const mediaQuery = window.matchMedia('(max-width: 1424px)')

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data)
  }

  const handleChange = (e: RadioChangeEvent) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex h-screen overflow-y-hidden bg-transparent box-border'>
        <div className='min-w-[744px] m-0 w-full h-full flex flex-col max-[1424px]:max-w-[744px]'>
          <header className='box-border z-10 w-full min-w-[744px] px-[14px] py-1 border-t border-b border-l border-gray-200 border-r-0 bg-gray-50 h-[55px]'>
            header
          </header>
          <main className='flex-auto max-[1424px]:max-w-[744px]'>
            <div className='h-10 bg-gray-50 border-b border-gray-200 relative text-center'>
              <Radio.Group
                onChange={handleChange}
                defaultValue='pc'
                size='small'
                optionType='button'
                className='!px-0 !py-2'
              >
                <Radio.Button className='w-32' value='pc'>
                  PC表示
                </Radio.Button>
                <Radio.Button className='w-32' value='mobile'>
                  スマホ表示
                </Radio.Button>
                <Radio.Button className='w-32' value='alt'>
                  代替テキスト
                </Radio.Button>
              </Radio.Group>
            </div>
            <div className='bg-gray-50 h-[calc(100%-40px)] min-w-[744px]'>
              <div className='h-full flex justify-center'>
                <Iframe
                  ref={iframeRef}
                  className='border-0 h-[calc(100%-4px)] -mb-1'
                  content={
                    <BlockContainer
                      blocks={blocks}
                      onDuplicate={onDuplicate}
                      onDelete={onDelete}
                      onDuplicateColumn={onDuplicateColumn}
                      onDeleteColumn={onDeleteColumn}
                      onMoveUp={onMoveUp}
                      onMoveDown={onMoveDown}
                    />
                  }
                />
              </div>
            </div>
          </main>
          <footer className='box-border z-10 w-full min-w-[744px] px-[14px] py-1 border-t border-l border-[rgb(240,240,240)] border-r-0 bg-[rgb(250,250,250)] h-[55px]'>
            <button type='submit'>submit</button>
          </footer>
        </div>
        <div className='max-[1424px]:min-w-[680px]'>
          <div className='w-[calc(100vw-744px)] h-screen box-border border-l border-[rgb(240,240,240)] max-w-[680px] min-w-[496px] overflow-hidden'>
            Right
          </div>
        </div>
      </div>
    </form>
  )
}

export default TemplatePage
