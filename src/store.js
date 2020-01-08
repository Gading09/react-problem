import createStore from 'unistore';
import axios from 'axios';

const initialState = {
    listNews : [],
    isLoading : true,
    category : "general",
    is_login : false,
    api_key : "",
    full_name : "",
    email_profil : "",
    email :"",
    password :"",
    is_login :false
}
export const store = createStore(initialState)

const runAxios = (state, urlAxios) =>{
    axios 
        .get(urlAxios)
        .then(function(response){
            store.setState({ listNews: response.data.articles, isLoading: false})
            // handle success
            console.log(response.data)
        })
        .catch(function(error){
            store.setState({isLoading: false})
            // handle error
            console.log(error)
        })
    }
export const actions = store => ({
    runAxios: (state, urlAxios) =>{
        runAxios(state, urlAxios)
    },
    onChangeFunctionSearch: (state, event) => {
        let keyword = event.target.value
        store.setState({ listNews: [], isLoading: true })
        const urlNewsApi = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=05b5a2e626d442e483663e8b5fe89048`
        runAxios(state, urlNewsApi)
        console.log(initialState.isLoading)
    },
    onClickFunctionCategory: (state, param) => {
        store.setState({ category:param, isLoading: true })
        console.log(param)
        const urlNewsApi = `https://newsapi.org/v2/top-headlines?country=id&apiKey=05b5a2e626d442e483663e8b5fe89048&category=${param}&pagesize=5`
        runAxios(state, urlNewsApi)
        console.log(initialState.isLoading)
    }

})