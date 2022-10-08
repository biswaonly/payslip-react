import { DataGrid } from "@mui/x-data-grid";
import { Paper, IconButton } from "@mui/material";
import { Download } from "@mui/icons-material";

/**
 * Downloads a file from the browser
 * @param data - binary data sent from server
 * @param fileName - make sure to pass the extension along with name
 */
export const downloadFile = (data: any, fileName: string) => {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const columns = [
  { field: "id", headerName: "id", width: 220 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "email", width: 250 },
  { field: "age", headerName: "age", width: 80 },
  {
    field: "download",
    headerName: "Download",
    sortable: false,
    renderCell: (params: any) => {
      const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        console.log("CLICKED", params);

        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/payslip/generate/${params.row.id}`
        );
        const userData = await res.blob();

        downloadFile(userData, `payslip-${params.row.id}.pdf`);
      };

      return (
        <IconButton
          aria-label="delete"
          onClick={handleDownload}
          sx={{ margin: "auto" }}
        >
          <Download />
        </IconButton>
      );
    },
  },
];

const Table: React.FC<ITableProps> = ({ userList }) => {
  return (
    <Paper style={{ height: 600, width: "100%", marginTop: "20px" }}>
      <DataGrid
        rows={userList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </Paper>
  );
};

export default Table;
