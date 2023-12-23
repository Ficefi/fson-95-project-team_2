import {Pagination} from 'tui-pagination';
// CommonJS:
const Pagination = require('tui-pagination');

const container = document.getElementById('tui-pagination-container');
const myPagination = new Pagination(container, { 
      // options here
});

//All default configuration options.

const myPaginations = new Pagination(container, { 
      // Total number of items
      totalItems: 10,
      // Items per page
      itemsPerPage: 10,
      // Visible pages
      visiblePages: 10,
      // Current page
      page: 1,
      // center aligned
      centerAlign: false,
      // default classes
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      // enable usage statistics
      usageStatistics: true
      
});
//API methods.
  
// gets the current page
myPagination.getCurrentPage();
// goes to page x
myPagination.movePageTo(targetPage);
// resets the pagination
myPagination.reset(totalItems);
// sets the number of items per page
myPagination.gsetItemsPerPage(itemCount);
// sets the total number of items
myPagination.setTotalItems(itemCount);

//Event handlers available.

// after move
myPagination.on('afterMove', function(eventData) {
  var currentPage = eventData.page;
  console.log(currentPage);
});
// before move move
myPagination.on('beforeMove', function(eventData) {
  var currentPage = eventData.page;
  if (currentPage === 10) {
    return false;
    // return true;
  }
});
   