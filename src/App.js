import React from "react";
import NavBar from "./navBar";
import Form from "./Form";
import PageContent from "./styles/PageContent";
import { ThemeProvider } from "./contexts/ThemeProvider";
import  LanguageProvider  from "./contexts/LanguageContext";

function App() {
  return (
    <div className='App'>
      <>
        <LanguageProvider>
          <ThemeProvider>
            <PageContent>
              <NavBar />
              <Form />
            </PageContent>
          </ThemeProvider>
        </LanguageProvider>
      </>
    </div>
  );
}

export default App;
