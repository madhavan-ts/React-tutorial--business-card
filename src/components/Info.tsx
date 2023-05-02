import image from "../assets/1661432671177.jpeg";
import "./styles/Info.css";
function Info() {
  return (
    <>
      <div className="img-container"><img src={image} alt="" /></div>
      <div className="info-container">
          <h1 className="info-heading">Srekaravarshan</h1>
          <h3 className="info-role">Software Developer</h3>
          <p className="info-location">Madurai,Tamilnadu</p>
      </div>

      <div className="contact">
        <a href="mailto:srekaravarshan@gmail.com" className="btn btn-white"><i className="fa-solid fa-envelope"></i>Email</a>
        <a href="" className="btn btn-blue"><i className="fa-brands fa-linkedin-in"></i>Linked In</a>
      </div>
    </>
  );
}

export default Info;
