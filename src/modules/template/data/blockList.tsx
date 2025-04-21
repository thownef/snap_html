import { Block } from "@/modules/template/core/types/block.type";

export const blockList: Block[] = [
  {
    id: 1,
    type: 'multi',
    background: 'rgb(255, 255, 255)',
    contents: [
      {
        id: 1,
        type: 'image',
        content: 1,
        preview: () => (
          <span style={{ display: 'inline-block' }}>
            <img
              className='mail-parts-image mail-parts-image-0-0-0'
              src='https://img.bme.jp/img/htmlmail_v3/limited_design/gourmet/01_logo.png'
              width={199}
              style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none', width: 199 }}
            />
          </span>
        )
      },
      {
        id: 2,
        content: 2,
        type: 'text',
        preview: () => (
          <div
            className='mail-text'
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
              fontSize: 16,
              lineHeight: '1.5',
              textAlign: 'left',
              color: 'rgb(38, 38, 38)',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: 278
            }}
          >
            <p style={{ margin: 0, textAlign: 'right', lineHeight: '1.25' }}>
              <span style={{ fontSize: 14 }}>web予約：</span>
              <a
                target='_blank'
                rel='noopener noreferrer nofollow'
                href='https://ExampleNEWS.com'
                style={{ color: 'rgb(184, 35, 41)', textDecoration: 'underline' }}
              >
                <span style={{ fontSize: 14, textDecoration: 'inherit' }}>
                  <u>予約ページ</u>
                </span>
              </a>
            </p>
            <p style={{ margin: 0, textAlign: 'right', lineHeight: '1.25' }}>
              <span style={{ fontSize: 14 }}>予約電話：</span>
              <a
                target='_blank'
                rel='noopener noreferrer nofollow'
                href='tel:01234567'
                style={{ color: 'rgb(184, 35, 41)', textDecoration: 'underline' }}
              >
                <span style={{ fontSize: 14, textDecoration: 'inherit' }}>01234567</span>
              </a>
            </p>
          </div>
        )
      }
    ]
  },
  {
    id: 2,
    type: 'default',
    padding: '0px',
    contents: [
      {
        id: 1,
        type: 'image',
        content: 1,
        preview: () => (
          <img
            className='mail-parts-image mail-parts-image-1-0-0'
            src='https://img.bme.jp/img/htmlmail_v3/limited_design/gourmet/01_a.png'
            width={"100%"}
            style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none', width: "100%" }}
          />
        )
      }
    ]
  },
  {
    id: 3,
    type: 'default',
    background: 'rgb(255, 255, 255)',
    contents: [
      {
        id: 1,
        type: 'text',
        content: 1,
        preview: () => (
          <div
            className='mail-text'
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
              fontSize: 16,
              lineHeight: '1.5',
              textAlign: 'left',
              color: 'rgb(38, 38, 38)',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: 560
            }}
          >
            <p style={{ margin: 0 }}>
              <span>
                こんにちは、Example酒場です！
                <br />
                日頃のご愛顧に感謝を込めて、この度は期間限定で特別なクーポンをご用意いたしました。旬の食材を使った絶品料理と、心温まるお酒で、寒い季節も温かな時間をお過ごしください。
              </span>
            </p>
            <p className='blh'>
              <br />
            </p>
            <p style={{ margin: 0, textAlign: 'center' }}>
              <span style={{ color: 'rgb(184, 35, 41)', fontSize: 16 }}>3/31までの限定キャンペーン!</span>
            </p>
          </div>
        )
      }
    ]
  },
  {
    id: 4,
    type: 'default',
    background: 'rgb(255, 255, 255)',
    contents: [
      {
        id: 1,
        content: 1,
        type: 'text',
        preview: () => (
          <div
            className='mail-text'
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
              fontSize: 16,
              lineHeight: '1.5',
              textAlign: 'left',
              color: 'rgb(38, 38, 38)',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: 560
            }}
          >
            <p style={{ margin: 0 }}>
              <span>
                こんにちは、Example酒場です！
                <br />
                日頃のご愛顧に感謝を込めて、この度は期間限定で特別なクーポンをご用意いたしました。旬の食材を使った絶品料理と、心温まるお酒で、寒い季節も温かな時間をお過ごしください。
              </span>
            </p>
            <p className='blh'>
              <br />
            </p>
            <p style={{ margin: 0, textAlign: 'center' }}>
              <span style={{ color: 'rgb(184, 35, 41)', fontSize: 16 }}>3/31までの限定キャンペーン!</span>
            </p>
          </div>
        )
      }
    ]
  }
]
