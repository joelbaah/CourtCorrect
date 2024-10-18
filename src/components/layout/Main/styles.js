import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  width: 100%;
  max-width: 1440px;
`;

export const Title = styled.div`
  text-align: center;

  h1 {
    font-size: 42px;
    font-weight: 600;
    line-height: 55px;
  }

  p {
    color: #6f7170;
    font-size: 20px;
    font-weight: 400px;
    line-height: 28px;
  }
`;


export const SearchEngine = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* Adds space between input and button */
  width: 100%;
  max-width: 1032px; /* Optional: Limit the search engine width */
  margin: 0 auto; /* Center the search engine horizontally */
  padding: 40px
`;

export const InputContainer = styled.div`
  position: relative;
  flex-grow: 1; /* Makes the input container take most of the space */
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 45px; /* Space for icon */
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  height: 48px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  padding: 10px 0 10px 10px;
  top: 52%;
  left: 10px;
  transform: translateY(-50%);
  color: #888;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 16px 24px;
  font-size: 14px;
  border: none;
  background-color: #26C281;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 193px;
  height: 48px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  gap: 1rem;
  width: 100%;
  max-width: 1032px;
  margin: 0 auto;

  select {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    height: 48px;
    width: 246px;
    color: #6F7170;


  }

  input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #6F7170;

  }
`;

export const ClearButton = styled.div`

`