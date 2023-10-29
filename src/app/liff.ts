import liff from '@line/liff';

const liffId = process.env.REACT_APP_PUBLIC_LIFF_ID;

if (!liffId) {
  throw new Error('Error: LIFF_ID environment variable not found');
}

console.log({liffId})

export const init = async () => {
  await liff.init({
    liffId,
    withLoginOnExternalBrowser: true
  });
};

export const getProfile = liff.getProfile;

export const getIDToken = liff.getIDToken;

export const closeWindow = liff.closeWindow;