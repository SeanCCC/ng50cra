import { auth } from '@/app/firebase';
import { OAuthProvider, signInWithCredential } from 'firebase/auth';

export const authWithLine = async (idToken: string) => {
  const provider = new OAuthProvider('oidc.line');
  const credential = provider.credential({ idToken });
  await signInWithCredential(auth, credential);
};