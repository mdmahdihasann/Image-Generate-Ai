import React, { useState } from 'react'
import { GenerateApiContext } from '../context'

export const GenerateProvider = ({ children }) => {
    const [selectedData, setSelectedData] = useState({
        prompt: "",
        width: "",
        height: "",
        model: ""
    });
  return (
    <GenerateApiContext.Provider value={{selectedData, setSelectedData}}>
        {children }
    </GenerateApiContext.Provider>
  )
}
