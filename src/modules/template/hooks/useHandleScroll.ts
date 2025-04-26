import { useCallback, useState } from 'react'

const useAnchorScroll = () => {
  const [activeAnchor, setActiveAnchor] = useState<string>('#text')

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>, link: { href: string }) => {
    e.preventDefault()
    const { href } = link
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setActiveAnchor(href)
  }, [])

  return {
    activeAnchor,
    handleClick
  }
}

export default useAnchorScroll
