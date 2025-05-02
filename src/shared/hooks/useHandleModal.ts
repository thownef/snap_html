import { useCallback, useState } from 'react'

const useHandleModal = () => {
  const [modalName, setModalName] = useState('')

  const handleOpenModal = useCallback((modalName: string) => {
    return () => {
      setModalName(modalName)
    }
  }, [])

  const handleCloseModal = useCallback(() => {
    setModalName('')
  }, [])

  return {
    modalName,
    onSetModalName: setModalName,
    onOpenModal: handleOpenModal,
    onCloseModal: handleCloseModal
  }
}

export default useHandleModal
