import axios from 'axios';

export const fetchPlayersDataRequest = () => { 
    return axios
    .get(`https://api.npoint.io/d6bd0efc05639084eb17/`)
      .then((value) => value.data);
};


export const searchPlayersDataRequestByTname = (selectValue) => { 
  return axios
  .get(`https://api.npoint.io/d6bd0efc05639084eb17/?TName=${selectValue}`)
    .then((value) => value.data);
};

export const searchPlayersDataRequestByPfName = (selectValue) => { 
  return axios
  .get(`https://api.npoint.io/d6bd0efc05639084eb17/?PfName=${selectValue}`)
    .then((value) => value.data);
}

