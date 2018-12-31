// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    users: Array<IUser | null>;
    user: IUser | null;
  }

  interface IUserOnQueryArguments {
    id: string;
  }

  interface IUser {
    __typename: 'User';
    id: string;
    name: string;
    lastName: string;
    username: string;
    age: number | null;
    gender: string | null;
    email: string;
    isActive: boolean;
    notificationCount: number;
    availableToHire: boolean;
  }
}

// tslint:enable
