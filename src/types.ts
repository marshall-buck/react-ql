// interface UserApiInterface {
//   username: string;
//   first_name: string;
//   last_name: string;
// }

// interface UsersListInterface{
//   users : UserApiInterface[]
// }
// interface UserPropsInterface {
//   username: string;
//   firstName: string;
//   lastName: string;
// }

// interface MessageApiInterface {
//   id: string | number;
//   body: string;
//   user: UserApiInterface
// }

// export type { MessageApiInterface, UserApiInterface , UserPropsInterface, UsersListInterface};


export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  users?: Maybe<Array<User>>;
  user?: Maybe<User>;
  messages: Array<Message>;
  message: Message;
};


export type QueryUserArgs = {
  username: Scalars['ID'];
};


export type QueryMessageArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createUser: User;
  createMessage: Message;
  deleteMessage: Message;
};


export type MutationCreateUserArgs = {
  username: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  username: Scalars['ID'];
  body: Scalars['String'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
  messageAdded?: Maybe<Message>;
};


export type SubscriptionMessageAddedArgs = {
  username: Scalars['ID'];
};

export type UserInterface = {
  __typename?: 'User';
  username: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  messages?: Maybe<Array<Message>>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  body: Scalars['String'];
  user: User;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}






