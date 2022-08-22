import React, { useState } from "react";
import style from './style.module.scss';
function Rating() {
  const [raiting, selectRaiting] = useState(null);
  const [thankYou, setThankYou] = useState(false);
  return <div className={style.content}>
    {
      !thankYou ?
        <div className={style.box}>
          <div className={style.icon_star}>
            <img src="/images/icon-star.svg" alt="Logo"></img>
          </div>
          <div className={style.box_content}>
            <h1>How did we do ?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className={style.buttons}>
              <button className={raiting === 1 && style.selected} onClick={() => selectRaiting(1)}>1</button>
              <button className={raiting === 2 && style.selected} onClick={() => selectRaiting(2)}>2</button>
              <button className={raiting === 3 && style.selected} onClick={() => selectRaiting(3)}>3</button>
              <button className={raiting === 4 && style.selected} onClick={() => selectRaiting(4)}>4</button>
              <button className={raiting === 5 && style.selected} onClick={() => selectRaiting(5)}>5</button>
            </div>
            <button className={style.button} onClick={() => setThankYou(true)}>Submit</button>
          </div>
        </div>
        :
        <div className={style.thank_you_box}>
          <div className={style.thank_you}>
            <img src="/images/illustration-thank-you.svg" alt="Logo"></img>
            <div className={style.thank_you_message}>You selected {raiting !== 5 ? raiting : ""} out of 5</div>
            <h1>Thank You!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        </div>
    }

  </div>;
}

export default Rating;
