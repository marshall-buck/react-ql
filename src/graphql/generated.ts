import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Message = {
  __typename?: 'Message';
  body: Scalars['String'];
  id: Scalars['ID'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createMessage: Message;
  createUser: User;
  deleteMessage: Message;
};


export type MutationCreateMessageArgs = {
  body: Scalars['String'];
  username: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  username: Scalars['ID'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  message: Message;
  messages: Array<Message>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryMessageArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  username: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
  messageAdded?: Maybe<Message>;
};


export type SubscriptionMessageAddedArgs = {
  username: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  messages?: Maybe<Array<Message>>;
  username: Scalars['ID'];
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', username: string, first_name: string, last_name: string }> | null };

export type GetUserMessagesQueryVariables = Exact<{
  username: Scalars['ID'];
}>;


export type GetUserMessagesQuery = { __typename?: 'Query', user?: { __typename?: 'User', messages?: Array<{ __typename?: 'Message', body: string }> | null } | null };


export const GetAllUsersDocument = gql`
    query getAllUsers {
  users {
    username
    first_name
    last_name
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserMessagesDocument = gql`
    query getUserMessages($username: ID!) {
  user(username: $username) {
    messages {
      body
    }
  }
}
    `;

/**
 * __useGetUserMessagesQuery__
 *
 * To run a query within a React component, call `useGetUserMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMessagesQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetUserMessagesQuery, GetUserMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMessagesQuery, GetUserMessagesQueryVariables>(GetUserMessagesDocument, options);
      }
export function useGetUserMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMessagesQuery, GetUserMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMessagesQuery, GetUserMessagesQueryVariables>(GetUserMessagesDocument, options);
        }
export type GetUserMessagesQueryHookResult = ReturnType<typeof useGetUserMessagesQuery>;
export type GetUserMessagesLazyQueryHookResult = ReturnType<typeof useGetUserMessagesLazyQuery>;
export type GetUserMessagesQueryResult = Apollo.QueryResult<GetUserMessagesQuery, GetUserMessagesQueryVariables>;