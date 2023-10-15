import { Box, TextField } from "@mui/material"
import { useCallback, useEffect, useState } from "react"


export type TBoxDetail = {
    id: number,
    name: string
}
  

export type TSpecialBox = {
    boxContent: TBoxDetail[]
    
}



export const SpecialBox = ({
    boxContent,
}: TSpecialBox) => {


    const [inputValue, setInputValue] = useState<number>(0)
    const [value, setValue] = useState<number>(0)

    function debounce(func: any, delay: any) {
      let timeoutId: NodeJS.Timeout
    
      return function(arg: number): void {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(arg);
        }, delay);
      };
    }
  
    const debouncedUpdateDelayed = debounce(
      (inputValue: number) => {
        console.log("debounce")
        setValue(isNaN(inputValue) ? 0 : inputValue);
      },
      1000
    );
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value)
      console.log(value)
      if(value > 100){
        event.preventDefault()
        return
      }
      setInputValue(isNaN(value) ? 0 : value)
      debouncedUpdateDelayed(value)
  
    }
    
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
            <div className="flex flex-col">
              <div>
              <TextField 
                id="input"
                sx={{ width: '100%' }}
                name="input"                     
                type="number"
                value={inputValue.toString()}
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
                onChange={handleChange} 
              />            
              </div>
              <div><h1>{value}</h1></div>
    
            </div>
    
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', 
                gap: 4, 
                position: "absolute",
                bottom: 20,
                
              }}
            > 
                {boxContent.map((x , index) => {          
                  return (
                    <Box  key={index} sx={{ 
                      fontSize: '20px', border: 'solid', width: '100px', height: '100px', textAlign: 'center', paddingTop: '10px'
                    }}>
                      {x.name}
                    </Box>
                  )
                })}
            </Box>
          </Box>


    )


}