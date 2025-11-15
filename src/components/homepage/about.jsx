import Contact from "../contact"

export default function About(){
    return (
       <div className="container text-center mt-5 mb-5">
<div className="text-center">
    <img src="https://media.licdn.com/dms/image/v2/D5603AQErqYpDdgoU8g/profile-displayphoto-shrink_200_200/B56ZpUNVbpHYAY-/0/1762349411132?e=1764806400&v=beta&t=Gg5kKYxDtAfOB_qUf8zsrCvq1bRweUSIOp6FiKss-zc" alt ="myimage" className="sahil"></img>
    <h1 className="mt-3 mb-2 name">Hii, I'm Sahil Sheikh</h1>
<p className="info fs-6">A dedicated B.Tech Computer Science and Engineering student, currently in the third year,
    <br></br> specializing in Full Stack Web Development. Skilled in MongoDB, Express.js, React,<br></br> and Node.js, with experience in building both frontend and backend solutions.<br></br>Still chasing mastery.</p>
<div>
   <a href="#contact"  className="btn btn-dark  touch  mt-4 mb-3 btn-sm">
          Get in touch
        </a>
</div>
 
</div>
       </div>
    )
}