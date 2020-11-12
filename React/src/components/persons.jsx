import React, { Component } from "react";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import _ from "lodash";
import Table from "./table";
import axios from "axios";
import auth from "./common/auth";
 

class Persons extends Component {
  state = {
    persons: [],
    // genres:[],
    pageSize:2,
    currentPage:1,
    sortColumn:{path:"title",orderBy:"asc"}
  };
componentDidMount(){
    axios.get("http://localhost:9000/projects")
        .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({ persons })
        })
}
 

    handlePageChange =page=>{
        this.setState({currentPage:page})
    }
  
  render() {
     
      const { length: count } = this.state.persons;

    const {persons:allpersons,currentPage,pageSize,sortColumn} = this.state;

     

    if (count === 0) return <p>There are no Persons in the database.</p>;

    const sorted = _.orderBy(allpersons, [sortColumn.path], [sortColumn.orderBy])
    const persons = paginate(sorted,currentPage,pageSize);
     
    return (
      <div className = "row">
          <div className="col-2">
          </div>
          <div className ="col">
                <p>Showing {allpersons.length} lists in the database.</p>
                <Table 
                projects = {persons}
                />
                <Pagination
                    currentPage={this.state.currentPage}
                    totalPersons={allpersons.length}
                    pageSize={this.state.pageSize}
                    handlePageChange={this.handlePageChange}
                />
                <button onClick={()=>{
                    auth.logout(()=>{
                        this.props.history.push("/")
                    })
                }} type="button" class="btn btn-danger">LogOut</button>
          </div>
        
      </div>
    );
  }
}   

export default Persons;
