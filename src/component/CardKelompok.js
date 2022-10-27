import React from 'react'
import "./CardKelompok.css";

export default function Card(props) {
    return (
        <div className="dataAnggota">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="3">
                            <img className='fotoProfil' src={props.data.foto_profil} alt="Foto Profil"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Nama Lengkap</td>
                        <td>:</td>
                        <td>{props.data.nama_lengkap}</td>
                    </tr>
                    <tr>
                        <td>NIM</td>
                        <td>:</td>
                        <td>{props.data.nim}</td>
                    </tr>
                    <tr>
                        <td>Akun GitHub</td>
                        <td>:</td>
                        <td><a href={props.data.link_github} target="_blank">{props.data.akun_github}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}