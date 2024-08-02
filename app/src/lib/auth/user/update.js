const updateUser = async (id, data) => {
  console.log("called updateUser");
  return {
    id,
    ...data,
  };
};

export default updateUser;
