import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, Icon, Image,Grid } from 'semantic-ui-react'
import { fetchData } from "../../redux/action/fetchData_action";

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantList: [],
    };
  }

  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    let response = null;
    let data = {};
    this.props.dispatch(fetchData(data)).then(() => {
      response = this.props.FetchDataResponse.response;
      // console.log("My final response===>", response);
      this.setState({
        restaurantList: response,
      });
    });
  };


  signOut = () => {
    console.log("Signed out call hit");
    localStorage.clear();
    this.props.history.push({
      pathname: "/",
    });
  };


  render() {
    const { restaurantList } = this.state;

    return (
      <div>
        <div
          style={{
            height: "8em",
            backgroundColor: "#291F1E",
            paddingTop: "4em",
            textAlign: "center",
            
          }}
        >
          <span
            style={{ color: "white", fontSize: "1.8em", fontWeight: "bold" }}
          >
            Restaurant List
          </span>    

        </div>
        
     
        <Grid style={{  backgroundColor: "#cccccc", marginTop:'10px', pointer:'cursor' }}>
          <Grid.Row>
           
            <Grid.Column
              width="8"
              textAlign="right"
              verticalAlign="middle"
              onClick={() => this.signOut()}
              // style={{ marginTop: "1.5em", marginRight: "1em" }}
            >
              <span
                style={{
                  color: "black",
                  fontStyle: "italic",
                  fontSize: "1.5em",
                  fontWeight: "bolder",
                  marginRight: "10px",
                }}
              >
                Logout <Icon name="arrow right" size="small"  />{" "}
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>

         


        {restaurantList &&
          restaurantList.map((item) => {

            console.log(item.images);

            return <div key={item.restaurant_id} style={{marginTop:'20px',marginBottom:'20px'}}>
              <div 
              style={{display:'flex',justifyContent:'center',marginTop:'20px',marginBottom:'20px'}}
              >

<Card fluid style={{margin:'40px'}}>
    <Image src={item.images[0].url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{item.restaurant_name}</Card.Header>
      <Card.Meta>
        <span>{item.address_complete}</span>
      </Card.Meta>
      <Card.Description>
       {item.active_plan}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <span>Rating: </span> {" "}
        {item.rating.restaurant_avg_rating}
        <Icon name='star' />
      </a>
    </Card.Content>
  </Card>

                
             </div>  
            </div>;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    FetchDataResponse: state.FetchDataResponse,
  };
};

export default connect(mapStateToProps)(View);
