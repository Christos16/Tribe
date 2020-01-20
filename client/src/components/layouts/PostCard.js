import React from 'react';
import { Card, Icon, Label, Image } from 'semantic-ui-react';
import moment from 'moment';

const PostCard = ({
  post: { body, createAt, id, username, likeCount, commentCount, likes }
}) => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createAt).fromNow()}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Button</p>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
