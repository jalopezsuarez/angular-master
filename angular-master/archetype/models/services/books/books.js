'use strict';

ngApplicationFactory.factory('BooksService', BooksService);
function BooksService($http)
{
	var booksService = {};

	booksService.realizarPeticion = function()
	{
		var response = $http.get('app/data/books/books.json');
		return response;
	}

	return booksService;
}
