import Image from "react-bootstrap/Image";
import cub1 from "../assests/cubcadet/cub-challenger1.jpg";
import cub2 from "../assests/cubcadet/cub-challenger2.jpg";
import cub3 from "../assests/cubcadet/cub-challenger3.jpg";

function CubCadet() {
  return (
    <>
      <h1>Challenge accepted.</h1>

      <Image src={cub1} rounded-2 />

      <h3>Standard features. Fully loaded.</h3>
      <p className="content">
        Conquer your challenges with a roof, a winch, LED headlights and
        high-sided doors, all standard on every MX 550 and 750 EPS.
      </p>

      <Image src={cub2} className="rounded-2" />
      <h3>Durability. Versatility. Possibility.</h3>
      <p className="content">
        With a reinforced frame for increased strength and three-way adjustable
        shocks to customize your ride, you can confidently tackle rugged terrain
        and off-road adventures.
      </p>

      <Image src={cub3} className="rounded-2" />
      <h3>Comfort all the Livelong day.</h3>
      <p className="content">
        Noise-dampening ducts, engine isolation for vibration reduction and
        high-sided sealed doors for dirt, mud and water protection all add up to
        a more comfortable, more enjoyable ride.
      </p>
    </>
  );
}

export default CubCadet;
