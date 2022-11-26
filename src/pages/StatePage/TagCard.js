import styled from "styled-components";

export default function TagCard({ tag }) {
  return <TagCardStyle>{tag}</TagCardStyle>;
}

export const TagCardStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 12px;
  opacity: 50%;
  border-radius: 10px;
  height: 20px;
  cursor: pointer;
  :hover {
    opacity: 100%;
  }
`;
