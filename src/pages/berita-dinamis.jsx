import React from 'react';
import Header from '../components/header';
import BeritaTerkini from "../components/berita-terkini";
import BeritaUtama from "../components/berita-utama";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class BeritaDinamis extends React.Component{
    componentDidMount = () => {
        const urlNewsApi = `https://newsapi.org/v2/top-headlines?country=id&apiKey=05b5a2e626d442e483663e8b5fe89048&category=${this.props.category}&pagesize=5`
        // dari store.js
        this.props.runAxios(urlNewsApi)
    };
    render(){
        const topHeadlines = this.props.listNews.filter(item => {
            if (item.content !== null && item.urlToImage !== null){
                return item
            }
            return false
        })
        const loopBerita = topHeadlines.map((value, index) => (
            BeritaUtama(value.urlToImage, value.url, value.title, value.description, value.publishedAt)
        ))
        return (
        <body>
        <Header 
            param="active" 
            clickFunction={this.props.onClickFunctionCategory} //Dari store.js
            isi={this.keyword}
            placeholder="cari di sini"
            onChangeFunction={e => this.props.onChangeFunctionSearch(e)} //Dari store.js
            />
            <div class="container pt-xl-3">
                <div class="row">
                    <BeritaTerkini />
                   <div class="col-md-7">
                       {this.props.isLoading ? <div class="text-center">Loading ....</div> : loopBerita}
                   </div>
                </div>
            </div>
        </body>
        )


    }
}
export default connect("listNews, isLoading, category", actions)(withRouter(BeritaDinamis));