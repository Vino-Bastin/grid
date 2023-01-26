import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const sx = {
  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#607D8B",
    borderBottom: "none",
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: "#ECEFF1",
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    backgroundColor: "#607D8B",
  },
  "& .MuiCheckbox-root": {
    color: `#37474F !important`,
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: `#37474F !important`,
  },
};

const Grid = () => {
  const [rowData, setRowData] = useState([]);
  const [gridType, setGridType] = useState("Mui Data Grid");
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const columnDefs = [
    {
      headerName: "Make",
      field: "make",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Model",
      field: "model",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Price",
      field: "price",
      sortable: true,
      filter: true,
      flex: 1,
    },
  ];

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        className="ag-theme-alpine"
        width={matches ? "70%" : "100%"}
        height={matches ? "70%" : "90%"}
      >
        {gridType === "Ag Grid React" ? (
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            animateRows={true}
            rowSelection="multiple"
          />
        ) : (
          <Box sx={sx} height="100%">
            <DataGrid
              checkboxSelection
              getRowId={(row) =>
                row.price + row.make + row.model + Math.random()
              }
              rows={rowData}
              columns={columnDefs}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        )}
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={() =>
            setGridType(
              gridType === "Mui Data Grid" ? "Ag Grid React" : "Mui Data Grid"
            )
          }
          sx={{ m: 1, minWidth: 120 }}
        >
          {gridType}
        </Button>
        <Divider orientation="vertical" />
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{ m: 1, minWidth: 120 }}
        >
          Home
        </Button>
      </Box>
    </Box>
  );
};

export default Grid;
