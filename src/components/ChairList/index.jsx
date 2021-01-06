import { Box, Grid } from "@material-ui/core";
import React, { Component } from "react";
import Chair from "../chair";
import useStyles from "./style";

// const chairList = [
//   { SoGhe: 1, TenGhe: "số 1 ", Gia: 100, TrangThai: false },
//   { SoGhe: 2, TenGhe: "số 2 ", Gia: 100, TrangThai: false },
//   { SoGhe: 3, TenGhe: "số 3 ", Gia: 100, TrangThai: false },
//   { SoGhe: 4, TenGhe: "số 4 ", Gia: 100, TrangThai: false },
//   { SoGhe: 5, TenGhe: "số 5 ", Gia: 100, TrangThai: false },
//   { SoGhe: 6, TenGhe: "số 6 ", Gia: 100, TrangThai: false },
//   { SoGhe: 7, TenGhe: "số 7 ", Gia: 100, TrangThai: false },
//   { SoGhe: 8, TenGhe: "số 7 ", Gia: 100, TrangThai: false },
//   { SoGhe: 9, TenGhe: "số 9 ", Gia: 100, TrangThai: false },
//   { SoGhe: 10, TenGhe: "số 10 ", Gia: 100, TrangThai: false },
//   { SoGhe: 11, TenGhe: "số 11 ", Gia: 100, TrangThai: false },
//   { SoGhe: 12, TenGhe: "số 12 ", Gia: 100, TrangThai: false },
//   { SoGhe: 13, TenGhe: "số 13 ", Gia: 100, TrangThai: false },
//   { SoGhe: 14, TenGhe: "số 14 ", Gia: 100, TrangThai: false },
//   { SoGhe: 15, TenGhe: "số 15 ", Gia: 100, TrangThai: false },
//   { SoGhe: 16, TenGhe: "số 16 ", Gia: 100, TrangThai: false },
//   { SoGhe: 17, TenGhe: "số 17 ", Gia: 100, TrangThai: false },
//   { SoGhe: 18, TenGhe: "số 18 ", Gia: 100, TrangThai: false },
//   { SoGhe: 19, TenGhe: "số 19 ", Gia: 100, TrangThai: false },
//   { SoGhe: 20, TenGhe: "số 20 ", Gia: 100, TrangThai: false },
//   { SoGhe: 21, TenGhe: "số 21 ", Gia: 100, TrangThai: false },
//   { SoGhe: 22, TenGhe: "số 22 ", Gia: 100, TrangThai: false },
//   { SoGhe: 23, TenGhe: "số 23 ", Gia: 100, TrangThai: false },
//   { SoGhe: 24, TenGhe: "số 24 ", Gia: 100, TrangThai: false },
//   { SoGhe: 25, TenGhe: "số 25 ", Gia: 100, TrangThai: false },
//   { SoGhe: 26, TenGhe: "số 26 ", Gia: 100, TrangThai: false },
//   { SoGhe: 27, TenGhe: "số 27 ", Gia: 100, TrangThai: false },
//   { SoGhe: 28, TenGhe: "số 28 ", Gia: 100, TrangThai: false },
//   { SoGhe: 29, TenGhe: "số 29 ", Gia: 100, TrangThai: false },
//   { SoGhe: 30, TenGhe: "số 30 ", Gia: 100, TrangThai: true },
//   { SoGhe: 31, TenGhe: "số 31 ", Gia: 100, TrangThai: false },
//   { SoGhe: 32, TenGhe: "số 32 ", Gia: 100, TrangThai: false },
//   { SoGhe: 33, TenGhe: "số 33 ", Gia: 100, TrangThai: false },
//   { SoGhe: 34, TenGhe: "số 34 ", Gia: 100, TrangThai: false },
//   { SoGhe: 35, TenGhe: "số 35 ", Gia: 100, TrangThai: false },
// ];

