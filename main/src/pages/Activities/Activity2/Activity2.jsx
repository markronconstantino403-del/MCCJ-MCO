import React, { useState, useEffect, useRef } from 'react';
import styles from './Activity2.module.css';

function Activity2() {
  const [seconds, setSeconds] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [mode, setMode] = useState('stopwatch');
  const [countdownTime, setCountdownTime] = useState(10);

  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        if (mode === 'stopwatch') {
          setSeconds(prev => prev + 1);  
        } else {
          setSeconds(prev => {
            if (prev <= 1) {
              setIsRunning(false);
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, mode]);

  useEffect(() => {
    setIsRunning(false);
    setSeconds(0);
  }, [mode]);

  const startTimer = () => {
    if (mode === 'countdown' && seconds === 0) {
      setSeconds(countdownTime);
    }
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const recordLap = () => {
    if (isRunning) {
      const lapTime = formatTime(seconds);
      setLaps([...laps, lapTime]);
    }
  };

  const clearLaps = () => {
    setLaps([]);
  };

  const setCountdown = () => {
    const value = parseInt(inputRef.current?.value);
    if (value > 0) {
      setCountdownTime(value);
      setSeconds(value);
    }
    inputRef.current.value = '';
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>Timer App</h1>

        <div className={styles.modeButtons}>
          <button 
            onClick={() => setMode('stopwatch')}
            className={mode === 'stopwatch' ? styles.active : ''}
          >
            Stopwatch
          </button>
          <button 
            onClick={() => setMode('countdown')}
            className={mode === 'countdown' ? styles.active : ''}
          >
            Countdown
          </button>
        </div>

        <div className={styles.timer}>
          {formatTime(seconds)}
        </div>

        <div className={styles.buttons}>
          {!isRunning && (
            <button onClick={startTimer} className={styles.start}>Start</button>
          )}
          {isRunning && (
            <button onClick={stopTimer} className={styles.stop}>Stop</button>
          )}
          <button onClick={resetTimer} className={styles.reset}>Reset</button>
          <button onClick={recordLap} className={styles.lap}>Record Lap</button>
        </div>

        {mode === 'countdown' && (
          <div className={styles.countdownSetup}>
            <h3>Set Countdown Time</h3>
            <div>
              <input 
                ref={inputRef}
                type="number" 
                placeholder="Enter seconds"
              />
              <button onClick={setCountdown}>Set</button>
            </div>
            <p>Target: {countdownTime} seconds</p>
          </div>
        )}

        <div className={styles.lapsContainer}>
          <div className={styles.lapsHeader}>
            <h3>Laps ({laps.length})</h3>
            {laps.length > 0 && (
              <button onClick={clearLaps}>Clear</button>
            )}
          </div>
          
          {laps.length === 0 ? (
            <p className={styles.emptyLaps}>No laps recorded yet</p>
          ) : (
            <ul>
              {laps.map((lap, index) => (
                <li key={index}>
                  Lap {index + 1}: {lap}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.status}>
          Status: {mode === 'stopwatch' ? 'Stopwatch' : 'Countdown'} is 
          {isRunning ? ' Running ▶️' : ' Stopped ⏸️'}
        </div>
      </div>
    </div>
  );
}

export default Activity2;