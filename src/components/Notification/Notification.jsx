import { Notific } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <>
      <Notific>{message}</Notific>
    </>
  );
};

export { Notification };
