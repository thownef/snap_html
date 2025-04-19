export const getColumnPadding = (count: number, index: number) => {
  const paddingList = {
    1: ['0px'],
    2: ['0px 10px 0px 0px', '0px 0px 0px 10px'],
    3: ['0px 13.3333px 0px 0px', '0px 6.66667px', '0px 0px 0px 13.3333px'],
    4: ['0px 15px 0px 0px', '0px 10px 0px 5px', '0px 5px 0px 10px', '0px 0px 0px 15px']
  };
  return paddingList[count as keyof typeof paddingList][index];
}

export const getColumnPaddingRight = (column: number, index: number) => {
  const paddingMap = {
    1: [6],
    2: [16, 6],
    3: [19.3333, 12.6667, 6],
    4: [21, 16, 11, 6]
  };

  return paddingMap[column as keyof typeof paddingMap][index];
}
