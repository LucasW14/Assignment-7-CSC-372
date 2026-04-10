import { useState, useRef } from 'react';
import './style.css';

function RPS() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [winner, setWinner] = useState(null);

    const [currentImage, setCurrentImage] = useState("/images/question-mark.PNG");
    const [shuffling, setShuffling] = useState(false);

    const intervalRef = useRef(null);

    const [playerScore, setPlayerScore] = useState(0);
    const [opponentScore, setOpponentScore] = useState(0)

    const images = [
        "/images/rock.PNG",
        "/images/paper.PNG",
        "/images/scissors.PNG",
    ];

    const randomComputerChoice = () => {
        return images[Math.floor(Math.random() * images.length)]
            .split("/").pop().replace(".PNG", "");
    };

    const determineWinner = (player, computer) => {
        if (player === computer) return setWinner("Draw");

        if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            setWinner("Player Wins");
            setPlayerScore(playerScore + 1);
        } else {
            setWinner("Computer Wins");
            setOpponentScore(opponentScore + 1);
        }
    };

    const startShuffle = (player) => {
        setPlayerChoice(player);
        setWinner(null);
        setShuffling(true);

        intervalRef.current = setInterval(() => {
            const randomImg = images[Math.floor(Math.random() * images.length)];
            setCurrentImage(randomImg);
        }, 500);

        setTimeout(() => {
            clearInterval(intervalRef.current);

            const computer = randomComputerChoice();
            setComputerChoice(computer);
            setCurrentImage(`/images/${computer}.PNG`);

            setShuffling(false);

            determineWinner(player, computer);

        }, 3000);
    };

    const reset = () => {

        setPlayerScore(0);
        setOpponentScore(0);


    }

    return (
        <>
            <h2>Rock Paper Scissors</h2>

            <p>Player Choice: {playerChoice}</p>
            <p>Computer Choice: {computerChoice}</p>
            <p>Winner: {winner}</p>
            <p>Player Score: {playerScore}</p>
            <p>Opponent Score:{opponentScore}</p>
            <button onClick={()=>reset()}>Reset Score</button>



            <div className="game-container">

                <div className="player-row">
                    <img src="/images/rock.PNG" onClick={() => startShuffle('rock')} />
                    <img src="/images/paper.PNG" onClick={() => startShuffle('paper')} />
                    <img src="/images/scissors.PNG" onClick={() => startShuffle('scissors')} />
                </div>

                <div className="computer-row">
                    <img src={currentImage} alt="computer" disabled={shuffling} />
                </div>

            </div>
        </>
    );
}

export default RPS;