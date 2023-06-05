import styled from '@emotion/styled';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

  .form-title {
    margin-top: 0;
    font-size: 32px;
    text-align: center;
    
      &:focus {
        outline: none;
        box-shadow: 0 0 5px #4285f4;
      }
    }
  

  .form-label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-size: 16px;
  }
  .form-btn {
    padding: 8px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background-color: #4285f4;
    border: none;
    border-radius: 4px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      background-color: #3367d6;
    }

    &:active {
      background-color: #115293;
    }
  }

  .form-span
  {
     margin-bottom: 8px;
    font-weight: 700;
  }
  .form-input{
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

