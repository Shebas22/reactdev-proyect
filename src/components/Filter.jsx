import React from 'react'
import { SimpleGrid, Box, Heading, Input, } from "@chakra-ui/react";
import { Form } from 'react-router-dom';

const Filter = ({ handleChange,
  setInputText, inputText }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="filtrar productos"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
    </form>
  )
}

export default Filter
