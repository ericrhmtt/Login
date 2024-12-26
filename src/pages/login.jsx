import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/login.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const register = async (e) => {
    e.preventDefault(); // e.preventDefault() mencegah reload halaman saat form di-submit.

    // try catch untuk memastikan trjdi kesalahan
    try {
      // library opensource yg digunkan untuk request data melalui http
      await axios.post(
        "http://localhost:2026/api/user/login", // xios.post() mengirimkan data email, password, dan username ke endpoint API http://localhost:2026/api/user/register.
        // Data dikirim dalam bentuk JSON sesuai format API.
        {
          email: email,
          password: password,
          // diatas adalah kumpulan request body jika baris pertama namanya berbeda dengan request body yang ada di swagger atau database itu dapat menyebabkan error
        }
      );
      // Sweet alert untuk peringatan dimana kita bisa melihat const yang kita jalankan berhasil atau gagal
      Swal.fire({
        icon: "success",
        title: "Berhasil Login!!",
        showConfirmButton: false,
        timer: 1500,
      });    
      setTimeout(() => {
        history("/register"); // navigate atau history di gunakan untuk berpindah halaman, contoh ketika integrasi kita berhasil lalu page selanjutnya adalah home maka sesuaikan isi ("/") sesuai dengan app.jsx
      }, 1500);
    } catch (error) {
      // bagian ini akan menampilkan error dalam console
      console.log(error);
    }
  };
  return (
    <body className="body1 md:text-base lg:h-100vh sm:text-sm">
      <div className="container1">
        <h3>Login</h3>
        <form onSubmit={register} method="POST">
          <br />
          <label>Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
          <br />
          <button type="submit">Login</button> {/* Tombol untuk mengirim data form.*/}
          <p>
            {" "}
            Belum punya akun?
            <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </body>
  );
}

export default Register;
