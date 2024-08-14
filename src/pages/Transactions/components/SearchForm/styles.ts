import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["blue-300"]};
    color: ${(props) => props.theme["blue-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["blue-500"]};
      border-color: 1px solid ${(props) => props.theme["blue-500"]};
      color: ${(props) => props.theme["gray-100"]};
      transform: all 0.2s;
    }
  }
`;
