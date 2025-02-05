import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
// import Demo from "./Test";
import HeaderMegaMenu from "./Components/Headers";
import Danzyes from "./Components/dz_yes";
// import { Box } from '@mantine/core';

export default function App() {
  return (
      <MantineProvider theme={theme}>
          <HeaderMegaMenu/>
          <div style={{ maxWidth: '1140px', margin: 'auto', marginTop: '16px' }}>
              <Danzyes/>
          </div>
      </MantineProvider>
);
}
