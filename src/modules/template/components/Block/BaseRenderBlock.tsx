import { getColumnPadding } from '@/modules/template/utils'

interface BaseRenderBlockProps {
  key: number
  id: number
  padding?: string
  background?: string
  block: any
}

const BaseRenderBlock = ({
  id,
  padding = '20px',
  background = 'rgba(255, 255, 255, 0)',
  block
}: BaseRenderBlockProps) => {
  return (
    <table
      align='center'
      width={600}
      className='root-mail-block scroll-block'
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role='presentation'
      style={{ padding, background, position: 'relative' }}
    >
      <tbody>
        <tr>
          <td>
            <div className='mail-block-insert-line' />
            <div className='mail-block-panel' data-block-id={id} />
            <table align='center' width='100%' border={0} cellPadding={0} cellSpacing={0} role='presentation'>
              <tbody style={{ width: '100%' }}>
                <tr style={{ width: '100%' }}>
                  {block.contents.map((content: any, index: number) => (
                    <td
                      key={content.id}
                      className='layout-vertical'
                      width={`${100 / block.contents.length}%`}
                      style={{
                        verticalAlign: 'top',
                        width: `${100 / block.contents.length}%`,
                        maxWidth: `${100 / block.contents.length}%`,
                        padding: getColumnPadding(block.contents.length, index),
                        position: 'relative'
                      }}
                    >
                      <div className='mail-column-edit-panel'>
                        <table
                          align='center'
                          width='100%'
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          role='presentation'
                          style={{ position: 'relative' }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <table width='100%' border={0} cellPadding={0} cellSpacing={0}>
                                  <tbody>
                                    <tr>
                                      <td style={{ padding: 0 }}>{content.preview()}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div
                                  className='mail-parts-edit-panel mail-parts-edit-panel-0-0-0'
                                  title='パーツ編集'
                                  data-block-id={0}
                                  data-column-id={0}
                                  data-part-id={0}
                                  data-part-type='text'
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default BaseRenderBlock
