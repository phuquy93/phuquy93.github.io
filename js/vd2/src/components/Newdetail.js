import React, { Component } from 'react';
import Data from './data.json';
import NewRelated from './NewRelated';

class Newdetail extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">Danh sách tin</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>

                {
                    Data.map((value,key) => {
                        if(value.id == this.props.match.params.id) {
                        return (
                            <div key={key} className="jumbotron jumbotron-fluid">
                                <div className="container">
                                <img src={value.anh} alt="" />
                        <p className="lead">{value.tieude}</p>
                                <hr className="my-2" />
                        <p>{value.trichdan}</p>        
                        <p>{value.noidung}</p>
                                </div>
                            </div>
                        )
                        }
                    })
                }
                
                <div className="container">
                    <div className="border-primary">
                    <div className="card-body">
                        <h4 className="card-title text-center">Tin liên quan</h4>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                            {
                                Data.map((value,key) => {
                                    if(key <=4 && value.id != this.props.match.params.id) {
                                        return (
                                            <NewRelated 
                                            key={key}
                                            id={value.id}
                                            anh={value.anh} 
                                            tieude={value.tieude} 
                                            noidung={value.noidung} />
                                        )
                                    }        
                                })
                            }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newdetail;