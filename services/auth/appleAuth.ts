// services/auth/appleAuth.ts
import { appleAuth } from '@invertase/react-native-apple-authentication';

export const signInWithApple = async () => {
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    return appleAuthRequestResponse; // Return the user information
  } catch (error) {
    throw error; // Handle and propagate the error
  }
};
