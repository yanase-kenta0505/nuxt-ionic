/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCrateByOwnername = /* GraphQL */ `
  subscription OnCrateByOwnername($owner: String!) {
    onCrateByOwnername(owner: $owner) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
