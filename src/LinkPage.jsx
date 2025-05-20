import React, { useState } from 'react';
import { Links } from './data';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 10;

const LinkPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Links.length / ITEMS_PER_PAGE);

  const handleClick = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const paginatedLinks = Links.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const renderPageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`page-btn ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className='get-link-div link-grid'>
      <h1 className="title">Trending Blogs</h1>
      <h4>We share insightful articles on [your niche] to inform, inspire, and connect readers. Join us on this journey of learning and discovery. Happy reading! 🚀</h4>

      {paginatedLinks.map((blog) => (
        <Link  to={blog.link} key={blog.id} className='abc'>
          <div className='get-link get-link-no'>
            <div>
              <img width={200} src={blog.img} alt="" />
            </div>
            Post no. {blog.post}
            <button className='get-link'>
              Click for video
            </button>
          </div>
        </Link>
      ))}

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        {renderPageButtons()}
        <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LinkPage;
