import { getPantryItems } from '../../lib/db';

async function loader() {
    const pantryItems = await getPantryItems();
    return { pantryItems }
}

export default loader;
  