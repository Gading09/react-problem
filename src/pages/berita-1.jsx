import React from 'react';
import Header from '../components/header';
import BeritaTerkini from "../components/berita-terkini";
import BeritaUtama from "../components/berita-utama";

let judulBerita = "Berita Baru"
let isiBerita = "Pernikahan Baifern Bah dan Dobleh bin Jamal Arifin dilangsungkan lewat upacara bendera 17 Agustus 1945"
let lastUpdated = "3 mins"

class PageBerita extends React.Component{
    render(){
        return (
        <body>
        <Header />
            <div class="container pt-xl-3">
                <div class="row">
                    <BeritaTerkini />
                    <BeritaUtama />
                </div>
            </div>
        </body>
        )
    }
}
export default PageBerita;