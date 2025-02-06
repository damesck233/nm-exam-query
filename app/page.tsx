import "@mantine/core/styles.css";
import {MantineProvider, Progress} from "@mantine/core";
import { theme } from "../theme";
import HeaderMegaMenu from "./Components/HeaderSimple";
// import Danzyes from "./Components/dz_yes";
import Djs from  "./Components/dz_Countdown_time"
import Danzyes from "./Components/dz_yes";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderMegaMenu />
      <div style={{ maxWidth: '1140px', margin: 'auto', marginTop: '16px' }}>
          <Djs/>
          <br/>
        <Danzyes />
      </div>
    </MantineProvider>
  );
}
