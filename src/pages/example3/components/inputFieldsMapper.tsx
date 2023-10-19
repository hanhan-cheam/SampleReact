import { TextField } from "@mui/material"
import { ChangeEvent } from "react"

export type TFields = {
    name: string
    label: string
    value: string
}
  

export type TInputFIelds = {
    onTextFieldChange?: (inputValue: ChangeEvent<HTMLInputElement>, key: string) => void  
  
} & TFields


export const InputFieldsMapper = ({
    onTextFieldChange,
    name,
    label,
    value,
  }: TInputFIelds) => {



    return  <>

        <TextField
            
            disabled={false}
            id={name}
            label={label}
            sx={{ width: '100%' }}
            name={name}
            value={value ?? ''}
            placeholder="eg: 1"
            InputLabelProps={{
            shrink: true,
            }}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>{

        
                if(onTextFieldChange){
                    onTextFieldChange(event, name)
                }
            }
                    
        }
        />
    
    </>
       
    
 


   
          
     
}