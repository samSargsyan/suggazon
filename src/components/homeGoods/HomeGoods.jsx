import './homeGoods.scss';
import data from "../data";
import Item from '../item/Item';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const HomeGoods = ({isOpen, searchValue}) => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const filteredData = data.filter((item) => {
    return item.category.includes(category)
  });
  const totalPages = Math.ceil(filteredData.length / 20);

  return (
    <div className={`homeGoods ${isOpen ? 'homeGoodsOpen' : ''}`}>
      <div className="items">
          {filteredData
          .slice(20 * (currentPage - 1), 20 * currentPage)
          .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
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

export default HomeGoods;