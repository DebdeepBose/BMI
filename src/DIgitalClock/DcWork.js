import "./DC.css";

function WorkHtml({ hour, minute, second }) { 
  return (
    <div className="container">
      <div className="shortbox">
        <span className="boxtime" id="hour">
          {hour < 10 ? "0" + hour : hour}
        </span>
        <span className="text">Hours</span>
      </div>
      <div className="shortbox">
        <span className="boxtime" id="minute">
          {minute < 10 ? "0" + minute : minute}
        </span>
        <span className="text">Minutes</span>
      </div>
      <div className="shortbox">
        <span className="boxtime" id="second">
          {second < 10 ? "0" + second : second}
        </span>
        <span className="text">Seconds</span>
      </div>
    </div>
  );
}

export default WorkHtml;
