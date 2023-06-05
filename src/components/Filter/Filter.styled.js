import styled from '@emotion/styled';

export const FilterItem = styled.form`
  .filter-label {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .filter-input {
    border-radius: 4px;
    border: none;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    width: 170px;
    height: 25px;

    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  .filter-input:focus {
    outline: none;
    
  }
 

  .filter-title {
    margin-top: 0;
    font-size: 26px;
    text-align: center;
    margin-top: 15px;
  }
`;
