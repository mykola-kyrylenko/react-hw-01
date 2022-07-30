import styled from "styled-components";
import PropTypes from 'prop-types';

const ListItem = styled.li`
    margin: 20px 0 20px 0;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding: 20px 0 20px 20px;
    /* background-color: yellow; */
    width: 400px;
    height: 60px;
    border-radius: 20px;
    box-shadow: 1px 1px 4px 2px grey;

    :hover{
        transform: translateX(10px) translateY(-5px);
        cursor: pointer;
    };
`;

const ItemSpan = styled.span`
    margin-right: 20px;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.isOnline=== true? 'green': 'red'};
`;

const ItemImage = styled.img`
    padding-right: 20px;
`;

const ItemName = styled.p`
    font-weight: 400;
    font-size: 30px;
`;

export const FriendListItem =({friends})=>{
    return(
        <>
            {friends.map(({id, avatar, name, isOnline})=>(
                <ListItem key={id}>
                    <ItemSpan isOnline={isOnline}></ItemSpan>
                    <ItemImage src={avatar} alt="User avatar" width="48" />
                    <ItemName className="name">{name}</ItemName>
                </ListItem>
            ))}
        </>
    );
};


FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};