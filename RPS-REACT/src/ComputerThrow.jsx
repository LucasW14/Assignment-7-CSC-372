import { useState } from 'react';
import './style.css';
function ComputerThrow() {
    // Declare a state variable called 'count', initialized to 0.
    // setCount is the function used to update the 'count' state.
    const [count, setCount] = useState(0);


    let myTimerId;

    let options = [
        "images/paper.PNG",
        "images/rock.PNG",
        "images/scissors.PNG"
    ];

    /**
     * cycles through images randomly
     */
    function opponentThink() {
        let randomIndex = Math.floor(Math.random() * options.length);
        generate.src = options[randomIndex];
    }

    /**
     * starts cycling and stops after 3 seconds
     */
    function opponentChoice() {

        // start cycling every 100ms
        myTimerId = setInterval(opponentThink, 500);

        // stop after 3 seconds
        setTimeout(function () {
            clearInterval(myTimerId);

            // final choice after stopping
            currentIndex = Math.floor(Math.random() * options.length);
            generate.src = options[currentIndex];

            winner()

        }, 3000);



    }


    return (
        <>
            <div class="computerDiv">


                <div class="image-item" >
                    <img id="generate" src="images/question-mark.PNG" alt="" onClick={opponentChoice} />
                </div>


            </div>

            <div>
                <p>Click lower image to see opponent choice</p>
            </div>

        </>
    );
}

export default ComputerThrow;