import SigninPage from 'pages/signin';
import SignupPage from 'pages/signup';
import ChatPage from 'pages/chat';
import ProfilePage from 'pages/profile';
import ChangeProfilePage from 'pages/change-profile';
import ChangePasswordPage from 'pages/change-password';
import NotFoundPage from 'pages/not-found';
import ServerErrorPage from 'pages/server-error';

export const getCurrentPage = () => {
  const path = document.location.pathname;
  switch (path) {
    case '/':
      return new SigninPage({});
    case '/signup':
      return new SignupPage({});
    case '/chat':
      return new ChatPage({});
    case '/profile':
      return new ProfilePage({});
    case '/change-profile':
      return new ChangeProfilePage({});
    case '/change-password':
      return new ChangePasswordPage({});
    case '/server-error':
      return new ServerErrorPage({});
    default:
      return new NotFoundPage({});
  }
};
