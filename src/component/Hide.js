// import "./Hide.css";
import React, { useState } from "react";

function Hide() {
    const [showKelompok, setShowKelompok] = useState(false);
    const hideKelompok = () => {
        setShowKelompok(!showKelompok);
    };
    return (
        <div className="App">
            {
                <div>
                    <h1>Tugas Modul 3 Praktikum RPLBK Kelompok 03</h1>
                    <div className="ViewKelompok">
                        <div
                            className="ViewKelompok1"
                            style={{
                                display: showKelompok === true ? "flex" : "none",
                            }}
                        >
                            <p>Ade Ilham M. 21120119130091</p>
                            <p>Kanya Azalia A. 21120119130063</p>
                            <p>Taufiqurrohman 21120119120005</p>
                            <p>Afifah Humaira 21120119140141</p>
                        </div>
                        <button className="Button" onClick={hideKelompok}>
                            {showKelompok !== true ? "Show" : "Hide"}
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Hide;