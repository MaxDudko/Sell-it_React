

export const fetchProducts = () => dispatch => {
        fetch('http://light-it-04.tk/api/posters/')
        .then(response => response.json())

        .then(data => dispatch({
            type: 'FETCH_PRODUCTS',
            payload: data.data,
            
        }))
        .catch(error => console.log(error))
}