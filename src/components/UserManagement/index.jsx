import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import {
  CssIconButton,
  StyledTableCell,
  StyledTableRow,
  useStyles1,
  useStyles2,
} from "./style";
import BlockIcon from "@material-ui/icons/Block";
import SearchBar from "../SearchBar";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
const userList = [
  {
    taiKhoan: "123",
    hoTen: "Ngô123",
    email: "123456hehe@gmail.com",
    soDt: "0387033403",
    matKhau: "123",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "123@admin",
    hoTen: "Thiện Soiii 1",
    email: "anhgioi@gmail.com",
    soDt: "0387033409",
    matKhau: "12344555",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "123q",
    hoTen: "Kiêt chóa",
    email: "123q@gmail.com",
    soDt: "0972696969",
    matKhau: "123",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "1565207820332044",
    hoTen: "Khánh Huỳnh",
    email: "fb_khanh000huynh@gmail.com",
    soDt: "123456",
    matKhau: "1565207820332044",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "account1229",
    hoTen: "Âu Dươngg",
    email: "account1229@gmail.com",
    soDt: "0912346789",
    matKhau: "123456",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "123",
    hoTen: "Ngô123",
    email: "123456hehe@gmail.com",
    soDt: "0387033403",
    matKhau: "123",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "123@admin",
    hoTen: "Thiện Soiii 1",
    email: "anhgioi@gmail.com",
    soDt: "0387033409",
    matKhau: "12344555",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "123q",
    hoTen: "Kiêt chóa",
    email: "123q@gmail.com",
    soDt: "0972696969",
    matKhau: "123",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "1565207820332044",
    hoTen: "Khánh Huỳnh",
    email: "fb_khanh000huynh@gmail.com",
    soDt: "123456",
    matKhau: "1565207820332044",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "account1229",
    hoTen: "Âu Dươngg",
    email: "account1229@gmail.com",
    soDt: "0912346789",
    matKhau: "123456",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "123",
    hoTen: "Ngô123",
    email: "123456hehe@gmail.com",
    soDt: "0387033403",
    matKhau: "123",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "123@admin",
    hoTen: "Thiện Soiii 1",
    email: "anhgioi@gmail.com",
    soDt: "0387033409",
    matKhau: "12344555",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "123q",
    hoTen: "Kiêt chóa",
    email: "123q@gmail.com",
    soDt: "0972696969",
    matKhau: "123",
    maLoaiNguoiDung: "KhachHang",
  },
];

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(username, fullname, email, phone, role) {
  return { username, fullname, email, phone, role };
}

const rows = userList.map((user) =>
  createData(
    user.taiKhoan,
    user.hoTen,
    user.email,
    user.soDt,
    user.maLoaiNguoiDung
  )
);

function UserManagement() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box my={1}>
        <SearchBar />
      </Box>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tài khoản</StyledTableCell>
              <StyledTableCell align="right">Họ tên</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Số điện thoại</StyledTableCell>
              <StyledTableCell align="right">Loại người dùng</StyledTableCell>
              <StyledTableCell align="right">Chỉnh sửa/Xóa</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.username}
                </StyledTableCell>
                <StyledTableCell align="right">{row.fullname}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                <StyledTableCell align="right">{row.role}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditButton />
                  <DeleteButton />
                </StyledTableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

const EditButton = (props) => (
  <CssIconButton aria-label="delete" style={{ color: "orange" }}>
    <CreateIcon />
  </CssIconButton>
);

const DeleteButton = (props) => (
  <CssIconButton aria-label="delete" style={{ color: "red" }}>
    <BlockIcon />
  </CssIconButton>
);

export default UserManagement;
