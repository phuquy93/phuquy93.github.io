import React, { Component } from 'react';
import NewItem from './NewItem';
import Data from './data.json';

class New extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">Tin tức</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        {
                            Data.map((value,key) => {
                             return (
                                 <NewItem 
                                 key={key}
                                 id={value.id}
                                 anh={value.anh} 
                                 tieude={value.tieude} 
                                 noidung={value.noidung} />
                             )   
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default New;