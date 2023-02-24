import { Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, NumberInput, NumberInputField, Select, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { submitForm } from '../../api';
import { SCANNING_MODES } from '../../constants';

const FormComponent = ({ setVerified }: { setVerified: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const FormSchema = Yup.object().shape({
    projectName: Yup.string()
      .min(3, "Too short!")
      .required("Required!"),
    scanningMode: Yup.string().oneOf(SCANNING_MODES),
    scanDimensionsX: Yup.number()
      .integer("Must be integer!")
      .min(1, "Must be >= 1")
      .required("Required!"),
    scanDimensionsY: Yup.number()
      .integer("Must be integer!")
      .min(1, "Must be >= 1")
      .required("Required!"),
    scannerFrequency: Yup
      .number()
      .min(1, "Must be >= 1")
      .required("Required!")
  });

  const formik = useFormik({
    initialValues: {
      "projectName": "",
      "scanningMode": SCANNING_MODES[0],
      "scanDimensionsX": 1,
      "scanDimensionsY": 1,
      "scannerFrequency": 1.5
    },
    onSubmit: (values) => {
      submitForm(values).then(res => {
        if (res.status == 200) {
          setVerified(true)
        }
      })
    },
    validationSchema: FormSchema
  })

  return (
    <Box boxShadow="md" p="6" border="1px" borderColor="gray.200" borderRadius={10}>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl isInvalid={!!formik.errors.projectName}>
            <FormLabel htmlFor="projectName">Project Name:</FormLabel>
            <Input
              id="projectName"
              name="projectName"
              onChange={formik.handleChange}
              value={formik.values.projectName}
            />
            <FormErrorMessage >{formik.errors.projectName}</FormErrorMessage>

          </FormControl>

          <FormControl>
            <FormLabel htmlFor="scanningMode">Scanning Mode</FormLabel>
            <Select
              id="scanningMode"
              name="scanningMode"
              onChange={formik.handleChange}
              value={formik.values.scanningMode}
            >
              {SCANNING_MODES.map(mode => <option key={mode} value={mode}>{mode}</option>)}
            </Select>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.scanDimensionsX || !!formik.errors.scanDimensionsY}>
            <FormLabel as="h5">Scan Dimensions (cm)</FormLabel>
            <HStack>
              <FormLabel htmlFor='scanDimensionsX'>X</FormLabel>
              <Input value={formik.values.scanDimensionsX} onChange={formik.handleChange}
                isInvalid={!!formik.errors.scanDimensionsX} id="scanDimensionsX" type="number" min="1" />
              <FormLabel htmlFor='scanDimensionsY'>Y</FormLabel>
              <Input value={formik.values.scanDimensionsY} onChange={formik.handleChange}
                isInvalid={!!formik.errors.scanDimensionsY} id="scanDimensionsY" type="number" min="1" />
            </HStack>
            <FormErrorMessage>{formik.errors.scanDimensionsX}</FormErrorMessage>
            <FormErrorMessage>{formik.errors.scanDimensionsY}</FormErrorMessage>

          </FormControl>
          <FormControl isInvalid={!!formik.errors.scannerFrequency}>
            <FormLabel htmlFor='scannerFrequency'>Scanner Frequency (GHz)</FormLabel>
            <NumberInput defaultValue={formik.values.scannerFrequency} onChange={formik.handleChange}
              id="scannerFrequency" min={1} precision={1}>
              <NumberInputField />
            </NumberInput>
            <FormErrorMessage>{formik.errors.scannerFrequency}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Submit
          </Button>
        </VStack>
      </form>

    </Box >
  )
};

export default FormComponent;