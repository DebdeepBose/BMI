import "./Lgc.css";

function Lgc() {
    return (
        <div className="banner">
            <div className="center-text">MY SKILLS</div>
            <div className="slider" style={{ "--quantity": 9 }}>
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
            </div>
        </div>
    );
}

export default Lgc;
