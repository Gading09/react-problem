import React from 'react';
import Header from '../components/header';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class LihatSemua extends React.Component{
    render() {
        return (
            <body>
                <Header 
                clickFunction={this.props.onClickFunctionCategory} //Dari store.js
                onChangeFunction={e => this.props.onChangeFunctionSearch(e)} //Dari store.js
                />
                <div class="text-center">
                    <h1>SEMUA</h1>
                </div>
            </body>
        )
    }
}
export default connect("listNews, isLoading, category", actions)(withRouter(LihatSemua));