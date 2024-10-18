import React from "react";
import * as S from "./styles";
import { FaSearch } from "react-icons/fa";

export default function Main() {
  return (
    <S.Main>
      <S.Title>
        <h1>AI-Powered Regulatory Search</h1>
        <p>
          Use the search engine to search for publications from courts and
          regulators.
        </p>
      </S.Title>
      <S.SearchEngine>
        <S.InputContainer>
          <S.Input type="search" placeholder="Search" />
          <S.SearchIcon>
            <FaSearch />
          </S.SearchIcon>
        </S.InputContainer>
        <S.Button>Search</S.Button>
      </S.SearchEngine>
      <S.Filters>
        <select>
        <option value="" disabled>Category</option>
          <option value="legal">Legal</option>
          <option value="financial">Financial</option>
          <option value="regulatory">Regulatory</option>
        </select>
        <select>
        <option value="" disabled>Decision</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
        <select>
        <option value="" disabled>Company</option>
          <option value="company1">Company 1</option>
          <option value="company2">Company 2</option>
          <option value="company3">Company 3</option>
        </select>
        <input type="date" />
      </S.Filters>
      <S.ClearButton><a href="/">Clear Filters</a></S.ClearButton>
    </S.Main>
  );
}
