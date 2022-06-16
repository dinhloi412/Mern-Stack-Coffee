import Header from "./components/header/Header";
import React from "react";
import Footer from "./components/footer/Footer";
import PageAdmin from "./admin/component/PageAdmin";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Page from "./components/Page";
function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Page />
          <PageAdmin />
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
