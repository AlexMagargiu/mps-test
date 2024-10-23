const createDataService = (entityName) => {
  const STORAGE_KEY = `production-${entityName}`;

  return {
    getAll: async function () {
      try {
        const items = localStorage.getItem(STORAGE_KEY);
        return items ? JSON.parse(items) : [];
      } catch (error) {
        console.error(`Error retrieving ${entityName}:`, error);
        throw new Error(
          `Failed to retrieve ${entityName}: ${
            error.message || "Unknown error"
          }`
        );
      }
    },

    create: async function (itemData) {
      try {
        const items = await this.getAll();
        const newItem = {
          id: crypto.randomUUID(),
          ...itemData,
          createdAt: new Date().toISOString(),
        };

        items.push(newItem);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        return newItem;
      } catch (error) {
        console.error(`Error creating ${entityName}:`, error);
        throw new Error(
          `Failed to create ${entityName}: ${error.message || "Unknown error"}`
        );
      }
    },

    update: async function (id, itemData) {
      try {
        const items = await this.getAll();
        const index = items.findIndex((item) => item.id === id);

        if (index === -1) {
          throw new Error(`${entityName} not found`);
        }

        const updatedItem = {
          ...items[index],
          ...itemData,
          updatedAt: new Date().toISOString(),
        };

        items[index] = updatedItem;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        return updatedItem;
      } catch (error) {
        console.error(`Error updating ${entityName}:`, error);
        throw new Error(
          `Failed to update ${entityName}: ${error.message || "Unknown error"}`
        );
      }
    },

    delete: async function (id) {
      try {
        const items = await this.getAll();
        const filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredItems));
        return true;
      } catch (error) {
        console.error(`Error deleting ${entityName}:`, error);
        throw new Error(
          `Failed to delete ${entityName}: ${error.message || "Unknown error"}`
        );
      }
    },

    getById: async function (id) {
      try {
        const items = await this.getAll();
        const item = items.find((item) => item.id === id);

        if (!item) {
          throw new Error(`${entityName} not found`);
        }

        return item;
      } catch (error) {
        console.error(`Error retrieving ${entityName}:`, error);
        throw new Error(
          `Failed to retrieve ${entityName}: ${
            error.message || "Unknown error"
          }`
        );
      }
    },
  };
};

export default createDataService;
