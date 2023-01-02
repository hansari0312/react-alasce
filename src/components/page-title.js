import React from 'react';


export default function contact(props) {
  return (
    <div>
      
        <section className="page-title" style={{ backgroundImage: 'url(' + props.titleImg + ')' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>{props.title1}  <span>{props.title2}</span></h2>
                    </div>
                </div>
            </div>
        </section>
        

    </div>
  )
}
