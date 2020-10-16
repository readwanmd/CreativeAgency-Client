import React, {useState} from 'react';
import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar';
import LoggedInUserImg from '../../Shared/LoggedInUserImg/LoggedInUserImg';

const style={
    backgroundColor: '#F4F7FC',
    width: '100%',
    height: '100vh'
}


const AddAdmin = () => {
    
    const [admin, setAdmin] = useState({
        email: '',
        isAdmin: true
    })

    const handleBlur = (e) => {
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit = (e) => {
        fetch('https://arcane-hamlet-32781.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
        .then(response => {
            if(response.status === 200) {
                alert('Admin Added Successfully');
            }
        })

        e.preventDefault();
    }



    return (
        <div className="">
            <div className="row m-0 p-0">
                <div className="col-md-2 col-sm-2 justify-content-between" style={{backgroundColor: '#fff'}}>
                    <DashboardSideBar />
                </div>
                
                <div className="col-md-10 col-sm-10 m-0 p-0" style={style}>
                    <div className="top d-flex justify-content-between" style={{backgroundColor: 'white', width: '100%'}}>
                        <h5 className="pl-3 pt-2 pb-2" style={{color: '#7ab259'}}>Add Admin</h5>
                        <LoggedInUserImg />
                    </div>

                    <form className="m-5">
                        <div className="row">
                            <form onSubmit={handleSubmit} className="form-group d-flex col-md-6 col-sm-12 p-3" style={{ background: '#fff', borderRadius: "8px" }}>
                                <input type="email" className="form-control" onBlur={handleBlur} name="email" aria-describedby="emailHelp" placeholder="Email Address *" required/>
                                <button type="submit" className="btn btn-dark pl-3 pr-3" style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}}>Submit</button>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;