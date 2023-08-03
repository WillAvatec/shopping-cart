import Header from "../components/ui/Header";

function ContactUs() {
  return (
    <div className="home">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "3rem",
          marginRight: "3rem",
        }}
      >
        <h1>Contact Us!</h1>
        <p style={{ fontSize: "1.3rem", margin: "0 4rem" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
          <br />
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum."
        </p>
      </div>
    </div>
  );
}
export default ContactUs;
