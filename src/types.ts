interface UserApiInterface {
  username: string;
  first_name: string;
  last_name: string;
}
interface UserPropsInterface {
  username: string;
  firstName: string;
  lastName: string;
}

interface MessageApiInterface {
  id: string | number;
  body: string;
  user: UserApiInterface
}

export type { MessageApiInterface, UserApiInterface , UserPropsInterface};





