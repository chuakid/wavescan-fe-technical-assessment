import { Tr, Td, Button } from '@chakra-ui/react'
import ScannerDetails from './ScannerDetails'

const ScannerComponent = ({ scanner }: { scanner: ScannerDetails }) => {
    return (
        <Tr>
            <Td>{scanner.scannerName}</Td>
            <Td>{scanner.ipAddress}</Td>
            <Td>{scanner.scannerSpeed} m/s</Td>
            <Td>{scanner.isAvailable ? "Available" : "Engaged"}</Td>
            <Td><Button isDisabled={!scanner.isAvailable} colorScheme="blue">Connect</Button></Td>
        </Tr>)
}

export default ScannerComponent