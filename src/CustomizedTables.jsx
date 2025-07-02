import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { compdbStore } from "./db";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function CustomizedTables() {
  const navigate = useNavigate();
  const { complaints, addComplaint } = compdbStore();
  console.log("complaints", complaints);

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#f9f9f9", p: 2 }}>
      <Grid sx={{ p: 3.5 }}>
        <button
          style={{
            border: "2px solid black",
            width: 165,
            position: "absolute",
            top: 18,
            right: 3,
            display: "flex",
            gap: 10,
          }}
          onClick={() => navigate("/add")}
        >
          Add a complaint
        </button>
      </Grid>

      <Grid>
        <TableContainer component={Paper} sx={{ maxHeight: "600vh" }}>
          <Table
            stickyHeader
            sx={{ minWidth: 1884 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Complaint id</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Ticket Number</StyledTableCell>
                <StyledTableCell align="left">Customer Type</StyledTableCell>
                <StyledTableCell align="left">Phone Number</StyledTableCell>
                <StyledTableCell align="left">Department</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {complaints.map((complaint, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{complaint.customername}</StyledTableCell>
                  <StyledTableCell>{complaint.ticketnumber}</StyledTableCell>
                  <StyledTableCell>{complaint.customertype}</StyledTableCell>
                  <StyledTableCell>{complaint.phonenumber}</StyledTableCell>
                  <StyledTableCell>{complaint.department}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
}
export default CustomizedTables;