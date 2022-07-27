import styled from "styled-components";

const StatisticsContainer = styled.section`
    margin: 0 auto;
    margin-top:100px;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction:column;
`;

const Header = styled.h2`
    margin: 0 auto;
    text-transform: uppercase;
`;

const StatList = styled.ul`
    list-style: none;
    margin: 0 auto;
    margin-top: 30px;
    padding-left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:80px;
    height:80px;
    background-color: ${() => `#${Math.floor(Math.random() * 16777215).toString(16)}`};
    font-size: 20px;
    font-weight: 400;
    color: white;
    text-shadow: 1px 1px 1px #000;
`;

export const Statistics = ({ stats }) => {
    return (
        <StatisticsContainer>
            <Header>Upload stats</Header>
            <StatList>
                {stats.map(({id, label, percentage }) => (
                   <ListItem key={id}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}</span>
                    </ListItem>
                ))}
            </StatList>
        </StatisticsContainer >
    );
};
