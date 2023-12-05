import { ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import theme from "theme/theme";
import { Web3ReactProvider } from "@web3-react/core";
import connectors from "connectors";
import "translations/i18nConfig";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Web3ReactProvider connectors={connectors}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      </Web3ReactProvider>
    </>
  );
};
