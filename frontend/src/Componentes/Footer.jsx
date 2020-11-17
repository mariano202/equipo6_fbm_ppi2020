import React, { Component } from 'react'
import '../Style/Estilos.css';
import { Link } from 'react-router-dom';



class Footer extends Component {
    render() {
        return (
            <footer className="pt-4 my-md-3 pt-md-2 border-top">
                <div className="row">
                    <div className="col-12 col-md">
<img className="mb-2" 
src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png" alt="" width="24" height="24" />
                        <small className="d-block mb-3 text-body">©2020</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-body" href="#">Cool stuff</a></li>
                            <li><a className="text-body" href="#">Random feature</a></li>
                            <li><a className="text-body" href="#">Team feature</a></li>
                            <li><a className="text-body" href="#">Stuff for developers</a></li>
                            <li><a className="text-body" href="#">Another one</a></li>
                            <li><a className="text-body" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-body" href="#">Resource</a></li>
                            <li><a className="text-body" href="#">Resource name</a></li>
                            <li><a className="text-body" href="#">Another resource</a></li>
                            <li><a className="text-body" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    
                </div>
            </footer>
        );
    }
}
export default Footer