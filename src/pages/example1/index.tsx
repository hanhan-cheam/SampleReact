import { SpecialBox, TBoxDetail, TSpecialBox } from "@/components/common/SpecialBox/SpecialBox"
import { Box, Button, useTheme } from "@mui/material"
import { useState } from "react"


const Example1 = () => {
  const isDarkTheme = useTheme().palette.mode === 'dark'

  const [boxList, setBoxList] = useState<TBoxDetail[]>([])
  
  const handleAddBox = () => {
    const currenntTitle =  boxList.length > 0 ? `Sample ${boxList.length + 1}`  : `Sample 1`
    const newBoxDetail = {
      title: currenntTitle,   
      inputValue: 0,
    }
    setBoxList((prev)=> [
      ...prev,
      newBoxDetail
    ])
  }


  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>, title: string) => {
    const value = parseInt(event.target.value)
    const updatedBoxList = boxList.map((x) => {
      if(x.title === title){
        return {
          ...x,
          inputValue: value
        }
      }else{
        return x
      } 
    })
 
    setBoxList(updatedBoxList)
  }

  return (
      <>
        <Button onClick={handleAddBox} variant="contained" sx={{ color: isDarkTheme ? 'white' : 'black'}}>ADD BOX</Button>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', 
              gap: 4, 
              position: "absolute", 
            }}
          > 
            {boxList.map((x) => {          
              return (
                <SpecialBox   
                  key={x.title}
                  title={x.title}         
                  inputValue={x.inputValue}                 
                  onTextFieldChange={(e) => {
                    handleTextFieldChange(e, x.title)
                  }}    
                />
              )
            })} 
          </Box> 
      </>
  )
    


}

export default Example1