import React from "react";
import Moment from "react-moment";
import "moment-timezone";

function Time() {

    const time = new Date();
    const date = time.getFullYear() + '/'+ time.getMonth() + '/' + time.getDate();

    const greeting = () => {

        if (time.getHours() >= 3 && time.getHours() <= 11) {
            return "Good Morning";
        } else if (time.getHours() >= 12 && time.getHours() <= 17) {
            return "Good Afternoon";
        } else if (time.getHours() >= 18 && time.getHours() <= 23) {
            return "Good Evening";
        }else{
            return "Good Night";
        }

    }



  return (
    <div>
      <p>
        <Moment format='LT'></Moment>
        {greeting()}
        {date}
      </p>
    </div>
  );
}

export default Time;
