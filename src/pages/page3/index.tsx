import { SpecialBox, TBoxDetail, TSpecialBox } from "@/components/common/SpecialBox/SpecialBox"
import {  SpecialBoxDetailInput, SpecialBoxV2, TSmallBoxDetail, TSpecialBoxProps } from "@/components/common/SpecialBox/SpecialBoxV2"
import { Box, Button, useTheme } from "@mui/material"
import { ChangeEvent, useState } from "react"






const Page1 = () => {
  const isDarkTheme = useTheme().palette.mode === 'dark'

  const [boxList, setBoxList] = useState<TBoxDetail[]>([
    {
      id: 1,
      name: 'HAN1'
    }
  ])

  const [bigBox, setBigBox] = useState<SpecialBoxDetailInput[]>([])
  
  const handleAddBox = () => {
    const currenntTitle =  bigBox.length > 0 ? `Sample ${bigBox.length + 1}`  : `Sample 1`
    const newBigBoxDetail = {
      title: currenntTitle,   
      inputValue: 0,
    }
    setBigBox((prev)=> [
      ...prev,
      newBigBoxDetail
    ])
  }

  //#region //TODO



  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>, title: string) => {
    const value = parseInt(event.target.value)
    const updatedBigBox = bigBox.map((x) => {
      if(x.title === title){
        return {
          ...x,
          inputValue: value
        }
      }else{
        return x
      } 
    })
 
    setBigBox(updatedBigBox)
  }

  //#endregion
  return (
      <>
        <Button onClick={handleAddBox} variant="contained" sx={{ color: isDarkTheme ? 'white' : 'black'}}>ADD BOX</Button>          
          {bigBox.map((x) => {          
            return (
              <SpecialBoxV2 
                key={x.title}
                title={x.title}         
                inputValue={x.inputValue}
                onTextFieldChange={(e) => {
                  handleTextFieldChange(e, x.title)
                }}
              />  
            )
          })}                  
      </>
  )
    


}

export default Page1