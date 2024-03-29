import Axios from "axios";
class AccountService {
  fetchAccounts(keyWord) {
    const url = keyWord
      ? `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP00&tuKhoa=${keyWord}`
      : `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00`;
    return Axios({
      method: "GET",
      url: url,
    });
  }
  fetchAccountTypes() {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung
      `,
    });
  }
  addUser(data, token) {
    return Axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteUser(idUser, token) {
    return Axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${idUser}
      `,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  editUser(data, token) {
    return Axios({
      method: "PUT",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  editMovie(data, token) {
    return Axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  addMovie(data, token) {
    return Axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteMovie(idMovie, token) {
    return Axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${idMovie}
      `,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  upLoadPoster(data) {
    return Axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
      data,
    });
  }

  addShowTime(data, token) {
    return Axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default AccountService;
