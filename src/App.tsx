import { useEffect, useState } from "react";

const App = () => {
  const [motionEvent, setMotionEvent] = useState<DeviceMotionEvent>();
  const handleMotionChange = (evt: DeviceMotionEvent) => setMotionEvent(evt);

  useEffect(() => {
    window.addEventListener("devicemotion", handleMotionChange);
  });

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
        <h2>Acceleration</h2>
        <ul>
          <li>X: {motionEvent?.acceleration?.x ?? 0}</li>
          <li>Y: {motionEvent?.acceleration?.y ?? 0}</li>
          <li>Z: {motionEvent?.acceleration?.z ?? 0}</li>
        </ul>
        <h2>Acceleration Including Gravity</h2>
        <ul>
          <li>X: {motionEvent?.accelerationIncludingGravity?.x ?? 0}</li>
          <li>Y: {motionEvent?.accelerationIncludingGravity?.y ?? 0}</li>
          <li>Z: {motionEvent?.accelerationIncludingGravity?.z ?? 0}</li>
        </ul>
      </main>
    </div>
  );
};

export default App;
