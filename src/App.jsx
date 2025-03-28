import { useState } from "react";
import Form from "./components/form";
import Popup from "./components/popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="font-Karla bg-Green-200 relative flex min-h-screen items-center justify-center">
      <Form setShowPopup={setShowPopup}></Form>

      <Popup showPopup={showPopup}></Popup>
    </main>
  );
}

export default App;
