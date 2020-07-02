import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ProductImage from "./ProductImage";
import Images from "../Images/image 95.png";
import ImageTwo from "../Images/image 74.png";
import "./product.css";
import { Card, CardContent } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import Header from "../Header/Header";
import SimilarProduct from "./SimilarProduct";

const Product = () => {
  const [star] = useState(5);
  const [similarProduct, setSimilarProduct] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <Container fluid={true} style={{ padding: "3%" ,marginTop:'35px'}}>
        <Row>
          <Col lg={12} style={{ textAlign: "center" }}>
            <ProductImage src={Images} className={"productImage"} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Container fluid={true}>
              <Row>
                <Col md={12}>
                  <Card
                    className={'productCardBox'}
                    style={{ height: "600px", padding: "2%" }}
                    variant="outlined"
                  >
                    <CardContent>
                      <Row>
                        <Col md={5}>
                          <span>
                            <StarIcon
                              className={
                                star >= 1
                                  ? "withratingColor"
                                  : "withoutRatingColor"
                              }
                            />
                          </span>
                          <span>
                            <StarIcon
                              className={
                                star >= 2
                                  ? "withratingColor"
                                  : "withoutRatingColor"
                              }
                            />
                          </span>
                          <span>
                            <StarIcon
                              className={
                                star >= 3
                                  ? "withratingColor"
                                  : "withoutRatingColor"
                              }
                            />
                          </span>
                          <span>
                            <StarIcon
                              className={
                                star >= 4
                                  ? "withratingColor"
                                  : "withoutRatingColor"
                              }
                            />
                          </span>
                          <span>
                            <StarIcon
                              className={
                                star >= 5
                                  ? "withratingColor"
                                  : "withoutRatingColor"
                              }
                            />
                          </span>
                          <span
                            style={{
                              marginLeft: "10px",
                              marginTop: "40px",
                              padding: "5%",
                              paddingTop: "7%",
                            }}
                          >
                            4.3 stars | 24 ratings | 1 review
                          </span>
                          <hr />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                          <h2>Rs. 675</h2>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col md={12} className={"productFont"}>
                          Gift a set of two beautiful looking personalized
                          planters and make the environment go green and fresh.
                          Both the planters are in whitish color with option of
                          personalized name on one of them to make it look
                          special. The other planter has a beautiful New Year
                          wishes on it. ( Only Planter Set){" "}
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col md={3}>
                          <p className={"productFont"}>Key constituents :</p>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col md={3}>
                          <p className={"productFont"}>
                            Ceramic Small Square Shape Planters
                          </p>
                          <p className={"productFont"}>
                            {" "}
                            Ceramic BigSquare Shape Planters
                          </p>
                        </Col>
                      </Row>
                      <br />
                      <Row style={{ textAlign: "center" }}>
                        <Col md={3}></Col>
                        <Col md={6} style={{ textAlign: "center" }}>
                          <Button color="success" style={{ width: "100%" }} onClick={() => {
                            window.location = `/cart`
                          }}>
                            Buy now(Rs.675)
                          </Button>
                        </Col>
                        <Col md={3}></Col>
                      </Row>
                    </CardContent>
                  </Card>
                  <br />
                  <Card
                    className={'productCardBox'}
                    style={{ height: "120px", textAlign: "center" }}
                    variant="outlined"
                  >
                    <CardContent>
                      <Button
                        outline={true}
                        className={"similarProductBtn"}
                        onClick={() => {
                          setSimilarProduct(!similarProduct);
                        }}
                      >
                        <ProductImage
                          src={ImageTwo}
                          className={"similarProduct"}
                        />
                      </Button>
                    </CardContent>
                  </Card>
                  <br />
                  {similarProduct === true ? <SimilarProduct /> : null}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Product;