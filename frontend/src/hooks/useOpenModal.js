import { useState } from 'react'

const useOpenModal = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev)
  }

  return { openModal, handleOpenModal }
}

export default useOpenModal