const list = {
  thongTinPhim: {
    maLichChieu: 15290,
    tenCumRap: "BHD Star Cineplex - 3/2",
    tenRap: "Rạp 2",
    diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    tenPhim: "Trainwreck",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
    ngayChieu: "01/01/2019",
    gioChieu: "12:01"
  },
  danhSachGhe: [
    {
      maGhe: 47561,
      tenGhe: "01",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "01",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47562,
      tenGhe: "02",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "02",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47563,
      tenGhe: "03",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "03",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47564,
      tenGhe: "04",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "04",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47565,
      tenGhe: "05",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "05",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47566,
      tenGhe: "06",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "06",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47567,
      tenGhe: "07",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "07",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47568,
      tenGhe: "08",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "08",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47569,
      tenGhe: "09",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "09",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47570,
      tenGhe: "10",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "10",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47571,
      tenGhe: "11",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "11",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47572,
      tenGhe: "12",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "12",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47573,
      tenGhe: "13",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "13",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47574,
      tenGhe: "14",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "14",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47575,
      tenGhe: "15",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "15",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47576,
      tenGhe: "16",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "16",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47577,
      tenGhe: "17",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "17",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47578,
      tenGhe: "18",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "18",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47579,
      tenGhe: "19",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "19",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47580,
      tenGhe: "20",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "20",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47581,
      tenGhe: "21",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "21",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47582,
      tenGhe: "22",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "22",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47583,
      tenGhe: "23",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "23",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47584,
      tenGhe: "24",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "24",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47585,
      tenGhe: "25",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "25",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47586,
      tenGhe: "26",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "26",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47587,
      tenGhe: "27",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "27",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47588,
      tenGhe: "28",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "28",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47589,
      tenGhe: "29",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "29",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47590,
      tenGhe: "30",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "30",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47591,
      tenGhe: "31",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "31",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47592,
      tenGhe: "32",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "32",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47593,
      tenGhe: "33",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "33",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47594,
      tenGhe: "34",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "34",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47595,
      tenGhe: "35",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "35",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47596,
      tenGhe: "36",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "36",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47597,
      tenGhe: "37",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "37",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47598,
      tenGhe: "38",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "38",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47599,
      tenGhe: "39",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "39",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47600,
      tenGhe: "40",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "40",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47601,
      tenGhe: "41",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "41",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47602,
      tenGhe: "42",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "42",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47603,
      tenGhe: "43",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "43",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47604,
      tenGhe: "44",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "44",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47605,
      tenGhe: "45",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "45",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47606,
      tenGhe: "46",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "46",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47607,
      tenGhe: "47",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "47",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47608,
      tenGhe: "48",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "48",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47609,
      tenGhe: "49",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "49",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47610,
      tenGhe: "50",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "50",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47611,
      tenGhe: "51",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "51",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47612,
      tenGhe: "52",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "52",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47613,
      tenGhe: "53",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "53",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47614,
      tenGhe: "54",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "54",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47615,
      tenGhe: "55",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "55",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47616,
      tenGhe: "56",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "56",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47617,
      tenGhe: "57",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "57",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47618,
      tenGhe: "58",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "58",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47619,
      tenGhe: "59",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "59",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47620,
      tenGhe: "60",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "60",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47621,
      tenGhe: "61",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "61",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47622,
      tenGhe: "62",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "62",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47623,
      tenGhe: "63",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "63",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47624,
      tenGhe: "64",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "64",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47625,
      tenGhe: "65",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "65",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47626,
      tenGhe: "66",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "66",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47627,
      tenGhe: "67",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "67",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47628,
      tenGhe: "68",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "68",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47629,
      tenGhe: "69",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "69",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47630,
      tenGhe: "70",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "70",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47631,
      tenGhe: "71",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "71",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47632,
      tenGhe: "72",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "72",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47633,
      tenGhe: "73",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "73",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47634,
      tenGhe: "74",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "74",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47635,
      tenGhe: "75",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "75",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47636,
      tenGhe: "76",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "76",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47637,
      tenGhe: "77",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "77",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47638,
      tenGhe: "78",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "78",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47639,
      tenGhe: "79",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "79",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47640,
      tenGhe: "80",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "80",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47641,
      tenGhe: "81",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "81",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47642,
      tenGhe: "82",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "82",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47643,
      tenGhe: "83",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "83",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47644,
      tenGhe: "84",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "84",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47645,
      tenGhe: "85",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "85",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47646,
      tenGhe: "86",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "86",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47647,
      tenGhe: "87",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "87",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47648,
      tenGhe: "88",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "88",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47649,
      tenGhe: "89",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "89",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47650,
      tenGhe: "90",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "90",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47651,
      tenGhe: "91",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "91",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47652,
      tenGhe: "92",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "92",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47653,
      tenGhe: "93",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "93",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47654,
      tenGhe: "94",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "94",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47655,
      tenGhe: "95",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "95",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47656,
      tenGhe: "96",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "96",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47657,
      tenGhe: "97",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "97",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47658,
      tenGhe: "98",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "98",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47659,
      tenGhe: "99",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "99",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47660,
      tenGhe: "100",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "100",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47661,
      tenGhe: "101",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "101",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47662,
      tenGhe: "102",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "102",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47663,
      tenGhe: "103",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "103",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47664,
      tenGhe: "104",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "104",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47665,
      tenGhe: "105",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "105",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47666,
      tenGhe: "106",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "106",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47667,
      tenGhe: "107",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "107",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47668,
      tenGhe: "108",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "108",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47669,
      tenGhe: "109",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "109",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47670,
      tenGhe: "110",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "110",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47671,
      tenGhe: "111",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "111",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47672,
      tenGhe: "112",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "112",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47673,
      tenGhe: "113",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "113",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47674,
      tenGhe: "114",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "114",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47675,
      tenGhe: "115",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "115",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47676,
      tenGhe: "116",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "116",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47677,
      tenGhe: "117",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "117",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47678,
      tenGhe: "118",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "118",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47679,
      tenGhe: "119",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "119",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47680,
      tenGhe: "120",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "120",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47681,
      tenGhe: "121",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "121",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47682,
      tenGhe: "122",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "122",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47683,
      tenGhe: "123",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "123",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47684,
      tenGhe: "124",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "124",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47685,
      tenGhe: "125",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "125",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47686,
      tenGhe: "126",
      maRap: 452,
      loaiGhe: "Vip",
      stt: "126",
      giaVe: 90000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47687,
      tenGhe: "127",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "127",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47688,
      tenGhe: "128",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "128",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47689,
      tenGhe: "129",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "129",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47690,
      tenGhe: "130",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "130",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47691,
      tenGhe: "131",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "131",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47692,
      tenGhe: "132",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "132",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47693,
      tenGhe: "133",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "133",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47694,
      tenGhe: "134",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "134",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47695,
      tenGhe: "135",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "135",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47696,
      tenGhe: "136",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "136",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47697,
      tenGhe: "137",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "137",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47698,
      tenGhe: "138",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "138",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47699,
      tenGhe: "139",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "139",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47700,
      tenGhe: "140",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "140",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47701,
      tenGhe: "141",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "141",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47702,
      tenGhe: "142",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "142",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47703,
      tenGhe: "143",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "143",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47704,
      tenGhe: "144",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "144",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47705,
      tenGhe: "145",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "145",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47706,
      tenGhe: "146",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "146",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47707,
      tenGhe: "147",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "147",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47708,
      tenGhe: "148",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "148",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47709,
      tenGhe: "149",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "149",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47710,
      tenGhe: "150",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "150",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47711,
      tenGhe: "151",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "151",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47712,
      tenGhe: "152",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "152",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47713,
      tenGhe: "153",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "153",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47714,
      tenGhe: "154",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "154",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47715,
      tenGhe: "155",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "155",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47716,
      tenGhe: "156",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "156",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47717,
      tenGhe: "157",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "157",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47718,
      tenGhe: "158",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "158",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47719,
      tenGhe: "159",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "159",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    },
    {
      maGhe: 47720,
      tenGhe: "160",
      maRap: 452,
      loaiGhe: "Thuong",
      stt: "160",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null
    }
  ]
}

export const ChairList = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.seatArea}>
      <Grid container>
        {list.danhSachGhe.map((item, index) => (
          <Grid key={index} item xs={1}>
            <Box m={0.5}>
              <Chair
                tenGhe={item.tenGhe}
                loaiGhe={item.loaiGhe}
                daDat={item.daDat}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
