import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ICartItem, IItem } from "../../app/redux/interface";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  selectCartItems,
} from "../../app/redux/slices/cartSlice";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";


interface ICartComponent {
  isDrawer?: boolean;
}

const Cart = ({ isDrawer }: ICartComponent) => {
  const navigate = useNavigate();
  const cartItemsData = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const [isCartDrawer, setCartDrawer] = useState<boolean | undefined>(isDrawer);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleAddToCart = (item: IItem) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item: IItem) => {
    dispatch(removeFromCart(item));
  };
  const handleDecreaseCart = (item: IItem) => {
    dispatch(decreaseCart(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const navigateToCart = () => {
    return navigate("/cart");
  };

  const navigateToShop = () => {
    return navigate("/shop");
  };
  const totalAmount = useMemo(() => {
    const totalSum = cartItemsData.map((i: ICartItem) => {
      return i.itemQuantity * i.price;
    });
    const sum = totalSum.reduce((a, b) => a + b, 0);

    return sum;
  }, [cartItemsData]);

  const totalDiscount = useMemo(() => {
    const totalSum = cartItemsData.map((i: ICartItem) => {
      const total = i.itemQuantity * i.price;
      if (total > 2000) {
        return total * 0.1;
      }
      return;
    });

    const sum = totalSum?.reduce((a: any, b: any) => a + b, 0);

    return sum;
  }, [cartItemsData]);

  const totalAmountWithDiscount = totalDiscount
    ? totalAmount - totalDiscount
    : totalAmount;
  return (
    <>
      {cartItemsData.length ? (
        <>
          {" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              margin: "20px",
            }}
            onClick={handleClearCart}
          >
            {" "}
            <Typography variant="body2">
              Clear All <CloseIcon fontSize="inherit" />
            </Typography>{" "}
          </Box>
          <Grid container sx={{ width: "80%", margin: "1% auto" }} spacing={5}>
            <Grid
              item
              lg={isCartDrawer ? 12 : 8}
              md={isCartDrawer ? 12 : 8}
              xs={12}
            >
              {!isCartDrawer ? (
                <Typography variant="h6" component="div" mt={2}>
                  My cart
                </Typography>
              ) : null}

              {cartItemsData.length
                ? cartItemsData.map((i: ICartItem) => (
                    <Box
                      sx={{ display: "flex", flexDirection: "column" }}
                      key={i.id}
                    >
                      {isCartDrawer ?
                       (
                        <Box
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                          key={i.id}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <Box>
                              <img
                                src={i.src}
                                alt="item"
                                style={{
                                  width: "90px",
                                  height: "90px",
                                }}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                width: "50%",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  marginLeft: "20px",
                                }}
                              >
                                <Typography variant="body1" component="div">
                                  EZ 0000{i.id}
                                </Typography>

                                <Typography variant="body2" component="div">
                                  ${i.price}.00
                                </Typography>

                                <Box
                                  sx={{
                                    border: "0.8px solid grey",
                                    width: "70px",
                                    height: "30px",
                                    margin: " 5px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-around",
                                    fontSize: "15px",
                                  }}
                                >
                                  {" "}
                                  <RemoveIcon
                                    fontSize="inherit"
                                    onClick={() => handleDecreaseCart(i)}
                                  />
                                  {i.itemQuantity}
                                  <AddIcon
                                    fontSize="inherit"
                                    onClick={() => handleAddToCart(i)}
                                  />
                                </Box>
                              </Box>
                            </Box>
                            {isHovering && (
                              <Box
                                mt={1}
                                ml={1.5}
                                sx={{
                                  border: "1px solid grey",
                                  borderRadius: "50px",
                                  width: "20px",
                                  height: "20px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "12px",
                                }}
                              >
                                <CloseIcon
                                  fontSize="inherit"
                                  onClick={() => handleRemoveFromCart(i)}
                                />
                              </Box>
                            )}
                          </Box>
                          <Box width="100%" mt={2} mb={3}>
                            <Divider />
                          </Box>
                        </Box>
                      ) : (
                        <>
                          <Box width="100%" mt={2} mb={3}>
                            <Divider />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <Box>
                              <img
                                src={i.src}
                                alt="item"
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  border: "0.8px solid grey",
                                }}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                width: "50%",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  marginLeft: "20px",
                                }}
                              >
                                <Typography variant="body1" component="div">
                                  EZ 0000{i.id}
                                </Typography>

                                <Typography
                                  variant="body2"
                                  component="div"
                                  mt={1}
                                >
                                  ${i.price}.00
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  border: "0.8px solid grey",
                                  width: "30%",
                                  height: "30px",
                                  margin: " 5px",
                                  display: "flex",
                                  justifyContent: "space-around",
                                  padding: "2px",
                                }}
                              >
                                {" "}
                                <RemoveIcon
                                  fontSize="small"
                                  onClick={() => handleDecreaseCart(i)}
                                />{" "}
                                {i.itemQuantity}
                                <AddIcon
                                  fontSize="small"
                                  onClick={() => handleAddToCart(i)}
                                />
                              </Box>
                            </Box>
                            <Box mt={1} ml={4}>
                              <Typography variant="body1" component="div">
                                <>${i.price * i.itemQuantity}.00 </>
                              </Typography>
                              {/* <Typography variant="body1" component="div">
                                {i.price * i.itemQuantity > 2000
                                  ? ` -$ ${i.price * i.itemQuantity * 0.1}`
                                  : null}
                              </Typography> */}
                            </Box>
                            <Box mt={1} ml={3}>
                              <CloseIcon
                                fontSize="small"
                                onClick={() => handleRemoveFromCart(i)}
                              />
                            </Box>
                          </Box>
                        </>
                      )}
                    </Box>
                  ))
                : null}
            </Grid>

            <Grid
              item
              lg={isCartDrawer ? 12 : 4}
              md={isCartDrawer ? 12 : 4}
              xs={12}
              mt={2}
            >
              {isCartDrawer ? 
              (
                <Box
                  sx={{
                    marginBottom: "15px",
                  }}
                >
                  {/* <Divider />
                  <Box mt={1} className={classes.subtotal}>
                    <Typography variant="body1" component="div" mb={2}>
                      Subtotal
                    </Typography>
                    <Typography variant="body1" component="div" mb={2}>
                      ${totalAmount}.00
                    </Typography>
                  </Box>

                  <Box className={classes.subtotal}>
                    <Typography variant="body2" component="div" mb={2}>
                      Discount
                    </Typography>
                    <Typography variant="body2" component="div" mb={2}>
                      ${!isNaN(totalDiscount) ? totalDiscount : 0}.00
                    </Typography>
                  </Box>
                  <Divider /> */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    mt={1}
                    mb={1}
                  >
                    <Typography variant="h6" component="div">
                      Total
                    </Typography>
                    {/* <Typography variant="h6" component="div">
                      $
                      {totalDiscount
                        ? totalAmount - totalDiscount
                        : totalAmount}
                      .00
                    </Typography> */}
                    <Typography variant="h6" component="div">
                      ${totalAmount}.00
                    </Typography>
                  </Box>
                  <Divider />
                  <Button
                    onClick={navigateToCart}
                    variant="contained"
                    fullWidth
                    style={{
                      background: "#44DBBD",
                      color: "white",
                    }}
                  >
                    View Cart
                  </Button>
                </Box>
              ) : (
                <>
                  {" "}
                  <Typography variant="h6" component="div" mb={2}>
                    Order summary
                  </Typography>
                  {/* <Divider />
                  <Box mt={3} className={classes.subtotal}>
                    <Typography variant="body1" component="div" mb={2}>
                      Subtotal
                    </Typography>
                    <Typography variant="body1" component="div" mb={2}>
                      ${totalAmount}.00
                    </Typography>
                  </Box>
                  <Box className={classes.subtotal}>
                    <Typography variant="body2" component="div" mb={2}>
                      Discount
                    </Typography>
                    <Typography variant="body2" component="div" mb={2}>
                      ${!isNaN(totalDiscount) ? totalDiscount : 0}.00
                    </Typography>
                  </Box> */}
                  <Divider />
                  <Box
                    mt={3}
                    mb={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" component="div">
                      Total
                    </Typography>
                    <Typography variant="h6" component="div">
                      ${totalAmount}.00
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "#44DBBD",
                      color: "white",
                    }}
                  >
                    Buy
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </>
      ) : (
        <Box sx={{ width: "270px", margin: "5%", right:"0"}}>
          <Typography variant="h5" component="div" mb={3} ml={isCartDrawer? 8 :0}>
            Cart is empty
          </Typography>
          {!isCartDrawer? <Button
            onClick={navigateToShop}
            variant="contained"
            fullWidth
            sx={{
              background: "#44DBBD",
              color: "white",
            }}
          >
            Go to Shop
          </Button>: null}
         
        </Box>
      )}
    </>
  );
};

export default Cart;
