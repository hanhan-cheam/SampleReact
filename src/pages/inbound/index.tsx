import { SpecialBox, TBoxDetail } from "@/components/common/SpecialBox/SpecialBox"
import { Box, Button } from "@mui/material"




const Inbound = () => {

  // const box: TBoxDetail[] = [
  //   {
  //     id: 1,
  //     name: 'A'
  //   },
  //   {
  //     id: 2,
  //     name: 'B'
  //   },
  //   {
  //     id: 3,
  //     name: 'C'
  //   },
  //   {
  //     id: 4,
  //     name: 'D'
  //   }
  // ]

  const boxList: [] = []

  const count = 1

  const handleAddBox = () => {

    
    boxList.push()

  }


  return (
    

      <>
        <Button onClick={handleAddBox}>ADD BOX</Button>


        {thisPerson.map((personId , index) => {          
              return (
                <SpecialBox 
                  boxContent={box}
                  key={}
                />
              )
            })}



       
      </>



  )
    


}

export default Inbound