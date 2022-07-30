import user from '../data/user.json';
import { Profile } from './Profile/Profile.styled';
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics.styled';
import {FriendList} from './FriendList/FriendList.styled';
import {TransactionHistory} from './TransactionHistory/TransactionHistory.styled';
import items from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList/>
      <TransactionHistory items={items}/>
    </>
  );
};
