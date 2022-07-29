import styled from "styled-components";
import {FriendListItem} from './FriendListItem/FriendListItem.styled';
import friends from '../../data/friends.json';

const ItemsFriendsList = styled.ul`
    margin-left: 0;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FriendList = ()=> {
   return(
        <ItemsFriendsList>
            <FriendListItem  friends={friends}/>
        </ItemsFriendsList>
    );
};