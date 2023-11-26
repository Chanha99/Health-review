import React, {useEffect} from 'react'
import axios from 'axios';

function LandingPage(props) {
    
    useEffect(() => {
        axios.get('api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickHandler = () => {
        axios.get('/logout')
        .then(response => {
            if (response.data.success) {
                props.history.push('/');
            } else {
                alert('로그아웃에 실패');
            }
            
        })
    }
    return (
        <div>
            

            <button onClick = {onClickHandler}>로그아웃</button>
        </div>
    )
}

export default LandingPage