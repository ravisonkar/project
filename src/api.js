import axios from 'axios';

export const fetchPlayersDataRequest = () => { 
    return axios
    .get(`https://api.npoint.io/d6bd0efc05639084eb17/`)
      .then((value) => value.data);
};


export const searchPlayersDataRequest = (selectValue) => { 
  return axios
  .get(`https://api.npoint.io/d6bd0efc05639084eb17/?TName=${selectValue}`)
    .then((value) => value.data);
};


