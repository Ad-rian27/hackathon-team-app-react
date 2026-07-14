import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar';

const ViewTeam = () => {
    const [tdata, changeDate] = useState([]);

    const fetchData = () =>{
        axios.post("http://localhost:3000/view-team", tdata).then(
(response) => {
    changeDate(response.data)
}).catch(
    (err)=>{
        console.error("Error fetching entries: ",err)
    }
)}

useEffect(
    ()=>{
        fetchData();
    },[]
)
    return (
        <div>
            <NavigationBar />
            <div className="container mt-5">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped align-middle text-center">
                            <thead className="table-info">
                                <tr>
                                    <th>Team ID</th>
                                    <th>Team Name</th>
                                    <th>Leader Name</th>
                                    <th>Leader Email</th>
                                    <th>Leader Phone</th>
                                    <th>College</th>
                                    <th>No. of Members</th>
                                    <th>Title</th>
                                    <th>Problem State</th>
                                    <th>Tech Stack</th>
                                    <th>Mentor Name</th>
                                    <th>Registration Date</th>
                                    <th>Table No.</th>
                                </tr>
                            </thead>

                            <tbody>
                                {tdata.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.teamId}</td>
                                        <td>{value.teamName}</td>
                                        <td>{value.leadName}</td>
                                        <td>{value.leadEmail}</td>
                                        <td>{value.leadPhone}</td>
                                        <td>{value.college}</td>
                                        <td>{value.memberCount}</td>
                                        <td>{value.title}</td>
                                        <td>{value.probStateTrack}</td>
                                        <td>{value.techStack}</td>
                                        <td>{value.mentorName}</td>
                                        <td>{value.regDate}</td>
                                        <td>{value.tableNo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewTeam