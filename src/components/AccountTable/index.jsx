import React from "react";
import { useSelector } from "react-redux";
import Search from "../../components/Search";
import { Box } from "@material-ui/core";
import Table from "../DataTable";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./style";

const AccountTable = (props) => {
  const accounts = useSelector((state) => state.accounts);
  const styles = useStyles();

  let headers = [
    "Tên tài khoản",
    "Họ và tên",
    "Loại người dùng",
    "Email",
    "Số điện thoại",
    "Chỉnh sửa/Xoá",
  ];

  let data = accounts.map((account) => ({
    id: account.taiKhoan,
    fullName: account.hoTen,
    type: account.maLoaiNguoiDung,
    emal: account.email,
    phoneNumber: account.soDt,
    editDelete: (
      <>
        <IconButton className={styles.iconButton}>
          <CreateIcon color="primary" />
        </IconButton>
        <IconButton className={styles.iconButton}>
          <DeleteIcon color="error" />
        </IconButton>
      </>
    ),
  }));

  return (
    <>
      <Box className={styles.search}>
        <Search />
      </Box>
      <Box className={styles.table}>
        <Table headers={headers} rows={data} maxWidth={1000} maxHeight={500} />
      </Box>
    </>
  );
};

export default AccountTable;
