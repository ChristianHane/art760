import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './Categories.css';
import museum from '../../Images/museum.png';
import art from "../../Images/palette.png";
import events from "../../Images/bus.png";
import entertainment from '../../Images/guitar.png';
import organization from '../../Images/organization.png';
import film from '../../Images/film.png';
import retail from '../../Images/retail.png';
import theatre from '../../Images/theatre.png';

const organizationLeft = {
  marginLeft: -30,
}

class Categories extends Component {
  render(){
    return(
      <div className="container clearfix categories">
        <hr className="line2"></hr>
        <hr className="line"></hr>
          <MediaQuery query='(min-width:768px)'>
            <div className="row">
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons" src={museum}/>
                  <br></br>
                  <a href="#"className="btn">MUSEUMS</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Museums' className="iconLink">Museums</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons " src={art}/>
                  <br></br>
                  <a href="#" className="btn">GALLERIES</a>
                    <div className="overlay">
                      <div className="text">
                        <Link to='/results?type=category&category=Art Galleries' className="iconLink" >Art | Sculpture Gardens</Link>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons " src={events}/>
                  <br></br>
                  <a href="#" className="btn">EVENTS & TOURS</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Events and Tours' className="iconLink" >Festivals | Walks</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons " src={entertainment}/>
                    <br></br>
                    <a href="#" className="btn">LIVE ENTERTAINMENT</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Live Entertainment' className="iconLink" >Music | Radio | TV</Link>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-3">
                <div className="crate">
                  <img className="float-left categoryIcons compIcons " src={organization}/>
                  <br></br>
                  <a href="#" className="btn">ORGANIZATIONS</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Organizations' className="iconLink">Associations | Organizations</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons compIcons" src={film}/>
                  <br></br>
                  <a href="#" className="btn">FILM & MOVIES</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Films and Movies' className="iconLink" >Film | Movies</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className='crate'>
                  <img className="categoryIcons compIcons" src={retail}/>
                  <br></br>
                  <a href="#" className="btn">RETAIL/OTHER</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Retail and Other' className="iconLink"> Art Supplies | Framing</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons compIcons" src={theatre}/>
                  <br></br>
                  <a href="#" className="btn">THEATRE & STAGE</a>

                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Theatre and Stage' className="iconLink" >Theatre | Stage</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </MediaQuery>
          <MediaQuery query='(max-width:767px)'>
            <div className="row">
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons" src={museum}/>
                  <br></br>
                  <a href="#"className="btn here">MUSEUMS</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Museums' className="iconLink" >Museums</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons " src={art}/>
                  <br></br>
                  <a href="#" className="btn here">GALLERIES</a>
                    <div className="overlay">
                      <div className="text">
                        <Link to='/results?type=category&category=Art Galleries' className='iconLink' >Art | Sculpture Gardens </Link>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons " src={events}/>
                  <br></br>
                  <a href="#" className="btn here"><span className="fixme">EVENTS & TOURS</span></a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Events and Tours' className="iconLink" >Festivals | Walks</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons " src={entertainment}/>
                  <br></br>
                  <a href="#" className="btn here"><span className="fixme2">LIVE</span><br></br><span className="fixme3">ENTERTAINMENT</span></a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Live Entertainment' className="iconLink" >Music | Radio | TV</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons" src={organization}/>
                  <br></br>
                  <a href="#" className="btn here">ORGANIZATIONS</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Organizations' className="iconLink">Associations | Organizations</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons " src={film}/>
                  <br></br>
                  <a href="#" className="btn here">FILM & MOVIES</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Films and Movies' className="iconLink" >Film | Movies</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons " src={retail}/>
                  <br></br>
                  <a href="#" className="btn here">RETAIL/OTHER</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Retail and Other' className="iconLink"> Art Supplies | Framing</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className="crate">
                  <img className="categoryIcons " src={theatre}/>
                  <br></br>
                  <a href="#" className="btn here">THEATRE <br></br>& <br></br>STAGE</a>
                  <div className="overlay">
                    <div className="text">
                      <Link to='/results?type=category&category=Theatre and Stage' className="iconLink" >Theatre | Stage</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </MediaQuery>

        <hr className="line"></hr>
        <hr className="line2"></hr>
      </div>
    )
  }
}

export default Categories;
