import {
  SpecialBox,
  TBoxDetail,
  TSpecialBox,
} from "@/components/common/SpecialBox/SpecialBox";
import {
  SpecialBoxDetailInput,
  SpecialBoxV2,
  TSmallBoxDetail,
  TSpecialBoxProps,
} from "@/components/common/SpecialBox/SpecialBoxV2";
import { ChangeEvent, useState } from "react";
import { InputFieldsMapper, TFields } from "./components/inputFieldsMapper";

import InventoryIcon from "@mui/icons-material/Inventory";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
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
  Typography,
  useTheme,
} from "@mui/material";

export type TTableData = {
  id: number;
  skuCode: string;
  skuDescription: string;
  color: string;
  batchNo: string;
};

const defaultFields: TFields[] = [
  {
    label: "SKU Code",
    name: "skuCode",
    value: "",
  },
  {
    label: "SKU Description",
    name: "skuDescription",
    value: "",
  },
  {
    label: "Color",
    name: "color",
    value: "",
  },
  {
    label: "Batch No.",
    name: "batchNo",
    value: "",
  },
];

const Example3 = () => {
  const [inputFields, setInputFields] = useState<TFields[]>(defaultFields);

  const [targetRowId, setTargetRowId] = useState<number>(0);

  const [tableData, setTableData] = useState<TTableData[]>([]);

  const isDarkTheme = useTheme().palette.mode === "dark";

  const handleAddRow = () => {
    const newId = tableData.map((x) => x.id);
    const currentMax = tableData.length > 0 ? Math.max(...newId) + 1 : 1;
    const value = inputFields.map((x) => x.value);

    const payload = {
      id: currentMax,
      skuCode: value[0],
      skuDescription: value[1],
      color: value[2],
      batchNo: value[3],
    };
    setTableData((prev) => [...prev, payload]);

    const clearsFieldsValue = inputFields.map((x) => {
      return {
        ...x,
        value: "",
      };
    });

    setInputFields(clearsFieldsValue);
  };

  const handleEditRow = (id: number) => {
    const targetRow = tableData.find((x) => x.id === id);

    if (targetRow) {
      const updatedFields = inputFields.map((x) => {
        return {
          ...x,
          value: targetRow[x.name as keyof TTableData] as string,
        };
      });

      setInputFields(updatedFields);
      setTargetRowId(targetRow.id);
    }
  };

  const handleUpdateRow = () => {
    const targetRow = tableData
      .filter((x) => x.id === targetRowId)
      .map((y) => {
        return {
          ...y,
          skuCode: inputFields.find((x) => x.name === "skuCode")
            ?.value as string,
          skuDescription: inputFields.find((x) => x.name === "skuDescription")
            ?.value as string,
          color: inputFields.find((x) => x.name === "color")?.value as string,
          batchNo: inputFields.find((x) => x.name === "batchNo")
            ?.value as string,
        };
      });
    const nonTargetRow = tableData.filter((x) => x.id !== targetRowId);

    const newRows = targetRow.concat(nonTargetRow);

    setTableData(newRows);

    const clearsFieldsValue = inputFields.map((x) => {
      return {
        ...x,
        value: "",
      };
    });

    setInputFields(clearsFieldsValue);

    alert("UPDATE SUCCESS");
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = event.target.value;

    const updatedFields = inputFields.map((x) => {
      if (x.name === name) {
        return {
          ...x,
          value,
        };
      } else {
        return x;
      }
    });

    setInputFields(updatedFields);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
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
          );
        })}
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          position: "relative",
          minHeight: 250,
          maxHeight: 480,
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
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
                  <TableCell>{row.skuCode}</TableCell>
                  <TableCell>{row.skuDescription}</TableCell>
                  <TableCell>{row.color}</TableCell>
                  <TableCell>{row.batchNo}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        handleEditRow(row.id);
                      }}
                      variant="contained"
                      sx={{ color: isDarkTheme ? "white" : "black" }}
                    >
                      EDIT ROWS
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={handleAddRow}
          variant="outlined"
          sx={{ color: isDarkTheme ? "white" : "black" }}
        >
          ADD ROWS
        </Button>
        <Button
          onClick={handleUpdateRow}
          disabled={false}
          variant="outlined"
          sx={{ color: isDarkTheme ? "white" : "black" }}
        >
          UPDATE ROWS
        </Button>
      </Box>
    </Box>
  );
};

export default Example3;
