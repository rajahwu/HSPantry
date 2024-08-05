// src/components/services/pantry/loaders.js
import { getPantryItems } from '@lib/db';
import { getAuth } from 'firebase/auth';

export async function pantryItemsLoader({ params }) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User not authenticated');
  }

  const pantryId = params.pantryId;
  const items = await getPantryItems(user.uid, pantryId);

  return { pantryItems: items };
}
