import {  useState } from "react"
import { InputFieldsMapper, TFields } from "../../components/common/InputFieldsMapper/inputFieldsMapper"

import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useTheme,
} from '@mui/material'

export type TTableData = {
   id: number
   skuCode: string
   skuDescription: string
   color: string
   batchNo: string
}

const defaultFields: TFields[] = [
    {
        label: 'SKU Code',
        name: 'skuCode',
        value: ''
    },
    {
        label: 'SKU Description',
        name: 'skuDescription',
        value: ''
    },
    {
        label: 'Color',
        name: 'color',
        value: ''
    },
    {
        label: 'Batch No.',
        name: 'batchNo',
        value: ''
    }
    
] 


const Question2 = () => {

    const [inputFields, setInputFields] = useState<TFields[]>(defaultFields)

    const [targetRowId, setTargetRowId] = useState<number>(0)

    const [tableData, setTableData] = useState<TTableData[]>([
        {
            id: 1,
            skuCode: 'SKU001',
            skuDescription: 'SKU001',
            color: 'BLUE',
            batchNo: 'B0001'
        },
        {
            id: 2,
            skuCode: 'SKU002',
            skuDescription: 'SKU002',
            color: 'RED',
            batchNo: 'B0001'
        },
        {
            id: 3,
            skuCode: 'SKU003',
            skuDescription: 'SKU003',
            color: 'ORANGE',
            batchNo: 'B0001'
        },
    ])

    const isDarkTheme = useTheme().palette.mode === 'dark'

    const handleEditRow = (id: number) => {
        const targetRow =  tableData.find(x => x.id === id)
        if(targetRow){
            const updatedFields = inputFields.map((x) => {
                return {
                  ...x,
                  value: targetRow[x.name as keyof TTableData] as string
                }
            })
            setInputFields(updatedFields)
            setTargetRowId(targetRow.id)
        }
    }

    const handleUpdateRow = () => {

       
        // TODO expected result : When click on Update Rows, update the table with new data
        // TODO after update the table ,the default row sequence must also sort by id accending
        // TODO ANSWER PUT INSIDE region
        // #region ANSWER HERE:  
       

  
        
     


        //#endregion

        const clearsFieldsValue = inputFields.map((x) => {          
            return {
              ...x,
              value: ''
            }
        })
        setInputFields(clearsFieldsValue)
        setTargetRowId(0)
        alert("UPDATE SUCCESS")
    }

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const value = event.target.value
        
        const updatedFields = inputFields.map((x) => {
            if(x.name === name){
              return {
                ...x,
                value
              }
            }else{
              return x
            } 
          })
       
          setInputFields(updatedFields)
    }
    
    return (
        <Box>
            {`Current Edited Row : ${targetRowId}`}
            <Box sx={{
                paddingTop: '15px',
                display: 'flex',
                flexDirection: 'row',
                gap: '20px'
            }}>
                {inputFields.map((x) => {        
                    return (               
                        <>
                            <InputFieldsMapper                           
                                onTextFieldChange={handleTextFieldChange}
                                label={x.label}                       
                                name={x.name}
                                value={x.value}
                            />
                        </>
                       )
                })} 
            </Box>

            <TableContainer
                component={Paper}
                sx={{
                    marginTop: '20px',
                    position: 'relative',
                    minHeight: 250,
                    maxHeight: 480,
                }}
            >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow> 
                            <TableCell>ID</TableCell>             
                            <TableCell>SKU Code</TableCell>
                            <TableCell>SKU Description</TableCell>
                            <TableCell>Color</TableCell>                    
                            <TableCell>Batch No</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                    {tableData.map((row, index) => {
                    
                    return (
                       
                            <TableRow key={index}>
                                  <TableCell>{row.id}</TableCell>
                                <TableCell>{row.skuCode}</TableCell>
                                <TableCell>{row.skuDescription}</TableCell>
                                <TableCell>{row.color}</TableCell>
                                <TableCell>{row.batchNo}</TableCell>
                                <TableCell>
                                    <Button onClick={() => {
                                        handleEditRow(row.id)
                                    }} variant="contained" sx={{  color: isDarkTheme ? 'white' : 'black'}}>EDIT ROWS</Button>      

                                </TableCell>
                            </TableRow>
                     
                    )
                    })}
                    </TableBody>
            
                </Table>
            </TableContainer>   

            <Box sx={{
                paddingTop: '10px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>         
            <Button onClick={handleUpdateRow} disabled={targetRowId === 0} variant="contained" sx={{  color: isDarkTheme ? 'white' : 'black'}}>UPDATE ROWS</Button>   
            </Box>   
        </Box>
    )
    
}

export default Question2