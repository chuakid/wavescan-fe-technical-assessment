import { Tr, Td } from '@chakra-ui/react'
import ScannerDetails from './ScannerDetails'

const ScannerComponent = ({ scanner }: { scanner: ScannerDetails }) => {
    return (
        <Tr>
            <Td>{scanner.scannerName}</Td>
            <Td>{scanner.ipAddress}</Td>
            <Td>{scanner.scannerSpeed}</Td>
            <Td>{scanner.isAvailable}</Td>
        </Tr>)
}

export default ScannerComponent