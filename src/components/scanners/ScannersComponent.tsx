import { Box, Spinner, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { successPage } from '../../api'
import ScannerComponent from './ScannerComponent'
import ScannerDetails from './ScannerDetails'

const ScannersComponent = () => {
    const [scanners, setScanners] = useState<ScannerDetails[]>()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        successPage().then(
            (res) => {
                res.json()
                    .then(scanners => {
                        setScanners(scanners)
                        setLoading(false)
                    })
                    .catch(() => console.log("Malformed scanners"))
            }
        ).catch((reason) => console.log("Failed to get scanners:" + reason))
    }, [])

    return (
        <Box boxShadow="md" p="6" border="1px" borderColor="gray.200" borderRadius={10}>
            {loading ?
                <Spinner />
                : <TableContainer>
                    <Table>
                        <TableCaption>Scanners</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Scanner Name</Th>
                                <Th>IP Address</Th>
                                <Th>Scanner Speed</Th>
                                <Th>Status</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {scanners?.map((scanner, i) => <ScannerComponent key={i} scanner={scanner} />)}
                        </Tbody>
                    </Table>

                </TableContainer>}

        </Box>
    )
}

export default ScannersComponent