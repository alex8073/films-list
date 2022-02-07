import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import FilmsContainer from "./components/Films/FilmsContainer";
import MainPage from "./components/MainPage/MainPage";
import "materialize-css";

const App = () => {
    return (
        <>
            <Header />
            <section>
                <div className="container" style={{ paddingTop: "12px" }}>
                    <Switch>
                        <Route path="/films" component={FilmsContainer} />
                        <Route path="/" component={MainPage} />
                    </Switch>
                </div>
            </section>
        </>
    );
};

export default App;
