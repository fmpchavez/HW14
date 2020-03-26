import React from 'react';

function EmployeeCard(props) {

    return (

        <div>{props.data.map(user => {
            return (
                <div className="col s3 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={user.picture.large} />
                            <span className="card-title" style={{background:"black", fontWeight:"bold"}}>{user.name.first} {user.name.last}</span>
                        </div>
                        <div className="card-content">
                            <h6>Location: {user.location.city}, {user.location.state}, {user.location.country} </h6>
                            <h6>Email: {user.email} </h6>
                            <h6>Phone: {user.cell} </h6>
                            <h6>Age: {user.dob.age} </h6>
                            <h6>Gender: {user.gender} </h6>
                        </div>
                    </div>
                </div>
            )
        })
        }</div>
    )
};
export default EmployeeCard;