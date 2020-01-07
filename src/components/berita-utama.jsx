import React from 'react';

// bikin fungsi untuk dilakukan looping pada tiap variable
function BeritaUtama(foto, urlBerita, judulBerita, isiBerita, publishedAt) {
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
            <a href={urlBerita}>
            <span class="text-center" style={{fontWeight:"bold", fontSize:"22px"}}>{judulBerita}</span>
            </a>
        </td>
    </tr>
    <tr>
        <td>
            <p class="text-justify">{isiBerita}</p>
        </td>
    </tr>
    <tr>
        <td class="py-0">
            <p class="text-left" style={{color:"silver"}}>Published at: {publishedAt}</p>
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
export default BeritaUtama;