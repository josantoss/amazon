import classes from "./header.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TfiMenu } from "react-icons/tfi";
import { LuShoppingCart } from "react-icons/lu";
const Header = () => {
  return (
    <div>
      <section>
        <div className={classes.header_container}>
          <div className={classes.upper_container}>
            <a href={"/"}>
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                style={{ width: "80px", height: "50px" }}
                alt="amazon logo"
              />
            </a>
            <a href="/" className={classes.location}>
              <div
                style={{
                  color: "white",
                  margin: "15px 0 5px 3px",
                  textDecoration: "none",
                }}
              >
                <IoLocationOutline />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "14px",
                    height: "14px",
                    textDecoration: "none",
                  }}
                >
                  Deliver to
                </p>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "15px",
                    textDecoration: "none",
                  }}
                >
                  Ethiopia
                </span>
              </div>
            </a>
            <div className={classes.inputs}>
              <select className={classes.dropdown}>
                <option value="All Departmets">All</option>
                <option value="Arts & Craft">Arts & Craft</option>
                <option value="Automotive">Automotive</option>
                <option value="Baby">Baby</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon"
                className={classes.take_input}
              />
              <CiSearch style={{ backgroundColor: "#F3A847" }} />
            </div>
            <div className={classes.packaging}>
              <a href="/" className={classes.language}>
                <img
                  src="https://image.shutterstock.com/image-vector/usa-waving-flag-pattern-background-260nw-2480140689.jpg"
                  alt="language"
                />
                <select name="" id="lang">
                  <option value="">EN</option>
                </select>
              </a>
              <a href="" className={classes.sign}>
                <p>Hello,sign in</p>
                <span>
                  Accounts & Lists
                  <select name="" id="">
                    <option value=""></option>
                  </select>
                </span>
              </a>
              <a href="/" className={classes.order}>
                <p>Returns</p> <span>& Orders</span>
              </a>
              <a className={classes.carts}>
                <div>
                  0<LuShoppingCart />
                </div>
                <span>Cart</span>
              </a>
            </div>
          </div>
          <div className={classes.lower_header}>
            <a href="/" className={classes.menu}>
              <TfiMenu /> <p>All</p>
            </a>
            <a href="/">
              <p>"Today's Deals"</p>
            </a>
            <a href="/">
              <p> Customer Service</p>
            </a>
            <a href="/">
              <p>Registry</p>
            </a>
            <a href="/">
              <p> Gift Card's</p>
            </a>
            <a href="/">
              <p>Sell</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
