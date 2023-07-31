// import { useState } from "react";
// import Dropdown from "./components/Dropdown";
// import Link from "./components/Link";
import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
// import Table from "./components/Table";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
    return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      {/* <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link> */}
      <Sidebar />
      <div className="col-span-5">
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        {/* <Route path='/dropdown'>
          <DropdownPage />
        </Route> */}
        {/* for default page path='/' */}
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
        <Route path='/counter'>
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
}

export default App;
