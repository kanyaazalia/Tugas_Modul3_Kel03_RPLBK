import "./App.css";
import Form from "./component/Form";
import React from "react";
import Card from "./component/Card";
import Hide from "./component/Hide";

import DataMahasiswa from "./component/data.js";

// function App() {
  // App()
  // const [praktikan, setPraktikan] = React.useState(null);
  // const addPraktikanHandler = (data) => {
  //   console.log(data);
  //   setPraktikan(data);
  // };
  // const removePraktikanHandler = () => {
  //   setPraktikan(null);
  // };

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
      <Hide/>
      <h1>Kartu Praktikan</h1>
      {/* <Form onAddPraktikan={addPraktikanHandler} /> */}
      {/* Conditional rendering */}

      <input
        id="inputNama"
        placeholder="Masukkan Nama Mahasiswa..."
        style={{ width: 400 }}
      />

      <button onClick={() => findData()}>
        Buat Kartu!
      </button>

      <br />

      {/* {praktikan && (
        <>
          <button className="delete" onClick={removePraktikanHandler}>
            Hapus
          </button>
          <Card nama={praktikan.nama} kelompok={praktikan.kelompok} />
        </>
      )} */}

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
