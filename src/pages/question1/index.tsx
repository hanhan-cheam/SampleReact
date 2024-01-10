import { Box, Button, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"

const Question1 = () => {


    const [inputValue, setInputValue] = useState<number>(0)

    
    const [answer, setAnswer] = useState<number>(0)
    
    const handleCalculate = () => {
        console.log("value", inputValue)

        // TODO when click sum get the number from the digit field, remove the odd number and then count the sum of each character
        // TODO example user input 54321, remove odd number 5, 3, 1 ,left 4, 2, so result of 4 + 2 = 6
        // #region ANSWER HERE: 

        
        //#endregion
        

    }


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setInputValue(parseInt(value))
    }


    return <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
        }}>

        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '300px',
        }}>
            <TextField  
                disabled={false}          
                label={'Digit'}
                sx={{ width: '300px' }}
                value={inputValue}
                type="number"
                placeholder="eg: 1"
                InputLabelProps={{
                shrink: true,
                }}
                onChange={handleInputChange}
            />    

            <TextField  
                disabled={false}          
                label={'Answer'}
                sx={{ width: '300px' }}
                value={answer}
                type="number"
                placeholder="eg: 1"
                InputLabelProps={{
                shrink: true,
                }}             
            />    
        </Box>

        <Button  variant="contained" onClick={handleCalculate} sx={{ color: 'black' }} >Calculate</Button>
    </Box>

}

export default Question1