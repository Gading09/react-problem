import React from 'react';
import axios from 'axios';

// News API
const apiKey = "6b694fdd4faa4fdc8499bb871d080fc1";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey + "&pagesize=10";

class BeritaTerkini extends React.Component{
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
    render() {
        const berita = this.state.listNews.map((item, index)=>
            (<tr class="text-left">
                <td><span class="badge badge-pill badge-danger">#{index + 1}</span><br />
                <a href={item.url} style={{color:"#008A89", textDecoration:"none"}}>{item.title}</a></td>
            </tr>))
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
        {this.state.isLoading ? <div class="text-center">Loading ....</div> : berita}
    </tbody>
    </table>
    </div>
        )
    }
}
export default BeritaTerkini;