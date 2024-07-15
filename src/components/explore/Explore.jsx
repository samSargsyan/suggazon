import './explore.scss';
import data from "../data";
import Item from '../item/Item';
import React, { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Explore = ({isOpen, searchValue}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / 20);

  return (
    <div className={`homeGoods ${isOpen ? 'homeGoodsOpen' : ''}`}>
      <div className="items">
          {data
          .slice(20 * (currentPage - 1), 20 * currentPage)
          .map((item, index) => {
            return (
                <Item item={item} key={index * item.id} />
            );
          })}
        </div>
        {totalPages !== 1 && <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />}
    </div>
  )
}

export default Explore;