// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import CancelIcon from "@mui/icons-material/Close";
// import {
//   GridRowsProp,
//   GridRowModesModel,
//   GridRowModes,
//   DataGrid,
//   GridColDef,
//   GridActionsCellItem,
//   GridEventListener,
//   GridRowId,
//   GridRowModel,
//   GridRowEditStopReasons,
//   GridToolbarQuickFilter,
//   GridSlots,
//   GridToolbarFilterButton,
// } from "@mui/x-data-grid";
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomId,
//   randomArrayItem,
// } from "@mui/x-data-grid-generator";
// import { styled } from '@mui/system';

// const roles = ["Code", "Image", "Name", "Category", "Shipping From","Shipping To","Place Order","Status"];

// const statuses = ["Pending", "Shipped", "Delivered"];
// const randomStatus = () => randomArrayItem(statuses);
// const randomRole = () => {
//   return randomArrayItem(roles);
// };
// const initialRows: GridRowsProp = Array.from({ length: 10 }, (_, index) => ({
//   id: randomId(),
//   code: `Code-${index + 1}`,
//   image: "/beauty.jpg",
//   name: randomTraderName(),
//   category: "Electronics",
//   "shipping from": "New York",
//   "shipping to": "Los Angeles",
//   "place order": "1/11/2121",
//   status: randomArrayItem(["Pending", "Delivered", "Canceled"]),
//   action: "", 
// }));

// // Styled component
// const StyledQuickFilter = styled(GridToolbarQuickFilter)(({ theme }) => ({
//   border: '1px solid #000',
//   borderRadius: '50px',
//   backgroundColor:'white',
//   padding: '2px 10px' , 
//   '& .MuiInputBase-root': {
//     borderRadius: '50%',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderRadius: '50%',
//     },
//   },
// }));
// const StyledFilterButton = styled(Button)(({ theme }) => ({
//   border: '1px solid #000',
//   backgroundColor: 'white', // Customize the background color as needed
//   color: 'black', // White text
//   borderRadius: '50px', // 50px radius
//   padding: '5px 14px', // Adjust the padding as needed
//   textTransform: 'none', // To prevent uppercase transformation
//   '&:hover': {
//     backgroundColor: 'white', // Customize the hover background color as needed
//   },
// }));

// function QuickSearchToolbar() {
//   return (
//     <Box
//       sx={{
//         p: 0.5,
//         pb: 0,
//       }}
//     >
//       <div className=" p-3 items-center flex justify-between flex-wrap bg-[#F3F4F4] gap-2">
//         <h1 className="text-xl font-extrabold ">Orders List</h1>
//         <div className="gap-1">
//           <StyledQuickFilter
//             quickFilterParser={(searchInput: string) =>
//               searchInput
//                 .split(',')
//                 .map((value) => value.trim())
//                 .filter((value) => value !== '')
//             }
//           />
//               <StyledFilterButton>
//             Filter
//           </StyledFilterButton>
//         </div>
//       </div>
//     </Box>
//   );
// }

// export default function FullFeaturedCrudGrid() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
//     {}
//   );

//   const handleRowEditStop: GridEventListener<"rowEditStop"> = (
//     params,
//     event
//   ) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const handleEditClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id: GridRowId) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id: GridRowId) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow!.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow: GridRowModel) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };
//  //@ts-ignore
//   const columns: GridColDef[] = [
//     {
//       field: "code",
//       headerName: "Code",
//       type: "number",
//       width: 120,
//       align: "left",
//       headerAlign: "left",
//       editable: true,
//     },
//     {
//       field: "image",
//       headerName: "Image",
//       width: 120,
//       display:"flex",
//       renderCell: (params) => (
//         <img
//           src={params.value}
//           alt="profile"
//           style={{ width: '30px', height: '30px',alignSelf: 'center',}}
//         />
//       ),
//     },
//     { field: "name", headerName: "Name", width: 120, editable: true },
//     ,
//     { field: "category", headerName: "Category", width: 120, editable: true },
//     ,
//     { field: "shipping from", headerName: "Shipping From", width: 120, editable: true },
//     ,
//     { field: "shipping to", headerName: "Shipping To", width: 120, editable: true },

//     // {
//     //   field: "place order",
//     //   headerName: "Place Order",
//     //   type: "date",
//     //   width: 180,
//     //   editable: true,
//     // },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//       editable: true,
//       type: "singleSelect",
//       valueOptions: ["Pending", "Delivered", "Canceled"],
//     },

//     {
//       field: "actions",
//       type: "actions",
//       headerName: "Actions",
//       width: 120,
//       cellClassName: "actions",
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               sx={{
//                 color: "primary.main",
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         height: 500,
//         width: "100%",
//         "& .actions": {
//           color: "text.secondary",
//         },
//         "& .textPrimary": {
//           color: "text.primary",
//         },
//       }}
//     >
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowModesModelChange={handleRowModesModelChange}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         slots={{
//           toolbar: QuickSearchToolbar as GridSlots["toolbar"],
//         }}
//         slotProps={{
//           toolbar: { setRows, setRowModesModel },
//         }}
//       />
//     </Box>
//   );
// }

'use client'
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
  action: "", 
}));

// Styled component
const StyledQuickFilter = styled(GridToolbarQuickFilter)(({ theme }) => ({
  border: '1px solid #000',
  borderRadius: '50px',
  backgroundColor:'white',
  padding: '2px 10px' , 
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
      <div className=" p-3 items-center flex justify-between flex-wrap bg-[#F3F4F4] gap-2">
        <h1 className="text-xl font-extrabold ">Orders List</h1>
        <div className="gap-1">
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

export default function Table() {
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
              key={`${id}-save`}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={`${id}-cancel`}
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
            key={`${id}-edit`}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={`${id}-delete`}
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
