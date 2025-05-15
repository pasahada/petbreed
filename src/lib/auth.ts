import { supabase } from './supabase';
import { 
  type User,
  type Session,
  type AuthError,
  type SignInWithPasswordCredentials,
  type SignUpWithPasswordCredentials
} from '@supabase/supabase-js';

// Sign up a new user
export async function signUp(credentials: SignUpWithPasswordCredentials) {
  const { data, error } = await supabase.auth.signUp(credentials);
  return { data, error };
}

// Sign in an existing user
export async function signIn(credentials: SignInWithPasswordCredentials) {
  const { data, error } = await supabase.auth.signInWithPassword(credentials);
  return { data, error };
}

// Sign out the current user
export async function signOut(): Promise<{ error: AuthError | null }> {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// Get the current session
export async function getSession(): Promise<{ session: Session | null; error: AuthError | null }> {
  const { data, error } = await supabase.auth.getSession();
  return { session: data.session, error };
}

// Get the current user
export async function getUser(): Promise<{ user: User | null; error: AuthError | null }> {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
}

// Reset password
export async function resetPassword(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });
  return { data, error };
}

// Update user data
export async function updateUser(userData: { email?: string; password?: string; data?: object }) {
  const { data, error } = await supabase.auth.updateUser(userData);
  return { data, error };
}
