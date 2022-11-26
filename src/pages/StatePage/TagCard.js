import styled from "styled-components";

export default function TagCard({ tag, setSelectedTag, selectedTag }) {
  function selectTag(tag) {
    if (selectedTag.includes(tag)) {
      setSelectedTag("");
    } else {
      setSelectedTag(tag);
    }
  }

  return (
    <TagCardStyle
      onClick={() => selectTag(tag)}
      selectedTag={selectedTag}
      tag={tag}
    >
      {tag}
    </TagCardStyle>
  );
}

export const TagCardStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 12px;
  opacity: ${({ tag, selectedTag }) =>
    selectedTag.includes(tag) ? "100%" : "50%"};
  border-radius: 10px;
  height: 20px;
  cursor: pointer;
  :hover {
    opacity: 100%;
  }
`;
