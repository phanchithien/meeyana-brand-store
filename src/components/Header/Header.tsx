import { Container, Row, Col, Navbar, NavDropdown, Nav } from "react-bootstrap";
import logo from '/logo.jpg';
import searchLogo from '/search.png'
import classes from './header.module.scss'


function Header() {
  return (

    <Navbar className={classes.navbar} expand="lg" fixed="top">
      <Container style={{ padding: 0}}>
        <Col xl={5}>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="/">TRANG CHỦ</Nav.Link>
              <Nav.Link href="#link">SẢN PHẨM</Nav.Link>
              <Nav.Link href="#link">BỘ SƯU TẬP</Nav.Link>
              <Nav.Link href="#link">BẢNG SIZE</Nav.Link>
              <Nav.Link href="#link">VỀ CHÚNG TÔI</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col>
          <Nav.Link href="/">
            <img src={logo} className={classes.logo} alt="Shopping cart application" />
          </Nav.Link>
        </Col>
        <Col xl={5} className={classes.cartWidget}>
          <Nav>
            <Nav.Link href="/cart">
              <img src={searchLogo} className={classes.searchLogo} alt="Shopping cart application" />
            </Nav.Link>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  )
}

export default Header;