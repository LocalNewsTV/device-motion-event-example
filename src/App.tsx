import { useEffect, useState } from "react";

const App = () => {
  const [motionEvent, setMotionEvent] = useState<DeviceMotionEvent>();
  const [manualEvent, setManualEvent] = useState<DeviceMotionEvent>();
  const handleMotionChange = (evt: DeviceMotionEvent) => setMotionEvent(evt);

  useEffect(() => {
    window.addEventListener("devicemotion", handleMotionChange);
  });
  const getManualEntry = () => {
    setManualEvent(new window.DeviceMotionEvent("devicemotion"));
  };
  return (
    <div>
      <h1>device-motion-event-example</h1>
      <h2>Content</h2>
      <nav>
        <h2>Links</h2>
        <ul>
          <li>
            <a
              href="https://github.com/LocalNewsTV/device-motion-event-example"
              rel="author"
              target="_blank"
            >
              Repo
            </a>
          </li>
          <li>
            <a
              href="https://github.com/LocalNewsTV"
              rel="author"
              target="_blank"
            >
              Creator
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <div>
          <h2>Event Listener Data</h2>
          <h3>Acceleration</h3>
          <ul>
            <li>
              X: {motionEvent?.acceleration?.x! >= 0 && " "}
              {motionEvent?.acceleration?.x?.toFixed(2) ?? "0.00"}
            </li>
            <li>
              Y: {motionEvent?.acceleration?.y! >= 0 && " "}
              {motionEvent?.acceleration?.y?.toFixed(2) ?? "0.00"}
            </li>
            <li>
              Z: {motionEvent?.acceleration?.z! >= 0 && " "}
              {motionEvent?.acceleration?.z?.toFixed(2) ?? "0.00"}
            </li>
          </ul>
          <h3>Acceleration Including Gravity</h3>
          <ul>
            <li>
              X: {motionEvent?.accelerationIncludingGravity?.x! >= 0 && " "}
              {motionEvent?.accelerationIncludingGravity?.x?.toFixed(2) ??
                "0.00"}
            </li>
            <li>
              Y: {motionEvent?.accelerationIncludingGravity?.y! >= 0 && " "}
              {motionEvent?.accelerationIncludingGravity?.y?.toFixed(2) ??
                "0.00"}
            </li>
            <li>
              Z: {motionEvent?.accelerationIncludingGravity?.z! >= 0 && " "}
              {motionEvent?.accelerationIncludingGravity?.z?.toFixed(2) ??
                "0.00"}
            </li>
          </ul>
        </div>

        <button onClick={getManualEntry}>Show current data in Alert</button>

        {manualEvent && (
          <div>
            <h2>Manual Event Trigger</h2>
            <h3>Acceleration</h3>
            <ul>
              <li>
                X: {manualEvent?.acceleration?.x! >= 0 && " "}
                {manualEvent?.acceleration?.x?.toFixed(2) ?? "0.00"}
              </li>
              <li>
                Y: {manualEvent?.acceleration?.y! >= 0 && " "}
                {manualEvent?.acceleration?.y?.toFixed(2) ?? "0.00"}
              </li>
              <li>
                Z: {manualEvent?.acceleration?.z! >= 0 && " "}
                {manualEvent?.acceleration?.z?.toFixed(2) ?? "0.00"}
              </li>
            </ul>
            <h3>Acceleration Including Gravity</h3>
            <ul>
              <li>
                X: {manualEvent?.accelerationIncludingGravity?.x! >= 0 && " "}
                {manualEvent?.accelerationIncludingGravity?.x?.toFixed(2) ??
                  "0.00"}
              </li>
              <li>
                Y: {manualEvent?.accelerationIncludingGravity?.y! >= 0 && " "}
                {manualEvent?.accelerationIncludingGravity?.y?.toFixed(2) ??
                  "0.00"}
              </li>
              <li>
                Z: {manualEvent?.accelerationIncludingGravity?.z! >= 0 && " "}
                {manualEvent?.accelerationIncludingGravity?.z?.toFixed(2) ??
                  "0.00"}
              </li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
