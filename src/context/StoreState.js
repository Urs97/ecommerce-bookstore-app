import React, { useEffect, useReducer } from 'react';

const [categoryName, setCategoryName] = useState('science_fiction');
const url = `http://openlibrary.org/subjects/${categoryName}.json?limit=27&offset=0`;
const [isLoading, data] = useHttp(url, `store_${categoryName}_data`, [categoryName]);
const [filteredData, setFilteredData] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
const booksPerPage = 9;
const storeMainRef = useRef(null);
const filterByPriceRef = useRef(null);

useEffect(() => {
    setFilteredData(null);
    (filterByPriceRef.current && filterByPriceRef.current.resetFilter());
}, [categoryName])

// Change Book Genre
const handleSetCategoryName = (name) => setCategoryName(name);

// Filter By Price
const handleFilterByPrice = (minPrice, maxPrice) => {
    setFilteredData(data.works.filter(book => book.price[0] >= minPrice && book.price[0] <= maxPrice));
    setCurrentPage(1);
};

// Scroll to ref element
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop, 'smooth');
const executeScroll = () => scrollToRef(storeMainRef);

// Change Page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

if(!isLoading && data) {

    // Pagination functionality
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentData = filteredData ? filteredData : data.works;
    const currentBooks = currentData.slice(indexOfFirstBook, indexOfLastBook); 
}


