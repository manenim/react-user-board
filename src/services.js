import axios from 'axios';

export const getMaleUsers = (setData) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/?gender=male&results=3`)
        .then(res => {
            console.log('male', res.data.results);
            let data = res.data.results;
            setData(data)
        }
            
        )
        .catch(err => {
            console.log(err)
        })
}

export const getFemaleUsers = (setData) => { 
    axios.get(`${process.env.REACT_APP_BASE_URL}/?gender=female&results=3`)
        .then(res => {
            console.log('female', res.data.results);
            let data = res.data.results;
            setData(data)
        }
            
        )
        .catch(err => {
            console.log(err)
        })
}


export const getAllUsers = (setData) => { 
    axios.get(`${process.env.REACT_APP_BASE_URL}/?results=3`)
        .then(res => {
            console.log('female', res.data.results);
            let data = res.data.results;
            setData(data)

        }
            
        )
        .catch(err => {
            console.log(err)
        })
}
export const getCSV = (setData) => { 
    axios.get(`${process.env.REACT_APP_BASE_URL}/?format=csv`)
        .then(res => {
            console.log('hiiii', res);
            return res.data
        }
            
        )
        .catch(err => {
            console.log(err)
        })
}

    

