import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAccount } from "wagmi";

import Toaster from "./components/Toaster";
import Error from "./Error";
import Connect from "./pages/Connect";
import Create from "./pages/Create";
import Dash from "./pages/Dashboard";
import Delegate from "./pages/Delegate";
import Landing from "./pages/Landing";
import Transfer from "./pages/Transfer";

function ConnectedOnly({ children }) {
  const { isConnected } = useAccount();
  const { search } = useLocation();

  if (!isConnected) {
    return <Navigate replace={true} to={`/connect${search}`} />;
  }

  return children;
}

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="connect" element={<Connect />} />
        <Route
          path="dash"
          element={
            <ConnectedOnly>
              <Dash />
            </ConnectedOnly>
          }
        />
        <Route
          path="create"
          element={
            <ConnectedOnly>
              <Create />
            </ConnectedOnly>
          }
        />
        <Route
          path="transfer"
          element={
            <ConnectedOnly>
              <Transfer />
            </ConnectedOnly>
          }
        />
        <Route
          path="delegate"
          element={
            <ConnectedOnly>
              <Delegate />
            </ConnectedOnly>
          }
        />

        {/* 404 page */}
        <Route path="*" element={<Error>This page does not exist.</Error>} />
      </Routes>
    </>
  );
}
