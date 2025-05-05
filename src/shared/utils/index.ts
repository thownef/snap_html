export const getSnsIcon = (type: string) => {
  switch (type) {
    case 'X':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442363/icon-x-basic.png'
    case 'Facebook':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442374/icon-facebook-basic.png'
    case 'YouTube':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442383/icon-youtube-basic.png'
    case 'Instagram':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442507/icon-instagram-basic.png'
    case 'LINE':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442515/icon-line-basic.png'
    case 'LinkedIn':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442521/icon-linkedin-basic.png'
    case 'Pinterest':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442528/icon-pinterest-basic.png'
    case 'Note':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442560/icon-note-basic.png'
    case 'XWhite':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442912/icon-x-white-on.png'
    case 'FacebookWhite':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442918/icon-facebook-white.png'
    case 'YouTubeWhite':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442928/icon-youtube-white.png'
    case 'InstagramWhite':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442934/icon-instagram-white.png'
    case 'LINEWhite':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442940/icon-line-white.png'
    case 'LinkedInWhite':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442946/icon-linkedin-white.png'
    case 'PinterestWhite':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442951/icon-pinterest-white.png'
    case 'NoteWhite':
      return 'https://res.cloudinary.com/thownef/image/upload/v1746442955/icon-note-white-on.png'
    default:
      return ''
  }
}

export const getSnsLabel = (type: string) => {
  switch (type) {
    case 'X':
      return 'X'
    case 'Facebook':
      return 'Facebook'
    case 'YouTube':
      return 'YouTube'
    case 'Instagram':
      return 'Instagram'
    case 'LINE':
      return 'LINE'
    case 'LinkedIn':
      return 'LinkedIn'
    case 'Pinterest':
      return 'Pinterest'
    case 'Note':
      return 'Note'
    case 'XWhite':
      return 'X'
    case 'FacebookWhite':
      return 'Facebook'
    case 'YouTubeWhite':
      return 'YouTube'
    case 'InstagramWhite':
      return 'Instagram'
    case 'LINEWhite':
      return 'LINE'
    case 'LinkedInWhite':
      return 'LinkedIn'
    case 'PinterestWhite':
      return 'Pinterest'
    case 'NoteWhite':
      return 'Note'
    default:
      return ''
  }
}

export const isTransparent = (color: string, threshold: number = 0.01): boolean => {
  const rgbaMatch = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)$/i)
  if (rgbaMatch) {
    const alpha = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1
    return alpha <= threshold
  }

  if (color === 'transparent') return true

  return false
}