import React from 'react';

const judulBerita = "Nikahi Rakyat Jelata, Baifern dari Thailand Jadi Pengen Cerai Karena Nyusahin"
const isiBerita = "Pernikahan Baifern Bah dan Dobleh bin Jamal Arifin dilangsungkan lewat upacara bendera 17 Agustus 1945"
const lastUpdated = "3 mins"

class BeritaUtama extends React.Component{
    render () {
        return (
            <div class="col-md-7">
                <table class="table table-borderless" style={{border:"solid", borderWidth:"0.1px", borderColor:"silver"}}>
    <thead class="">
        <tr>
            <th class="p-0">
                <div class="col-md-12 p-0">
                    <img src={require("../images/foto.jpg")} width="100%"/>
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
                        <a href="" >
                            <i class="fa fa-fw fa-heart"></i>
                        </a>
                    </div>
                    <div class="col-md-4 text-center">
                        <a href="">
                            <i class="fa fa-fw fa-share"></i>
                        </a>
                    </div>
                    <div class="col-md-4 text-center">
                        <a href="">
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
}
export default BeritaUtama;