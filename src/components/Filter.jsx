import React from 'react'
import { Input, FormControl } from "@chakra-ui/react";

const Filter = ({ setInputText }) => {
  return (<>
    <FormControl w='auto'>
      <Input placeholder='Filtrar productos' onChange={(e) => setInputText(e.target.value)} />
    </FormControl>
  </>
  )
}

export default Filter
