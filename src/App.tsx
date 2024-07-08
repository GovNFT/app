import { useEffect } from "react";
import { useAccount } from "wagmi";
import { Route, Switch, useLocation } from "wouter";

import NotFound from "./NotFound";
import Toaster from "./components/Toaster";
import Connect from "./pages/Connect";
import Create from "./pages/Create";
import Dash from "./pages/Dashboard";
import Delegate from "./pages/Delegate";
import Docs from "./pages/Docs";
import Govnft from "./pages/Govnft";
import Landing from "./pages/Landing";
import Minted from "./pages/Minted";
import Transfer from "./pages/Transfer";

function ConnectedOnly({ children }) {
  const { isConnected } = useAccount();
  const [_, setLocation] = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    !isConnected && setLocation("/connect");
  }, [isConnected]);

  if (isConnected) {
    return children;
  }
}

export default function App() {
  return (
    <>
      <Toaster />

      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/connect" component={Connect} />
        <Route path="/nft/:id" component={Govnft} />
        <Route path="docs" component={Docs} />

        <ConnectedOnly>
          <Route path="/dash" component={Dash} />
          <Route path="/create" component={Create} />
          <Route path="/nft/:id/transfer" component={Transfer} />
          <Route path="/nft/:id/delegate" component={Delegate} />
          <Route path="/minted" component={Minted} />
        </ConnectedOnly>

        {/* 404 page support using the `Switch` */}
        <Route>
          <NotFound>This page does not exist.</NotFound>
        </Route>
      </Switch>
    </>
  );
}
