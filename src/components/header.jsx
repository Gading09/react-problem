import React from 'react';
import Search from './search';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const listKategori = [
  {indonesia:"Olahraga",inggris:"sports"},
  {indonesia:"Ekonomi", inggris:"business"},
  {indonesia:"Teknologi", inggris:"technology"},
  {indonesia:"Hiburan", inggris:"entertainment"}
]
class Header extends React.Component{
    render() {
      const headerKategori = listKategori.map((kategori)=>
    <li class="nav-item" namaKategori={kategori.inggris} onClick={() => this.props.clickFunction(kategori.inggris)}>
      <Link to={`/news-category/${kategori.indonesia}`}><a class="nav-link" href="">{kategori.indonesia} <span class="sr-only">(current)</span></a></Link>
    </li>
    )
        return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/"><a class="navbar-brand" href="#" onClick={() => this.props.clickFunction("")}><img src={require("../logo.svg")} alt="logo" width="50px"/>KabarKabar</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
          {headerKategori}
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Lainnya
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to={`/news-category/kesehatan`}><a class="dropdown-item" href="" onClick={() => this.props.clickFunction("health")}>Kesehatan</a></Link>
        <Link to={`/news-category/sains`}><a class="dropdown-item" href="" onClick={() => this.props.clickFunction("science")}>Sains</a></Link>
        <Link to={`/news-category/general`}><a class="dropdown-item" href="" onClick={() => this.props.clickFunction("general")}>General</a></Link>
        </div>
      </li>
    </ul>
    <Search {...this.props}/>
    <ul class="navbar-nav ml-lg-5">
    <li class="nav-item">
        <Link to="/signin"><a class="nav-link" href="#">Masuk</a></Link>
      </li>
      <li class="nav-item">
        <Link to="/profile"> <a class="nav-link" href="#">Profile</a></Link>
      </li>
      <li class="nav-item">
        <Link to="/logout"> <a class="nav-link" href="#">Logout</a></Link>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}
export default Header;