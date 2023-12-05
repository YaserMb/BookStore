import { useState,useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header';
import _, { set } from 'lodash';

function App() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [paginationLinks, setPaginationLinks] = useState([]);

  const base_url = "http://127.0.0.1:8000/api/"
  useEffect(() => {
    fetchBooks();
    // const response = axios.get(`${base_url}books/`)
    //   .then(res => {
    //     setBooks(res.data.data)
    //     setTotalPages(res.data.meta.last_page);
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  , [currentPage])

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/books?page=${currentPage}`);
      setBooks(response.data.data);
      setTotalPages(response.data.last_page);
      setPaginationLinks(response.data.links);
      // console.log(response.data.links)
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  const handlePageChange = (url) => {
    const page = url.split('page=')[1];
    setCurrentPage(page);
  };


  console.log(paginationLinks, "paginationLinks")
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-bg-light mt-5">
            <h1>Books</h1>
            <hr />
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Description</th>
                  <th>Isbn</th>
                  <th>Published</th>
                </tr>
              </thead>
              <tbody>
                {books && books.map(book => (
                  <tr key={book.id}>
                    <td><img src={book.cover} alt={book.title} width="100" /></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.description}</td>
                    <td>{book.isbn}</td>
                    <td>{book.published}</td>
                  </tr>
                ))}
              </tbody>
            </table>


          </div>
        </div>
        <div className="row">
        <nav aria-label="Page navigation">
        <ul className="pagination">
          {Object.entries(paginationLinks).map(([key, link]) => (
            <li key={key} className={`page-item ${!link ? 'disabled' : ''}`}>
              <a
                className="page-link"
                href={link}
                onClick={(e) => {
                  e.preventDefault();
                  link && handlePageChange(link);
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>     
         </div>         
      </div> 
    </>
  )
}

export default App