import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SocialLogin = ({ socialLogin }) => {
  return (
    <div>
      <div>
        <Button
          onClick={() => socialLogin('facebook')}
          type="button"
          style={{ marginBottom: '10px' }}
          fluid
          color="facebook"
        >
          <Icon name="facebook" /> Login with Facebook
        </Button>

        <Button onClick={() => socialLogin('google')} type="button" fluid color="google plus">
          <Icon name="google plus" />
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
