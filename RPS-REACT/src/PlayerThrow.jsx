import { useState } from 'react';
import './style.css';

function PlayerThrow() {
    // Declare a state variable called 'count', initialized to 0.
    // setCount is the function used to update the 'count' state.
    const [count, setCount] = useState(0);



function choice(event) {
  const image = event.currentTarget;
  const choiceList = document.querySelectorAll(".myChoice");

  choiceList.forEach(function (element) {
    element.classList.remove("myChoice");
  });

  image.classList.add('myChoice');




  opponentChoice();

}






    return (
        <div class="userDiv">

            <div class="image-row">

                <div class="image-item">
                    <img class="image" src="images/rock.PNG" alt="" onClick={choice}/>
                </div>


                <div class="image-item">
                    <img class="image" src="images/paper.PNG" alt=""  onClick={choice} />
                </div>

                <div class="image-item">
                    <img class="image" src="images/scissors.PNG" alt="" onClick={choice} />
                </div>

            </div>



        </div>
    );
}
export default PlayerThrow;






