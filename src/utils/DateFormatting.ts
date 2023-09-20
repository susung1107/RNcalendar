import moment from 'moment';

export const formattingGetYMD = ({ date }: any) => {
  return moment(date).format('YYYY-MM-DD');
};

export const formattingGetYear = ({ date }: any) => {
  return moment(date).format('YYYY');
};

export const formattingGetMonth = ({ date }: any) => {
  return moment(date).format('MM');
};

export const formattingGetDay = ({ date }: any) => {
  return moment(date).format('DD');
};
