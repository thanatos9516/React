import Paginator from 'paginator';

export const pagination = (currentPage, pageSize, dataSet) => {
  let paginator = new Paginator(pageSize, 5);
  let paginatorData = paginator.build(dataSet.length, currentPage);
  let pages = [
    ...Array(paginatorData.last_page + 1 - paginatorData.first_page).keys()
  ].map(index => paginatorData.first_page + index);
  let paginatedData = dataSet.slice(
    paginatorData.first_result,
    paginatorData.last_result + 1
  );
  let data = {
    paginatedData,
    paginatorData,
    pages
  };
  return data;
};

export const filteredItem = (text, filteredBy, pageSize, dataSet) => {
  let filteredData = dataSet.filter(data =>
    data[filteredBy].toLowerCase().includes(text)
  );
  let paginator = new Paginator(pageSize, 7);
  let paginatorData = paginator.build(filteredData.length, 1);
  let pages = [
    ...Array(paginatorData.last_page + 1 - paginatorData.first_page).keys()
  ].map(index => paginatorData.first_page + index);
  let paginatedData = filteredData.slice(
    paginatorData.first_result,
    paginatorData.last_result + 1
  );
  let data = {
    paginatedData,
    paginatorData,
    pages,
    filteredData
  };
  return data;
};