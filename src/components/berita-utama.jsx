import React from 'react';

let judulBerita = "Nikahi Rakyat Jelata, Baifern dari Thailand Jadi Pengen Cerai Karena Nyusahin"
let isiBerita = "Pernikahan Baifern Bah dan Dobleh bin Jamal Arifin dilangsungkan lewat upacara bendera 17 Agustus 1945"
let lastUpdated = "3 mins"

function BeritaUtama1(foto, judulBerita, isiBerita, lastUpdated) {
    return (
        <div class="col-md-12">
            <table class="table table-borderless" style={{border:"solid", borderWidth:"0.1px", borderColor:"silver"}}>
<thead class="">
    <tr>
        <th class="p-0">
            <div class="col-md-12 p-0">
                <img src={foto} width="100%"/>
            </div>
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <span class="text-center" style={{fontWeight:"bold", fontSize:"22px"}}>{judulBerita}</span>
        </td>
    </tr>
    <tr>
        <td>
            <p class="text-justify">{isiBerita}</p>
        </td>
    </tr>
    <tr>
        <td class="py-0">
            <p class="text-left" style={{color:"silver"}}>Last updated {lastUpdated} ago</p>
        </td>
    </tr>
    <tr class="border" style={{backgroundColor:"#F7F7F7"}}>
        <td>
            <div class="row">
                <div class="col-md-4 text-center">
                    <a href="" style={{color:"black"}}>
                        <i class="fa fa-fw fa-heart"></i>
                    </a>
                </div>
                <div class="col-md-4 text-center">
                    <a href="" style={{color:"black"}}>
                        <i class="fa fa-fw fa-share"></i>
                    </a>
                </div>
                <div class="col-md-4 text-center">
                    <a href="" style={{color:"black"}}>
                        <i class="fa fa-fw fa-thumbs-down"></i>
                    </a>
                </div>
            </div>
        </td>
    </tr>
</tbody>
</table>
</div>
    )
}

const listBeritaFull = [
    {
        Judul:"Nikahi Rakyat Jelata, Baifern dari Thailand Jadi Pengen Cerai Karena Nyusahin",
        Isi:"Pernikahan Baifern Bah dan Dobleh bin Jamal Arifin dilangsungkan lewat upacara bendera 17 Agustus 1945",
        Update:"3 mins",
        foto:require("../images/foto.jpg")
    },
    {
        Judul:"Iran Tawarkan Hadiah Rp 1,1 Triliun untuk Kepala Donald Trump, Sebut akan Serang Gedung Putih",
        Isi:"Silahkan baca selengkapnya disini (males ngetik): https://www.tribunnews.com/internasional/2020/01/06/iran-tawarkan-hadiah-rp-11-triliun-untuk-kepala-donald-trump-sebut-akan-serang-gedung-putih",
        Update:"3 mins",
        foto:require("../images/foto1.jpeg")
    },
    {
        Judul:"Donald Trump jabat tangan Kim Jong-un, melangkah masuk ke wilayah Korut",
        Isi:"Presiden Amerika Serikat, Donald Trump, dan Pemimpin Korea Utara, Kim Jong-un, berjabat tangan di Zona Demiliterisasi (DMZ) yang memisahkan Korut dan Korea Selatan. Baca selengkapnya: https://www.bbc.com/indonesia/dunia-48815349",
        Update:"5 mins",
        foto:require("../images/foto2.jpg")
    }
]
const loopBerita = listBeritaFull.map((value, index)=>(
    BeritaUtama1(value.foto, value.Judul, value.Isi, value.Update)
))

class BeritaUtama extends React.Component{
    render (){
        return (<div class="col-md-7">{loopBerita}</div>)
    }
}

export default BeritaUtama;