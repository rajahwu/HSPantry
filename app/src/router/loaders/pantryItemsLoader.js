import { getPantryItems } from '../../lib/firebase';

async function loader() {
    const pantryItems = await getPantryItems();
    return { pantryItems }
}

export default loader;
  