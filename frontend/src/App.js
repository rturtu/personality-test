import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { theme, GlobalStyle } from "./theme.js";

import LandingPage from "./routes/Landing";
import PersonalityTestPage from "./routes/PersonalityTest";
import ResultsPage from "./routes/Results";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter basename={process.env.REACT_APP_BASENAME || ""}>
                    <Switch>
                        <Route
                            path={"/personality-test"}
                            component={PersonalityTestPage}
                        />
                        <Route path={"/results"} component={ResultsPage} />
                        <Route path={"/"} component={LandingPage} />
                    </Switch>
                </BrowserRouter>
                <GlobalStyle />
            </ThemeProvider>
        </div>
    );
}

export default App;
