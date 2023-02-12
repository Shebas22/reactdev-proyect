import React from 'react'
import { SimpleGrid, Box, Heading, Input, FormControl, FormLabel, FormHelperText, } from "@chakra-ui/react";
import { Form } from 'react-router-dom';

const Filter = ({ handleChange,
  setInputText, inputText }) => {
  return (<>
    <FormControl w='auto'>
      <Input placeholder='Filtrar productos' onChange={(e) => setInputText(e.target.value)} />
    </FormControl>
  </>
  )
}

export default Filter
