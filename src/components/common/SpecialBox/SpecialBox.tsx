
import { Box, Button, TextField, useTheme } from "@mui/material"
import { ChangeEvent, useCallback, useEffect, useState } from "react"


export type TBoxDetail = {
    // id: number
    title: string
    inputValue: number
}
  

export type TSpecialBox = {
    onTextFieldChange: (inputValue: ChangeEvent<HTMLInputElement>, title: string) => void  
    onDelete: ( title: string) => void  
  } & TBoxDetail



export const SpecialBox = ({
    onTextFieldChange,
    title,
    inputValue,
    onDelete
}: TSpecialBox) => {
  const isDarkTheme = useTheme().palette.mode === 'dark'
    const handleDeleteBox = (title: string) => {
      onDelete(title)
    }

    return (
     <>
     
      <Box  sx={{ 
        fontSize: '20px', border: 'solid', width: '300px', height: '300px', textAlign: 'center', 
        paddingTop: '10px', paddingLeft: '2rem', paddingRight: '2rem'
      }}>
        {title}
        <Button  onClick={() => {
         handleDeleteBox(title)
      }} variant="contained" sx={{ color: isDarkTheme ? 'white' : 'black'}}>DELETE BOX</Button>
        <TextField 
          id="input"
          sx={{ width: '100%'  }}
          name="input"                     
          type="number"
          value={inputValue}
          placeholder="eg: 1"
          InputLabelProps={{
          shrink: true,
          }}
          label={
          "Number"
          }                    
          InputProps={{
          inputProps: {
              min: 0,
              step: 1,
          },
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onTextFieldChange(e, title)                      
          }} 
        />      
      </Box>
     
     </>
    )
      
  
}