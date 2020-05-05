import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { ByCountry, ByCountries, HomePage } from "../../components";

import "bootstrap/dist/css/bootstrap.min.css";

const NavigationMenu = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          COVID-19
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/byCountry">
              By Country
            </Nav.Link>
            <Nav.Link as={NavLink} to="/byCountries">
              By Countries
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/byCountry" component={ByCountry} />
        <Route exact path="/byCountries" component={ByCountries} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default NavigationMenu;
