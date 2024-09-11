import Header from "../../components/Header";
import Cellphone from "../../assets/cellphone.webp";

export default function Product() {
  return (
    <>
      <Header />
      <section className="h-screen bg-[#F4EEFF] flex items-center justify-center">
        <div className="container mx-auto p-8 bg-white flex-col flex items-center justify-center">
          <header className="mb-6">
            <h1 id="product-title" className="text-3xl font-bold text-gray-800">
              Nome do Produto
            </h1>
          </header>

          <section id="product-images" className="flex mb-6">
            <div id="thumbnail-images" className="flex flex-col space-y-2 mr-4">
              <img
                src={Cellphone}
                alt="Imagem 1"
                className="size-20 object-cover cursor-pointer hover:opacity-80 border border-gray-200"
              />
              <img
                src={Cellphone}
                alt="Imagem 2"
                className="size-20 object-cover cursor-pointer hover:opacity-80 border border-gray-200"
              />
              <img
                src={Cellphone}
                alt="Imagem 3"
                className="w-20 h-20 object-cover cursor-pointer hover:opacity-80"
              />
            </div>
            <div className="flex-1">
              <img src={Cellphone} alt="" className="size-96 object-cover border border-gray-200" />
            </div>
          </section>

          <section id="product-details" className="mb-6">
            <div id="product-price" className="text-2xl font-semibold text-green-600 mb-4">
              <span>R$ 99,99</span>
            </div>
            <button
              id="buy-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Comprar agora
            </button>
          </section>

          <section id="product-description" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Descrição do Produto</h2>
            <p className="text-gray-700">
              Este é um produto de alta qualidade que oferece ótimo desempenho e durabilidade...
            </p>
          </section>

          <section id="product-reviews">
            <h3 className="text-lg font-semibold mb-2">Avaliações</h3>
            <div className="review mb-2">
              <p className="text-gray-700">
                <strong className="font-medium">Usuário 1</strong>: Ótimo produto, recomendo!
              </p>
            </div>
            <div className="review">
              <p className="text-gray-700">
                <strong className="font-medium">Usuário 2</strong>: Produto chegou no prazo, tudo
                certo.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}