import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Document, Page } from 'react-pdf';

class App extends Component {
  state = {
    //numPages: null,
   // pageNumber: 2,
   // scale: 0.5,
   // width: 1000,
   //   scale={2},
  }
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  
  render() {
    const { pageNumber, numPages } = this.state;

    return (
      
     

      <div className="App">
        <div className="pdf">
          <Document
            file="somefile.pdf"
            onLoadSuccess={this.onDocumentLoad}
          >
           

             <Page
              pageNumber={1}
              onLoadSuccess={this.onPageLoad}
              scale={1.5}
              />

          </Document>
          <p>Page {pageNumber} of {numPages}</p>
          
        </div>
        <div className="Info">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Revisar Datos Comprobante</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <p className="App-intro">asd {this.state.response.employees[1].lastName}</p>

        </div>
      </div>
    );
  }
}



export default App;
