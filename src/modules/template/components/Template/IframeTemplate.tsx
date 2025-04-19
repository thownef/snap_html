import { HEAD_FRAME_CONTENT } from '@/modules/template/core/constants'

export const IframeTemplate = () => {
  const background = 'rgb(251, 248, 244)'
  const htmlAttributes = {
    dir: 'auto',
    lang: 'ja',
    xmlns: 'http://www.w3.org/1999/xhtml',
    'xmlns:v': 'urn:schemas-microsoft-com:vml',
    'xmlns:o': 'urn:schemas-microsoft-com:office:office'
  }

  return (
    <html {...htmlAttributes}>
      <head dangerouslySetInnerHTML={{ __html: HEAD_FRAME_CONTENT }} />
      <body
        style={{
          background: 'rgb(255, 255, 255)',
          margin: '0px auto',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif'
        }}
      >
        <table
          align='center'
          width='100%'
          border={0}
          cellPadding={0}
          cellSpacing={0}
          role='presentation'
          style={{ maxWidth: '100%', margin: '0px auto', width: '100%', background }}
        >
          <tbody>
            <tr style={{ width: '100%' }}>
              <td>
                <table
                  align='center'
                  width={600}
                  className='mail-block-wrapper'
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  role='presentation'
                  style={{ background: 'rgba(255, 255, 255, 0)' }}
                >
                  <tbody>
                    <tr>
                      <td id='react-mount-point'></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  )
}
