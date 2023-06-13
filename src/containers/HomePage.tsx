import SearchModalToggle from "@components/search/SearchModalToggle";
import styled from "@emotion/styled";

const Centered = styled.div`
  border: 1px solid blue;
  margin: 20% auto;
`;

const HomePage = () => {
  return (
    <Centered>
      <SearchModalToggle />
    </Centered>
  );
};

export default HomePage;
