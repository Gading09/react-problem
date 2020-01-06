import React from 'react';
import Header from '../components/header';
import BeritaTerkini from "../components/berita-terkini";
import BeritaUtama from "../components/berita-utama";

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