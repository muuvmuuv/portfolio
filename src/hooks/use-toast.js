import { useContext } from 'react'

import { ToastContext } from '../provider/toast'

function useToast() {
  const { add, remove, toasts } = useContext(ToastContext)

  return { add, remove, toasts }
}

export default useToast
