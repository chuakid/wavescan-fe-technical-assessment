import { useState } from "react";
import FormComponent from "./components/form/FormComponent";
import { Center } from "@chakra-ui/react";
function App() {
  const [verified, setVerified] = useState(false);
  return (
    <Center h="100vh">
      <FormComponent />
    </Center>
  );
}

export default App;
