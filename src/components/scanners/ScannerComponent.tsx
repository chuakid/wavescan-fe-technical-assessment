import { Tr, Td } from '@chakra-ui/react'
import ScannerDetails from './ScannerDetails'

const ScannerComponent = ({ scanner }: { scanner: ScannerDetails }) => {
    return (
        <Tr>
            <Td>{scanner.scannerName}</Td>
            <Td>{scanner.ipAddress}</Td>
            <Td>{scanner.scannerSpeed} m/s</Td>
            <Td>{scanner.isAvailable ? "Available" : "Engaged"}</Td>
        </Tr>)
}

export default ScannerComponent