import SignupPage from '@/components/auth/signup/SignupPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup | Linktree',
};

const page = () => {
  return <SignupPage />;
};

export default page;
