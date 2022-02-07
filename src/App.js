import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/header";
import { Films } from "./components/films";
import { MainPage } from "./components/main-page";
import "materialize-css";

const App = () => {
    return (
        <>
            <Header />
            <section>
                <div className="container" style={{ paddingTop: "12px" }}>
                    <Switch>
                        <Route path="/films" component={Films} />
                        <Route path="/" component={MainPage} />
                    </Switch>
                </div>
            </section>
        </>
    );
};

export default App;
