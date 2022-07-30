import styled from "styled-components";
import PropTypes from 'prop-types';

const TableMenu = styled.table`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TheadMenu = styled.thead`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

const TrMenu = styled.tr`
    display: flex;
`;

const ThMenu = styled.th`
    height: 40px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00bcd5;

    :not(:first-child){
        margin-left: 2px;
    }
`;

const Tbody = styled.tbody`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Tr = styled.tr`
    display: flex;
`;

const Td = styled.td`
   height: 40px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    :not(:first-child){
        /* border: 1px solid black; */
        margin-left: 2px;
    }
`;

const TdType = styled(Td)`
    text-transform: capitalize;
`;

export const TransactionHistory =({items})=>{
    return(
        <TableMenu>
        <TheadMenu>
            <TrMenu>
            <ThMenu>Type</ThMenu>
            <ThMenu>Amount</ThMenu>
            <ThMenu>Currency</ThMenu>
            </TrMenu>
        </TheadMenu>
        {items.map(({id, type, amount, currency})=>(

            <Tbody key={id}>
                <Tr>
                <TdType>{type}</TdType>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
                </Tr>
            </Tbody>
        ))}
        </TableMenu>
    )
};

TransactionHistory.propTypes = {
    id: PropTypes.bool,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};