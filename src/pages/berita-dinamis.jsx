import React from 'react';
import Header from '../components/header';
import BeritaTerkini from "../components/berita-terkini";
import BeritaUtama from "../components/berita-utama";
import axios from 'axios';

// News API
const apiKey = "6b694fdd4faa4fdc8499bb871d080fc1";
const baseUrl = "https://newsapi.org/v2/";
const category = "business";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey + "&category=" + category + "&pagesize=5";

class BeritaEkonomi extends React.Component{
    state = {
        listNews : [],
        isLoading : true
    };
    componentDidMount = () => {
        const self = this;
        axios 
            // .get(urlHeadline, {
            //     proxy: {
            //         host:'0.0.0.0', 
            //         proxy: 3000
            //     }
            // })
            .get(urlHeadline)
            .then(function(response){
                self.setState({ listNews: response.data.articles, isLoading: false})
                // handle success
                console.log(response.data)
            })
            .catch(function(error){
                self.setState({isLoading: false})
                // handle error
                console.log(error)
            })
    };
    render(){
        const topHeadlines = this.state.listNews.filter(item => {
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
        <Header ekonomi="active" />
            <div class="container pt-xl-3">
                <div class="row">
                    <BeritaTerkini />
                   <div class="col-md-7">
                       {this.state.isLoading ? <div class="text-center">Loading ....</div> : loopBerita}
                   </div>
                </div>
            </div>
        </body>
        )


    }
}
export default BeritaEkonomi;