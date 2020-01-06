import React from 'react';

const listBerita = [
    "Gabung Alpha Tech Academy Sekarang!", 
    "Ada apa antara Dobleh dan Jamal?", 
    "Mengenal Pandji sang Pawang Python", 
    "Belajar reactJS itu seru, tapi boong!", 
    "Sudahkah kamu sehat moral?"
]

const berita = listBerita.map((item, index)=>
    (<tr class="text-left">
    <td><span class="badge badge-pill badge-danger">#{index + 1}</span><br />
    <a href="" style={{color:"#008A89", textDecoration:"none"}}>{item}</a></td>
    </tr>))

class BeritaTerkini extends React.Component{
    render() {
        return (
    <div class="col-md-5">
    <table class="table table-bordered">
    <thead class="thead-light">
        <tr>
            <th>
                <div class="row">
                    <div class="col-md-6">
                        <span style={{fontWeight:"bold", fontSize:"16px", color:"#008A89"}}>BERITA TERKINI</span>
                    </div>
                    <div class="col-md-6 text-right">
                        <a href="" style={{fontSize:"12px"}}>lihat semua</a>
                    </div>
                </div>
            </th>
        </tr>
    </thead>
    <tbody>
        {berita}
    </tbody>
    </table>
    </div>
        )
    }
}
export default BeritaTerkini;