import { useState } from "react";
import FormComponent from "./components/form/FormComponent";
import { Center } from "@chakra-ui/react";
import ScannersComponent from "./components/scanners/ScannersComponent";
function App() {
  const [verified, setVerified] = useState(false);
  return (
    <Center h="100vh">
      {!verified
        ? <FormComponent setVerified={setVerified} />
        : <ScannersComponent />}
    </Center>
  );
}

export default App;
