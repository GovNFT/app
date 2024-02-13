import { useEffect } from "react";
import { useAccount } from "wagmi";
import { Route, Switch, useLocation, useParams } from "wouter";

import NotFound from "./NotFound";
import Toaster from "./components/Toaster";
import Connect from "./pages/Connect";
import Create from "./pages/Create";
import Dash from "./pages/Dashboard";
import Delegate from "./pages/Delegate";
import Govnft from "./pages/Govnft";
import Landing from "./pages/Landing";
import Minted from "./pages/Minted";
import Transfer from "./pages/Transfer";

function ConnectedOnly({ children }) {
  const { isConnected } = useAccount();
  const [_location, navigate] = useLocation();

  useEffect(() => {
    !isConnected && navigate("/");
  }, [isConnected, navigate]);

  if (isConnected) {
    return children;
  }
}

export default function App() {
  return (
    <>
      <Toaster />

      {/* 404 page support using the `Switch` */}
      <Switch>
        <Route path="/">
          <Landing />
        </Route>

        <Route path="/connect">
          <Connect />
        </Route>

        <Route path="/dash">
          <ConnectedOnly>
            <Dash />
          </ConnectedOnly>
        </Route>

        <Route path="/create">
          <ConnectedOnly>
            <Create />
          </ConnectedOnly>
        </Route>

        <Route path="/nft/" nest>
          <Route path="/:id">
            <Govnft />
          </Route>
          <Route path="/:id/transfer">
            <Transfer />
          </Route>
          <Route path="/:id/delegate">
            <Delegate />
          </Route>
        </Route>

        <Route path="/minted">
          <ConnectedOnly>
            <Minted />
          </ConnectedOnly>
        </Route>

        <Route>
          <NotFound>This page does not exist.</NotFound>
        </Route>
      </Switch>
    </>
  );
}
