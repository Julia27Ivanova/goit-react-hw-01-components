import PropTypes from 'prop-types';
import {
  Friend,
  Status,
  Avatar,
  Name,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListitem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};

FriendListitem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};