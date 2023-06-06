import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
        <meta name="title" content={`HELLO IT's meta info`}/>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
