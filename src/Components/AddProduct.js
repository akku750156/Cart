import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Backdrop,
  Fade,
  Modal,
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
} from "@material-ui/core";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./AddProduct.css";
import "./ModalProduct.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "400px",
    height: "600px",
  },
}));

function AddProduct() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  // const [isloggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      product_img_url: "../images/asus.jpg",
      product_name: "Asus All in One PC's",
      product_price: 21999,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 2,
      product_img_url: "../images/shoe.jpg",
      product_name: "ADIDAS",
      product_price: 1999,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 3,
      product_img_url: "../images/bad.jpeg",
      product_name: "Badminton Racquets",
      product_price: 799,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 4,
      product_img_url: "../images/phone.jpeg",
      product_name: "Mobile",
      product_price: 17999,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 5,
      product_img_url: "../images/watch.jpeg",
      product_name: "Smart-Watch",
      product_price: 3799,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 6,
      product_img_url: "../images/tv.jpeg",
      product_name: "Smart-TV",
      product_price: 23799,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 7,
      product_img_url: "../images/camera.jpeg",
      product_name: "Camera",
      product_price: 20999,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 8,
      product_img_url: "../images/head.jpeg",
      product_name: "Bluetooth Earphones",
      product_price: 1599,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 9,
      product_img_url: "../images/crocs.jpeg",
      product_name: "Footware",
      product_price: 599,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 10,
      product_img_url: "../images/glass.jpeg",
      product_name: "Sun-glasses",
      product_price: 299,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 11,
      product_img_url: "../images/watch.jpeg",
      product_name: "Watches",
      product_price: 1299,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
    {
      id: 12,
      product_img_url: "../images/dress.jpeg",
      product_name: "Kurtis",
      product_price: 1299,
      product_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero itaque quis nostrum. Hic natus dolore a? Cupiditate voluptas, fugit temporibus voluptatem quos distinctio numquam laudantium omnis excepturi nam quiaAspernatur quasi dicta quia ratione doloremque quod eveniet reiciendis accusantium mollitia maxime eligendi iste dolore explicabo, nisi natus facilis neque ut ullam beatae deserunt quas, ea soluta doloribus recusandae. Fuga?Laudantium, adipisci, in quisquam nisi doloribus earum quo quasi, minima minus labore distinctio. Commodi praesentium similique voluptas eius, labore obcaecati distinctio quos? Quisquam nisi ducimus minima dicta beatae nihil error.Solut",
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const removeItem = (cartItem) => {
    let duplicateSetCart = [...cart];
    duplicateSetCart = duplicateSetCart.filter(
      (item) => item.id !== cartItem.id
    );
    setCart(duplicateSetCart);
  };

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].product_price;
    }
    setCartTotal(totalVal);
  };

  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Products" {...a11yProps(0)} />
          <Tab label="Cart" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="panel">
            {products.map((product) => (
              <>
                <div className="product__panel" key={product.id}>
                  <div
                    className="product__img"
                    onClick={() => {
                      handleOpen();
                      setModalId(product.id - 1);
                    }}
                  >
                    <img src={product.product_img_url} alt="" />
                  </div>
                  <h4>{product.product_name}</h4>
                  <p>&#8377;{product.product_price}</p>
                  <button onClick={() => setCart([...cart, product])}>
                    Add to cart
                  </button>
                </div>
              </>
            ))}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <div className="modal_product_container">
                    <div className="modal_product_img">
                      <img src={products[modalId].product_img_url} alt="" />
                    </div>
                    <h3 className="modal_product_name">
                      {products[modalId].product_name}
                    </h3>
                    <h4 className="modal_product_price">
                      {products[modalId].product_price}
                    </h4>
                    <p className="modal_product_desc"></p>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
          {console.log(products)}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {!cart.length ? (
            <div className="cart__panel__cart__Empty panel">
              NO ITEM ADDED YET
            </div>
          ) : (
            <div className="cart__item">
              <div className="cart__panel__cart__Not__Empty panel">
                {cart.map((cartItem) => (
                  <div className="product__panel" key={cartItem.id}>
                    <div className="product__img">
                      <img src={cartItem.product_img_url} alt="" />
                    </div>
                    <h4>{cartItem.product_name}</h4>
                    <p>&#8377;{cartItem.product_price}</p>
                    <button onClick={() => removeItem(cartItem)}>Remove</button>
                  </div>
                ))}
              </div>
              <div className="total__amount">
                <h5>Total : {cartTotal}</h5>
              </div>
            </div>
          )}
          {console.log(cart)}
          {console.log(cart.length)}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default AddProduct;
