import React from 'react';
import PropTypes from 'prop-types';
import { FilterItem, StyledSearchInput } from './Filter.styled';

// import { useDispatch, useSelector } from 'react-redux';
// const Filter = ({ title }) => {
//   const dispatch = useDispatch();
//   const filter = useSelector(state => state.filter);
const Filter = ({ filter, changeFilterInput, title }) => (
  //  return (
  <FilterItem>
    {title && <h2 className="filter-title">{title}</h2>}
    <div className="find-filter">
      <label className="filter-label">Find contacts by name</label>
      <StyledSearchInput
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        name="name"
        value={filter}
        onChange={changeFilterInput}
      />
    </div>
  </FilterItem>
);

Filter.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};
// пропсы фильтр и changeFilterInput больше не передаются компоненту Filter?
export default Filter;
