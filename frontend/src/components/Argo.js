import Image from "react-bootstrap/Image";
// import Logo from "../assests/argo/cub-cadet-logo.svg";
import argo1 from "../assests/argo/argo1.jpg";
import argo2 from "../assests/argo/argo2.jpg";
import argo3 from "../assests/argo/argo3.jpg";

function Argo() {
  return (
    <section>
      <h2>Frontier Series</h2>
      <Image src={argo1} />

      <p>
        The Frontier six-wheeled amphibious vehicle is the starting point for
        our XTV lineup — a point that demonstrates the high standards at ARGO.
        The Frontier 650 6x6 delivers the same dependable power and reliability
        of their bigger siblings to maximize your ability in the woods, mud or
        water. Our Classic transmission with ARGO Progressive Steering (APS) and
        the addition of the new Instant Torque Clutch (ITC) provide smooth
        handling for both new and seasoned outdoor enthusiasts. Feel in control,
        safe and excited at all times. The new ‛22 Frontier 650 6x6 continues to
        rise above the industry's standard definition of entry-level.
      </p>

      <h2>Aurora Series</h2>
      <Image src={argo2} />

      <p>
        The Aurora 800 SX is raring to go on its next adventure. With the full
        amphibious body, the Aurora 8x8 Series is the premium platform for ARGO,
        making it the most advanced and powerful XTV available. The massive
        V-Twin engine options give you the high-performance power to conquer
        obstacles at work or at play. The new Instant Torque Clutch (ITC)
        technology complements the Admiral transmission with ARGO Progressive
        Steering for a smooth and comfortable ride. This modern-day
        land-and-water warrior is ready to take on nature's toughest battles.
        Charge!
      </p>

      <h2>Xplorer Series</h2>
      <Image src={argo3} />

      <p>
        The ARGO team has been on a mission since debuting the ARGO Xplorer XR
        Series five short years ago to offer a better ATV, period. Better
        horsepower. Better suspension. Better comfort. Better, well, you get it.
        The all-new 2022 XR 500 adds a fresh laundry list of enhancements,
        including the new 443cc liquid-cooled engine with EFI, new performance
        clutching and class-leading suspension. We don't subtract essential
        features, like engine breaking, to save a few bucks; we make everything
        better. Go see why an ARGO XR 500 is a better fit for you.
      </p>
    </section>
  );
}

export default Argo;
