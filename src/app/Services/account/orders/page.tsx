import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridToolbarQuickFilter,
  GridSlots,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";
import { styled } from '@mui/system';

const roles = ["Code", "Image", "Name", "Category", "Shipping From","Shipping To","Place Order","Status"];

const statuses = ["Pending", "Shipped", "Delivered"];
const randomStatus = () => randomArrayItem(statuses);
const randomRole = () => {
  return randomArrayItem(roles);
};
const initialRows: GridRowsProp = Array.from({ length: 10 }, (_, index) => ({
  id: randomId(),
  code: `Code-${index + 1}`,
  image: "/beauty.jpg",
  name: randomTraderName(),
  category: "Electronics",
  "shipping from": "New York",
  "shipping to": "Los Angeles",
  "place order": "1/11/2121",
  status: randomArrayItem(["Pending", "Delivered", "Canceled"]),
  action: "", // Placeholder for action column
}));

// const initialRows: GridRowsProp = [
//   {
//     id: randomId(),
//     code: "P123",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "New York",
//     shippingTo: "Los Angeles",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
//   {
//     id: randomId(),
//     code: "P124",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "Chicago",
//     shippingTo: "Houston",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
//   {
//     id: randomId(),
//     code: "P125",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "San Francisco",
//     shippingTo: "Seattle",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
//   {
//     id: randomId(),
//     code: "P126",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "Miami",
//     shippingTo: "Atlanta",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
//   {
//     id: randomId(),
//     code: "P127",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "Dallas",
//     shippingTo: "Denver",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
//   {
//     id: randomId(),
//     code: "P128",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "Boston",
//     shippingTo: "Philadelphia",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
//   {
//     id: randomId(),
//     code: "P129",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "Washington D.C.",
//     shippingTo: "Baltimore",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
//   {
//     id: randomId(),
//     code: "P130",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "San Diego",
//     shippingTo: "Phoenix",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
//   {
//     id: randomId(),
//     code: "P131",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "Las Vegas",
//     shippingTo: "Salt Lake City",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
//   {
//     id: randomId(),
//     code: "P132",
//     image: "/beauty.jpg",
//     name: randomTraderName(),
//     category: randomCategory(),
//     shippingFrom: "Austin",
//     shippingTo: "San Antonio",
//     placeOrder: randomCreatedDate(),
//     status: randomStatus(),
//   },
// ];
// Styled component
const StyledQuickFilter = styled(GridToolbarQuickFilter)(({ theme }) => ({
  border: '1px solid #000', // Customize the border color as needed
  borderRadius: '50px',
  backgroundColor:'white',
  padding: '2px 10px' , // Adjust the padding as needed
  '& .MuiInputBase-root': {
    borderRadius: '50%',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '50%',
    },
  },
}));
const StyledFilterButton = styled(Button)(({ theme }) => ({
  border: '1px solid #000',
  backgroundColor: 'white', // Customize the background color as needed
  color: 'black', // White text
  borderRadius: '50px', // 50px radius
  padding: '5px 14px', // Adjust the padding as needed
  textTransform: 'none', // To prevent uppercase transformation
  '&:hover': {
    backgroundColor: 'white', // Customize the hover background color as needed
  },
}));

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <div className=" p-3 items-center flex justify-between bg-[#F3F4F4]">
        <h1 className="text-xl font-extrabold ">Orders List</h1>
        <div className="space-x-1">
          <StyledQuickFilter
            quickFilterParser={(searchInput: string) =>
              searchInput
                .split(',')
                .map((value) => value.trim())
                .filter((value) => value !== '')
            }
          />
              <StyledFilterButton>
            Filter
          </StyledFilterButton>
        </div>
      </div>
    </Box>
  );
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
 //@ts-ignore
  const columns: GridColDef[] = [
    {
      field: "code",
      headerName: "Code",
      type: "number",
      width: 120,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "image",
      headerName: "Image",
      width: 120,
      headerAlign:"center",
      display:"flex",
      renderCell: (params) => (
        <img
          src={params.value}
          alt="profile"
          style={{ width: '30px', height: '30px',alignSelf: 'center',}}
        />
      ),
    },
    { field: "name", headerName: "Name", width: 120, editable: true },
    ,
    { field: "category", headerName: "Category", width: 120, editable: true },
    ,
    { field: "shipping from", headerName: "Shipping From", width: 120, editable: true },
    ,
    { field: "shipping to", headerName: "Shipping To", width: 120, editable: true },

    // {
    //   field: "place order",
    //   headerName: "Place Order",
    //   type: "date",
    //   width: 180,
    //   editable: true,
    // },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Pending", "Delivered", "Canceled"],
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 120,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: QuickSearchToolbar as GridSlots["toolbar"],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
