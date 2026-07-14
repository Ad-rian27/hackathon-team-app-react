import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddTeam = () => {
    const [input, changeInput] = useState(
        {
            "teamId": String,
            "teamName": String,
            "leadName": String,
            "leadEmail": String,
            "leadPhone": String,
            "college": String,
            "memberCount": String,
            "title": String,
            "probStateTrack": String,
            "techStack": String,
            "mentorName": String,
            "regDate": String,
            "tableNo": String
        }
    )

const inputHandler=(event) => {
    changeInput({...input, [event.target.name]: event.target.value})
}

const readValue=()=>{
    console.log(input)

    axios.post("http://localhost:3000/add-team", input).then(

        (response)=>{
            console.log(response.data)
            alert("Team added successfully!")
        }

    ).catch(
        (err)=>(
            console.error("Error Adding Team", err)
        )
    )
}

    return (
        <div>
<NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team ID</label>
                                <input type="text" className="form-control" name='teamId' onChange={inputHandler} value={input.teamId}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team Name</label>
                                <input type="text" className="form-control" name='teamName' onChange={inputHandler} value={input.teamName} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Leader Name</label>
                                <input type="text" className="form-control" name='leadName' onChange={inputHandler} value={input.leadName} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Leader Email</label>
                                <input type="email" className="form-control" name='leadEmail' onChange={inputHandler} value={input.leadEmail} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Leader Phone</label>
                                <input type="tel" className="form-control" name='leadPhone' onChange={inputHandler} value={input.leadPhone} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">College Name</label>
                                <input type="text" className="form-control" name='college' onChange={inputHandler} value={input.college}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">No. of Members</label>
                                <input type="number" className="form-control" name='memberCount' onChange={inputHandler} value={input.memberCount}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Project Title</label>
                                <input type="text" className="form-control" name='title' onChange={inputHandler} value={input.title} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Problem Statement Track</label>
                                <input type="text" className="form-control" name='probStateTrack' onChange={inputHandler} value={input.probStateTrack} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Tech Stack</label>
                                <input type="text" className="form-control" name='techStack' onChange={inputHandler} value={input.techStack} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Mentor Name</label>
                                <input type="text" className="form-control" name='mentorName' onChange={inputHandler} value={input.mentorName}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Registration Date</label>
                                <input type="date" className="form-control" name='regDate' onChange={inputHandler} value={input.regDate}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Table Number</label>
                                <input type="text" className="form-control" name='tableNo' onChange={inputHandler} value={input.tableNo}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddTeam