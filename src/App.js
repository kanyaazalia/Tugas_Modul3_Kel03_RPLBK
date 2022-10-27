import "./App.css";
import React from "react";
import Card from "./component/Card";
import DataMahasiswa from "./component/data.js";
import Anggota from "./component/Anggota.js";

function App() {
    const [data, setData] = React.useState([]);
    const [state, setState] = React.useState(false);
  
    const findData = () => {
      const input = document.getElementById('inputNama');
      const newData = DataMahasiswa.filter((mahasiswa) =>
        mahasiswa.nama_lengkap.toLowerCase().includes(input.value.toLowerCase())
      );
      input.value === "" ? setData([]) : setData(newData);
      input.value === "" ? setState(false) : setState(true);
      console.log(newData);
    };

  return (
    <div className="App">
      <header>
        <h1>Tugas Kelompok 03</h1>
      </header>
     
      <Anggota/>
      <h1>Kartu Praktikan</h1>
      <input
        id="inputNama"
        placeholder="Masukkan Nama Praktikan..."
        style={{ width: 400 }}
      />

      <button onClick={() => findData()}>
        Buat Kartu!
      </button>

      <br />
      
      {data.length !== 0 ? (
        data.map((mahasiswa, i) => {
          return <Card nama={mahasiswa.nama_lengkap} kelompok={mahasiswa.nim} i={i} />;
        })
      ) : state ? (
        <h2 style={{ "align-self": "center" }}>Data Tidak Ditemukan</h2>
      ) : (
        ""
      )}

    </div>
  );
}

export default App;
