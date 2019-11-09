import React from 'react';
import data from '../api/index';
import ExpandableGrid from '../components/ExpandableGrid';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          dataString:[]
        }
      }
    
      componentWillMount(){
        data.getData(item => { this.setState({dataString:item}) })
      }
    
  render(){
     return(
        <ExpandableGrid
        gridData={this.state.dataString}
        detailHeight={300}
        ExpandedDetail_image_size={300}
        cellSize={250}
        ExpandedDetail_closeX_bool={false}
      />
     )
  }

}
export default Home;
