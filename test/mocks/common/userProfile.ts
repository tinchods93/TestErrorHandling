import fakerator from 'fakerator';

const Fakerator = fakerator();

export const userProfileMock = {
  firstName: Fakerator.names.firstName(),
  lastName: Fakerator.names.lastName(),
  userName: Fakerator.internet.userName(),
  password: Fakerator.internet.password(),
  email: Fakerator.internet.email(),
  phone: Fakerator.phone.number(),
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg',
  gravatar: 'https://www.gravatar.com/avatar/1b5c44921dc7cbe5901a9293ac7954d3',
  status: 'ACTIVE',
};
