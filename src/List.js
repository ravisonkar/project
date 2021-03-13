import React from 'react';
import { Col ,Container ,Row ,Card} from 'react-bootstrap';
import { fetchPlayersDataRequest } from './api';
import {searchPlayersDataRequestByTname  } from './api';
import {searchPlayersDataRequestByPfName} from './api';




class List extends React.Component{

    state={
     players_details:[],
     match:[],
     tname:"",
     pfname:""
    }
     
 componentDidMount() {
    this.getPlayersDetails()
    }

    getPlayersDetails= async ()=>{
        try{
            let playersData= await fetchPlayersDataRequest()
            this.setState({
                players_details:playersData.playerList
            })          
        }
        catch(error){
            console.log(error)
        }
    }
    
    handleChange=(event) =>{
        this.setState({
          tname: event.target.value
        })
      };

      getDetialsOfPlayersByTname = async () => {
       try{
        let data = await searchPlayersDataRequestByTname(this.state.tname);
      this.setState({
       players_details:data.playerList
      })
        } catch (error) {
          console.error(error.response);
        }
      };

      getDetialsOfPlayersByPfname = async () => {
        try{
         let data = await searchPlayersDataRequestByPfName(this.state.pfname);
       this.setState({
        players_details:data.playerList
       })
         } catch (error) {
           console.error(error.response);
         }
       };

    render(){
        return(
     <div>
    <Container>
     <h1 className="text-center">Players</h1>
     <div>
     <input type="text"
     value={this.state.tname} 
     onChange={this.handleChange} 
     className="dropdown"
     placeholder="Search by tname"/>
    <span onClick={this.getDetialsOfPlayersByTname}><button className="button">Search</button></span>
    
    <input type="text"
     value={this.state.tname} 
     onChange={this.handleChange} 
     className="dropdowns"
     placeholder="Search by pfname"
     />
    <span onClick={this.getDetialsOfPlayersByPfname}><button className="button float right">Search</button></span>
    </div>
    <Row>
    {this.state.players_details.map((player)=>{
    console.log(player.Id)
    return(
    <Col sm={4}  >
    <Card className="card-size">
    <img  variant="top" src={`./player-images/${player.Id}.jpg`} alt="name" className="image-size"/>
    <Card.Body>
      <Card.Text>
    <h3>Name:{player.PFName}</h3>
    <h2>Skill Desc:{player.SkillDesc}</h2>
    <h2>Value:{player.Value}</h2>
    <h3>UpComingMatchesList:{player.UpComingMatchesList[0].CCode} vs {player.UpComingMatchesList[0].VsCCode}</h3>
    <h3>DATE:{player.UpComingMatchesList[0].MDate}</h3>
      </Card.Text>
    </Card.Body>
     </Card>
     </Col>
    )
      })}
    </Row>
    </Container>
   </div>
        )
    }
}
export default List;