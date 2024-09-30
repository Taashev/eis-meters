import { cast, types } from 'mobx-state-tree';

export const PaginationStore = types
  .model({
    totalPages: types.number, // Общее количество страниц
    currentPage: types.number, // Текущая страница
    offset: types.number,
    displayedPageNumbers: types.array(types.number), // Текущие отображаемые страницы (номера страниц)
    itemsPerPage: types.number, // Количество элементов на одной странице
  })

  .views((self) => ({
    get currentPageToString() {
      return String(self.currentPage);
    },
  }))

  .actions((self) => {
    function setTotalPages(itemsCount: number) {
      self.totalPages = Math.ceil(itemsCount / self.itemsPerPage);
    }

    function setCurrentPage(pageNumber: number | string | null) {
      if (pageNumber === null) {
        pageNumber = 1;
      } else if (typeof pageNumber === 'string') {
        pageNumber = parseInt(pageNumber, 10);
      }

      if (isNaN(pageNumber)) {
        pageNumber = 1;
      }

      self.currentPage = pageNumber;

      setOffset();

      return self.currentPage;
    }

    function setOffset() {
      self.offset = self.itemsPerPage * (self.currentPage - 1);
    }

    function setDisplayedPageNumbers(pageNumbers: number) {
      const pages: Array<number> = [];

      for (let i = 0; i < self.totalPages; i++) {
        const page = pageNumbers + i;

        if (page > self.totalPages) {
          break;
        }

        pages.push(page);
      }

      self.displayedPageNumbers = cast(pages);
    }

    return {
      setTotalPages,
      setCurrentPage,
      setOffset,
      setDisplayedPageNumbers,
    };
  });
