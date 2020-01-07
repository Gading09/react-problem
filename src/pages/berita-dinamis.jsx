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

class BeritaDinamis extends React.Component{
    state = {
        listNews : [],
        isLoading : true,
        category : ""
    };
    clickFunction = async param => {
        await this.setState({category:param, isLoading: true})
        console.log(this.state.category)
        const self = this;
        axios 
            .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=6b694fdd4faa4fdc8499bb871d080fc1&category=${this.state.category}&pagesize=5`)
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
        return param = "active"
    }
    componentDidMount = () => {
        const self = this;
        axios 
            .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=6b694fdd4faa4fdc8499bb871d080fc1&category=${this.state.category}&pagesize=5`)
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
        <Header param="active" clickFunction={this.clickFunction}/>
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
export default BeritaDinamis;