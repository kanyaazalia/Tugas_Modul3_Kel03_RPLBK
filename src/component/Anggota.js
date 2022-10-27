import React, {useState} from "react";
import "./Anggota.css";
import DataAnggota from "./DataAnggota.js";
import Card from "./Card.js";

export default function Anggota() {
    const data = DataAnggota;
    const [hideAnggota, setHideAnggota] = useState(false);

    const showAnggota = () => {
        setHideAnggota(!hideAnggota);
    }

    return (
        <div className="AnggotaKelompok">
            <button className="ShowAnggota" onClick={showAnggota}>
                {hideAnggota !== true ? "Lihat Anggota Kelompok!" : "Sembunyikan Anggota Kelompok!"}
            </button>
            <div className="DataKelompok" style={{ display: hideAnggota === true ? "block" : "none" }}>
                <h2>Anggota:</h2>
                <div className="KartuAnggota">
                    {
                        data.map((anggota, i) => {
                            return <Card key={i} data={anggota} i={i}/>
                        })

                    }
                </div>
            </div>
        </div>
    );
}