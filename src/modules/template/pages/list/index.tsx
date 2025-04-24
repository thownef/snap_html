import { useCallback } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import ReactDOMServer from 'react-dom/server'
import BlockContainer from '@/modules/template/components/Block/BlockContainer'
import useHandleBlock from '@/modules/template/hooks/useHandleBlock'
import Iframe from '@/modules/template/components/Iframe/Iframe'
import Setting from '@/modules/template/components/Setting/Setting'
import { IframeTemplate } from '@/modules/template/components/Template/IframeTemplate'
import BaseRenderBlock from '@/modules/template/components/Block/BaseRenderBlock'
import { blockList } from '@/modules/template/data/blockList'
import useHandlePreviewMode from '@/modules/template/hooks/useHandlePreviewMode'
import useHandleSetting, { settingKeys } from '@/modules/template/hooks/useHandleSetting'
import { modeOptions } from '@/modules/template/core/config/select-options'
import RadioDesign from '@/shared/design-system/Radio/RadioDesign'

const TemplatePage = () => {
  const { handleSubmit, setValue } = useForm<any>()
  const {
    blocks,
    selectedBlock,
    activeKey,
    activeTab,
    onDuplicate,
    onDelete,
    onDuplicateColumn,
    onDeleteColumn,
    onMoveUp,
    onMoveDown,
    onSelectBlock,
    onChangeBlock,
    onChangeTab,
    onChangeActiveTab
  } = useHandleBlock()
  const { settings, onChangeSettings } = useHandleSetting()
  const { iframeRef, mode, onChangeMode } = useHandlePreviewMode()
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
    setValue('html_part', finalHtml)
  }, [])

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data)
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
              <RadioDesign
                options={modeOptions}
                onChange={onChangeMode}
                value={mode}
                className='!px-0 !py-2 [&_.ant-radio-button-wrapper]:w-[120px]'
              />
            </div>
            <div className='bg-gray-50 h-[calc(100%-40px)] min-w-[744px]'>
              <div className='h-full flex justify-center'>
                <Iframe
                  ref={iframeRef}
                  className='border-0 h-[calc(100%-4px)] -mb-1'
                  content={
                    <BlockContainer
                      blocks={blocks}
                      selectedBlock={selectedBlock}
                      settings={settings}
                      onDuplicate={onDuplicate}
                      onDelete={onDelete}
                      onDuplicateColumn={onDuplicateColumn}
                      onDeleteColumn={onDeleteColumn}
                      onMoveUp={onMoveUp}
                      onMoveDown={onMoveDown}
                      onSelectBlock={onSelectBlock}
                    />
                  }
                  allBackground={settings[settingKeys.ALL_BACKGROUND]}
                  background={settings[settingKeys.BACKGROUND]}
                  contentPosition={settings[settingKeys.CONTENT_POSITION]}
                />
              </div>
            </div>
          </main>
          <footer className='box-border z-10 w-full min-w-[744px] px-[14px] py-1 border-t border-l border-[rgb(240,240,240)] border-r-0 bg-[rgb(250,250,250)] h-[55px]'>
            <button type='submit'>submit</button>
          </footer>
        </div>
        <Setting
          selectedBlock={selectedBlock}
          activeKey={activeKey}
          activeTab={activeTab}
          settings={settings}
          onChangeTab={onChangeTab}
          onChangeBlock={onChangeBlock}
          onChangeActiveTab={onChangeActiveTab}
          onChangeSettings={onChangeSettings}
        />
      </div>
    </form>
  )
}

export default TemplatePage
