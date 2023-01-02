
import Contact from '../components/contact';
import PageTitle from '../components/page-title';
import ContactBg from '../assets/images/page-title.jpg';
import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';




function App() {
  return (
    <>
      <PageTitle title1="Faq" titleImg={ContactBg} />
      <section className="faq-section">

        <div className="container">


          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Lorem ipsum dolor 1</Accordion.Header>
              <Accordion.Body>
                <div className="text">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Lorem ipsum dolor 2</Accordion.Header>
              <Accordion.Body>
              <div className="text">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Lorem ipsum dolor 3</Accordion.Header>
              <Accordion.Body>
              <div className="text">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Lorem ipsum dolor 4</Accordion.Header>
              <Accordion.Body>
              <div className="text">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Lorem ipsum dolor 5</Accordion.Header>
              <Accordion.Body>
              <div className="text">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>
      </section>

    </>
  );
}

export default App;
