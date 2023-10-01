const getInitials = (name: string) => {
  const splitName = name.split(" ");
  const initials = splitName.reduce((acc, curr) => {
    return acc + curr[0];
  }, "");
  return initials.toUpperCase();
};

export { getInitials };
