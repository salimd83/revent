import React from "react";
import { Segment, Image, Header, Grid } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

const UserDetailsImage = ({ photos }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="image" content="Photos" />

        <Image.Group size="small">
          {photos && photos.map(photo => (
            <LazyLoad key={photo.id} height={150} placeholder={<Image src="/assets/user.png" />}>
              <Image key={photo.id} src={photo.url} />
            </LazyLoad>
          ))}
        </Image.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailsImage;
