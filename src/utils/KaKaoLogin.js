import {
    KakaoOAuthToken,
    KakaoProfile,
    getProfile as getKakaoProfile,
    login,
    logout,
    unlink,
  } from '@react-native-seoul/kakao-login';

export const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    return token;
};

export const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();
    return null;

    // setResult(message);
};

// export const getKakaoProfile = async (): Promise<void> => {
//     const profile: KakaoProfile = await getProfile();

//     setResult(JSON.stringify(profile));
// };

// export const unlinkKakao = async (): Promise<void> => {
//     const message = await unlink();

//     setResult(message);
// };
