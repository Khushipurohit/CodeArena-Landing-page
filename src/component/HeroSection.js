import React, { useState } from "react";
import Typewritter from "typewriter-effect";
import trophy from "../image/Trophy3.png";
export default function Section2() {
  // const titile = () =>{
  //   const [state]=useState({
  //     title1: "The central enemy of reliability is complexity.",
  //     title2: "When in doubt, use brute force.",
  //     title3: "Deleted code is debugged code.",
  //   })
  // }

  return (
    <>
      <div className="grad">
        <div className="container">
          <div className="box">
            <div className="container">
              <div className="row">
                <div className="col-md-6 title">
                  Code Arena
                  <div className="container">
                    <div className="bottom-text">
                      <div className="text">
                        <Typewritter
                          options={{
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            strings: [
                              "The enemy of reliability is complexity.",
                              "When in doubt, use brute force.",
                              "Deleted code is debugged code.",
                            ],
                          }}
                        />
                        <div id="para">
                          <span>
                            <div className="hero">
                              
                                Join the competition and start competing with
                                fellow MBMite's today!
                              
                              
                            </div>
                            
                            
                            <div className="points">
                            
                              We challenge YOU to participate in our contests
                              and become the best. We provide a safe and
                              supportive platform for students to improve their
                              programming skills.
                            </div>
                            <div>
                              <button id="register">
                                <p className="btn-txt">Register</p>
                                <span className="first"></span>
                                <span className="second"></span>
                                <span className="third"></span>
                                <span className="fourth"></span>
                              </button>
                              
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src={trophy}
                    // height="2000"
                    // width="1500"
                    alt="Your image"
                    className="img-fluid"
                  />
                  <div className="image-footer">
                    Our mission is to help you improve yourself and land your
                    dream offer. In the past few years, our users have landed
                    jobs at top companies around the world.
                  </div>
                </div>
                 
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
