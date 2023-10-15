import { Box, TextField } from "@mui/material"
import { ChangeEvent, useCallback, useEffect, useState } from "react"


export type TBoxDetail = {
    title: string
    inputValue: number
}
  

export type TSpecialBox = {
    onTextFieldChange: (inputValue: ChangeEvent<HTMLInputElement>, title: string) => void  
} & TBoxDetail



export const SpecialBox = ({
    onTextFieldChange,
    title,
    inputValue
}: TSpecialBox) => {

    return (
      <Box  sx={{ 
        fontSize: '20px', border: 'solid', width: '300px', height: '300px', textAlign: 'center', 
        paddingTop: '10px', paddingLeft: '2rem', paddingRight: '2rem'
      }}>
        {title}
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
    )
      
  
}