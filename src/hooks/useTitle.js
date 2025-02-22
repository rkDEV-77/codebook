import React, { useEffect } from 'react'

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - CodeBook`
    },[title])
  return null
}

// export default useTitle
