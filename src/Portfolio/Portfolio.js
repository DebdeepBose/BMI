import "./Pfl.css";

function Pfl() {
  return (
    <>
      <header>
        <nav className="NavBar">
          <ul>
            <li className="myname">Debdeep</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="parent">
          <div className="main-box">
            <div className="myinfo">
              <h1>Hey There!</h1>
              <h2>My Name Is Debdeep</h2>
              <h2>I am into Software Development</h2>
              <h2>This is my PORTFOLIO</h2>
            </div>
            <div className="dp"></div>
            <div className="dp2">
              <img src=".png" alt="Will Gib DP lol"></img>
            </div>
          </div>

          {/*THIS BOX STORES DETAILS ABOUT ME */}
          <div className="aboutbox">
            <div className="aboutmeimg">
              <img src="jq.png" alt="mypic"></img>
            </div>
            <div className="Aboutmebox">
              <h2>About Me</h2>
              <p>
                I am a passionate software developer with a strong background in
                problem-solving and software engineering. I specialize in
                backend development, API design, and optimizing applications for
                efficiency and scalability. My journey in software development
                started with a love for coding and a curiosity for technology.
              </p>
              <ul>
                <li> Have Knowledge of C, C++, Java</li>
                <li> Skilled in web development (HTML, CSS, JS, React)</li>
                <li> Love tackling complex algorithms and DSA challenges</li>
                <li>
                   Enthusiastic about creating scalable and efficient
                  solutions
                </li>
              </ul>
            </div>
          </div>
          {/*ABOUT ME BOX ENDS HERE */}

          {/*THIS AREA STORES DETAILS ABOUT MY SKILLS*/}
          <div className="skillbox">
            <div className="skilllogo">
              <div className="banner">
                <div className="center-text">MY SKILLS</div>
                <div className="slider" style={{ "--quantity": 13 }}>
                  <div className="item" style={{ "--position": 1 }}>
                    <img src="/c++.png" alt="cpp" />
                  </div>
                  <div className="item" style={{ "--position": 2 }}>
                    <img src="/java.png" alt="Java" />
                  </div>
                  <div className="item" style={{ "--position": 3 }}>
                    <img src="/html.png" alt="html" />
                  </div>
                  <div className="item" style={{ "--position": 4 }}>
                    <img src="/css.png" alt="css" />
                  </div>
                  <div className="item" style={{ "--position": 5 }}>
                    <img src="/js.png" alt="js" />
                  </div>
                  <div className="item" style={{ "--position": 6 }}>
                    <img src="/jq.png" alt="jq" />
                  </div>
                  <div className="item" style={{ "--position": 7 }}>
                    <img src="/rc.png" alt="rc" />
                  </div>
                  <div className="item" style={{ "--position": 8 }}>
                    <img src="/c.png" alt="c" />
                  </div>
                  <div className="item" style={{ "--position": 9 }}>
                    <img src="/py.png" alt="py" />
                  </div>
                  <div className="item" style={{ "--position": 10 }}>
                    <img src="/py.png" alt="py" />
                  </div>
                  <div className="item" style={{ "--position": 11 }}>
                    <img src="/py.png" alt="py" />
                  </div>
                  <div className="item" style={{ "--position": 12 }}>
                    <img src="/py.png" alt="py" />
                  </div>
                  <div className="item" style={{ "--position": 13 }}>
                    <img src="/py.png" alt="py" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*SKILL DETAILS ENDS HERE */}


        <div className="projectbox">
          
        </div>

        </div>
      </main>
    </>
  );
}

export default Pfl;
