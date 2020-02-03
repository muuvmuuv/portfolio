import { useContext } from 'react'

import { ToastContext } from '../provider/toast'

function useToast() {
  const { add, remove } = useContext(ToastContext)

  return { add, remove }
}

export default useToast
