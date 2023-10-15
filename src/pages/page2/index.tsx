import { SpecialBox, TBoxDetail, TSpecialBox } from "@/components/common/SpecialBox/SpecialBox"
import { Box, Button, useTheme } from "@mui/material"
import { useState } from "react"


const Page1 = () => {
  const isDarkTheme = useTheme().palette.mode === 'dark'

  const [boxList, setBoxList] = useState<TBoxDetail[]>([
    {
      id: 1,
      name: 'HAN1'
    }
  ])
  
  const handleAddBox = () => {
    const newBoxList = {
      id: boxList[boxList.length - 1].id + 1 ,
      name: "HAN" + (boxList.length + 1)
    }

    setBoxList((prev) => [
      ...prev,
      newBoxList
    ])

  }
  return (
  
      <>
        <Button onClick={handleAddBox} variant="contained" sx={{ color: isDarkTheme ? 'white' : 'black'}}>ADD BOX</Button>
          <SpecialBox 
            boxContent={boxList}
        
          />  
      </>
  )
    


}

export default Page1