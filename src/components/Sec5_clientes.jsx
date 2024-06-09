import nebula from '.././assets/nebulaBlue.jpg'; // Logo
import images from '.././assets/Imagen.png'; // Logo
import images2 from '.././assets/Imagen2.png'; // Logo
import images3 from '.././assets/Imagen3.png'; // Logo
import images4 from '.././assets/Imagen4.png'; // Logo


export function Sec5_cliente() {
  return (
    <section>
      <div>
            <img src={nebula} alt="Nebulosa" />
            <h3>Clientes de Nebula Tech Innovations</h3>
        </div>
      <div>
        <div>
          <img src={images} alt="imagen1" />
        </div>
        <div> 
          <img src={images2} alt="imagen2" />
        </div>
        <div>
          <img src={images3} alt="imagen3" />
        </div>
        <div>
          <img src={images4} alt="imagen4" />
        </div>
      </div>
      
    </section>
  );
}
