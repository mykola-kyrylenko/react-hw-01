import styled from 'styled-components';

const ProfileContainer = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.5);
    width: 400px;
    height: 700px;
`;

const DescriptionBlock = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AvatarImage = styled.img`
    margin: 0 auto;
    width: 240px;
    border-radius: 50%;
`;

const UserName = styled.p`
    margin: 0 auto;
    font-weight: 700;
    font-size: 28px;
`;

const UserTag = styled.p`
    margin: 0 auto;
    font-size: 20px;
    opacity: 0.7;
`;

const Location = styled.p`
    display: block;
    
`;

const StatsList = styled.ul`
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px 2px rgba(0,0,0,0.5);
`;

const StatItem = styled.li`
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    /* box-shadow: 0 0 5px 2px rgba(0,0,0,0.5); */
    
    :not(:first-child) {
        border-left: none;
    };
`;

const StatisticQuantity = styled.span`
    font-size:16px;
    font-weight: 700;
`

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileContainer>
        <DescriptionBlock className="description">
            <AvatarImage
                src={avatar}
                alt="User avatar"
            />
            <UserName>{username}</UserName>
            <UserTag>@{tag}</UserTag>
            <Location>{location}</Location>
        </DescriptionBlock>

        <StatsList>
            <StatItem>
                <span>Followers</span>
                <StatisticQuantity>{stats.followers}</StatisticQuantity>
            </StatItem>
            <StatItem>
                <span>Views</span>
                <StatisticQuantity>{stats.views}</StatisticQuantity>
            </StatItem>
            <StatItem>
                <span>Likes</span>
                <StatisticQuantity>{stats.likes}</StatisticQuantity>
            </StatItem>
        </StatsList>
    </ProfileContainer>
};