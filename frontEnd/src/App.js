import React from "react";

import { AuthProvider } from "./components/pages/login/context/AuthProvider";
import RoutePages from "./RoutePages";

function App() {
  return (
    <div>
      <AuthProvider>
        <RoutePages />
      </AuthProvider>
    </div>
  );
}

export default App;
