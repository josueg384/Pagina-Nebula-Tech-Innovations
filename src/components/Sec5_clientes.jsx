import empresa1 from '.././assets/LogoHBMF.webp'; 
import empresa2 from '.././assets/LogoLaCurva.webp'; 
import empresa3 from '.././assets/LogoUneme.webp';
import empresa4 from '.././assets/LogoElPino.webp'; 

export function Sec5_Clientes() {
  return (
    <section>
      <h3>Clientes de Nebula Tech Innovations</h3>
      <div>
        <div>
          <img src={empresa1} alt="Logotipo empresa 1" />
        </div>
        <div>
          <img src={empresa2} alt="Logotipo empresa 2" />
        </div>
        <div>
          <img src={empresa3} alt="Logotipo empresa 3" />
        </div>
        <div>
          <img src={empresa4} alt="Logotipo empresa 4" />
        </div>
      </div>
    </section>
  );
}
