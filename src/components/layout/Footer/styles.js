import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #F7FCFA;
  color: #6F7170;
  font-family: 'Inter', sans-serif;

  ul {
    list-style-type: none;
    padding: 0px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    color: black;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 80px;

`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > div,
  & > ul {
    flex: 1;
  }

  li {
    margin-bottom: 10px;
  }

   div:first-child p {
    line-height: 0.4;
    margin-bottom: 5px;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  gap: 200px;
  justify-content: flex-end;
  flex: 2; 

  h3 {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }
`;

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid #dcdcdc;
  margin: 30px 0;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 

  p {
    margin: 0; 
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }

  li {
    margin-left: 10px;
    font-size: 20px;
  }
`
