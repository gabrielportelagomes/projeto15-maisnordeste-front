import styled from "styled-components";

export default function TagCard({ tag, setSelectedTags, selectedTags }) {
  function selectTag(tag) {
    if (!selectedTags.includes(tag)) {
      const selected = [...selectedTags, tag];
      setSelectedTags(selected);
    } else if (selectedTags.includes(tag)) {
      const selected = selectedTags.filter((s) => s !== tag);
      setSelectedTags(selected);
    }
  }

  return (
    <TagCardStyle
      onClick={() => selectTag(tag)}
      selectedTags={selectedTags}
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
  opacity: ${({ tag, selectedTags }) =>
    selectedTags.includes(tag) ? "100%" : "50%"};
  border-radius: 10px;
  height: 20px;
  cursor: pointer;
  :hover {
    opacity: 100%;
  }
`;
