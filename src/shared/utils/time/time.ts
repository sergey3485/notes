export const getCurrentDate = (): string => {
  const date = new Date();
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (dateFormat.format(date));
};

export const formatDate = (date: Date | string) => {
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  });

  const stringToDate = new Date(date);

  return (dateFormat.format(stringToDate));
};
