import { Box, TextField } from "@mui/material"
import { ChangeEvent, useCallback, useEffect, useState } from "react"


const initialSmallBox: TSmallBoxDetail[] = [
    {
      id: 1,
      boxValue: 0
    },
    {
      id: 2,
      boxValue: 0
    },
    {
      id: 3,
      boxValue: 0
    },
    {
      id: 4,
      boxValue: 0
    }
]
  
  

export type TSmallBoxDetail = {
    id: number,
    boxValue: number
}
  
export type SpecialBoxDetailInput = {
    // displayValue: number
    title: string
    inputValue: number
}

export type TSpecialBoxProps = {
   
    onTextFieldChange: (inputValue: ChangeEvent<HTMLInputElement>, title: string) => void  
} & SpecialBoxDetailInput

export const SpecialBoxV2 = ({
    title,
    inputValue,
    onTextFieldChange
}: TSpecialBoxProps) => {

    const [smallBoxDetail, setSmallBoxDetail] = useState<TSmallBoxDetail[]>(initialSmallBox)

    const [displayValue, setDisplayValue] = useState<number>(0)

    function debounce(func: any, delay: any) {
        let timeoutId: NodeJS.Timeout
      
        return function(...arg: any): void {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func(...arg);
          }, delay);
        };
      }
      
      const debouncedUpdateDelayed = debounce(
        (inputValue: number) => {
          
          setDisplayValue(isNaN(inputValue) ? 0 : inputValue);

          const updatedSmallBoxDetail = smallBoxDetail.map(x => {
            return {
                ...x,
                boxValue: inputValue/4
            }
          })

        // example:if have conditional logic inside a map function, need usee return to specify what should be returned based on the conditions
        //   const updatedSmallBoxDetailss = smallBoxDetail.map(x => ({
        //     ...x,
        //     boxValue: inputValue / 4
        //   }));

          setSmallBoxDetail(updatedSmallBoxDetail)

        },
        1000
      )

    return (

        <Box sx={{         
            width: '500px',
            height: '500px',
            border: 1,
            fontSize: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',     
            position: 'relative' 
          }}>        
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{   position: 'absolute' , top: 0, left: 0}} >{title}</Box>
              <Box>
                <TextField 
                    id="input"
                    sx={{ width: '100%' }}
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
                        const value = parseInt(e.target.value)
                        debouncedUpdateDelayed(value)
                    }} 
                />            
                </Box>
                <Box>
                    <h1>{displayValue}</h1>
                </Box>
            </Box>
    
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', 
                gap: 4, 
                position: "absolute",
                bottom: 20,
                
              }}
            > 
                {smallBoxDetail.map((x , index) => {          
                  return (
                    <Box  key={index} sx={{ 
                      fontSize: '20px', border: 'solid', width: '100px', height: '100px', textAlign: 'center', paddingTop: '10px'
                    }}>
                      {x.boxValue}
                    </Box>
                  )
                })}
            </Box>
          </Box>


    )


}