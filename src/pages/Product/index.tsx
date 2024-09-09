import Header from "../../components/Header";
import Cellphone from "../../assets/cellphone.webp";

function Product() {
  return (
    <>
      <Header />
      <section className="h-screen bg-[#F4EEFF] flex items-center justify-center">
        <div className="bg-white w-[70%] h-[90%] shadow-md flex">
          <div>
            <img src={Cellphone} alt="" className="size-96" />
          </div>
          <div>
            <h2>Cellphone</h2>
            <p>Celphone phone phone phone phone phne</p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
export default Product;
