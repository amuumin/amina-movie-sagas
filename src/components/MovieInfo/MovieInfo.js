import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import './MovieInfo.css';
// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import HomeIcon from '@mui/icons-material/Home';

import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom';


function MovieInfo() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const fetchInfo = useSelector(store => store.movieInfo);
    
    useEffect(()=> {
        dispatch({
            type: 'FETCH_INFO',
            payload: params.id
        })
       
    },[])

    const homePage = () => {
        history.push('/')
    }

    return (
        <div>
            {/* //this is not needed  */}
            {/* <h2>Movie {params.id}</h2> */}


          
            <div key={fetchInfo.id}>
                    <h2>{fetchInfo.title}</h2>
                    <img src={fetchInfo.poster}/>
                    {/* // the && will slow down and allow browseer to check for all info before rendering */}
                    {/* //this list will display the genres */}
                    <ul>{fetchInfo.name && fetchInfo.name.map(info=> 
                    <li key={info}>
                        {info}
                        </li>)}
                    </ul>
                    <p>{fetchInfo.description}</p>
{/* 
                    //use better mui maybe? */}
                    <button onClick= {homePage}>Back to Home 🏡 </button>
                </div>
               
        
        </div>
    )
}

export default MovieInfo;


//use mui to make prettier
