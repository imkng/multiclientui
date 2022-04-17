import React, { Component } from 'react';
// import '../../customs/AdminProject.css';
// import { Loading } from '../LoadingComponent';
import { FadeTransform } from 'react-animation-components';

export default class AdminProject extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flipped: false
    };
    this.flip = this.flip.bind(this);
  }

   
     flip = () => {
      this.setState({ flipped: !this.state.flipped });
    }

    render(){
        // if (this.props.projectsLoading) {
        //   return(
        //     <Loading />
        //   );
        // }
        // else if (this.props.projectsErrMess) {
        //   return(
        //     <h4>{this.props.projectsErrMess}</h4>
        //   );
        // }else {
          return (
            <FadeTransform in 
            FadeTransformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
              <table>
                <tbody>  
                { this.props.projects.map((project) => {
                  
                  return <td key= {project.projectId}>
                    <div style= {{"margin": "20px"}} className="page-container">
                    <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
                      <div className="front">
                      <div className="image-container">
                      <img className="card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png" alt={this.props.projects.projectName}/>
                      <h1 className="title">{project.projectName}</h1>
                    </div>
                    <div className="main-area">
                      <div className="blog-post">
                        <p className="date">{project.startedAt}</p>
                        <p className="blog-content">
                           
                          </p>
                        <p className="read-more">Project info...</p>
                      </div>
                    </div>
                    </div>
                    <div className="back">
                      <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
                      <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
                    </div>
                    </div>
                    </div>
                  </td>
                })}
                </tbody>
              </table>
        </FadeTransform>      
          );
        // }    
    }
}