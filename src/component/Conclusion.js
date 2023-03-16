import React from 'react'
import code from "../image/code.png";
import trophy2 from "../image/BB.png";
function Conclusion() {
  return (
    <>
    <div className='container text-cente'>
    <h2 className='fear text-cente'>
        CodeArena will help you overcome your fear of competitive programming..
    </h2>
    <h4 className='fear2'> <i>"CodeArena is not just about winning contests, it's also about learning and improving your coding skills. So, even if you don't win, you'll still have gained valuable experience and knowledge that will help you in future coding challenges."</i>
</h4>
    </div>
    <div className="container">
        <div className="inner row">
            <div className="col-sm-6" id='upsolving'>
            
                  <div className='image-name2'>Coding Contest..</div>
                  Welcome to our weekly competitive programming contest!

Are you ready to put your coding skills to the test and compete against other talented programmers? <b>Every Tuesday</b>, we will be hosting a new contest with a variety of challenges designed to challenge your problem-solving abilities and push your coding skills to the limit..
            
            </div>
            <div className="col-sm-6" id='codingcontest'>
            <img
                    src={code}
                    // height="2000"
                    // width="1500"
                    alt="Your image"
                    className="img-fluid"
                  />
                  
            
            
            </div>

        </div>
      
    </div>
    </>
  )
}

export default Conclusion
