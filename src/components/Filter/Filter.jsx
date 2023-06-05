import React from 'react';
import PropTypes from 'prop-types';
import { FilterItem } from './Filter.styled';
// import { useDispatch, useSelector } from 'react-redux';
// const Filter = ({ title }) => {
//   const dispatch = useDispatch();
//   const filter = useSelector(state => state.filter);
const Filter = ({ filter, changeFilterInput, title }) => (
  //  return (
  <FilterItem>
    <h2 className="filter-title">{title}</h2>
    <div className="find-filter">
      <label className="filter-label">Find contacts by name</label>
      <input
        className="filter-input"
        type="text"
        name="name"
        value={filter}
        onChange={changeFilterInput}
      />
    </div>
  </FilterItem>
);

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};
// пропсы фильтр и changeFilterInput больше не передаются компоненту Filter?
export default Filter;
