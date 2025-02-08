import "@mantine/core/styles.css";
import { Progress } from "@mantine/core";
import HeaderMegaMenu from "../Components/HeaderSimple";
import Djs from "../Components/dz_Countdown_time"
import Danzyes from "../Components/dz_yes";

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <div style={{ maxWidth: '1140px', margin: 'auto', marginTop: '16px' }}>
        <Djs />
        <br />
        {/*<Danzyes />*/}
      </div>
    </>
  );
}