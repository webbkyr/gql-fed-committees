export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};


export type Query = {
   __typename?: 'Query';
  getCommittee?: Maybe<Committee>;
};


export type QueryGetCommitteeArgs = {
  id: Scalars['ID'];
};

export type Committee = {
   __typename?: 'Committee';
  id: Scalars['ID'];
  chamber: Scalars['String'];
  name: Scalars['String'];
  jurisdiction?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  minorityUrl?: Maybe<Scalars['String']>;
  thomasId: Scalars['String'];
  subcommittees: Array<Maybe<Committee>>;
  offices?: Maybe<Array<Maybe<Office>>>;
};

export enum Control {
  Maj = 'MAJ',
  Min = 'MIN'
}

export type Office = {
   __typename?: 'Office';
  control?: Maybe<Control>;
  address: Scalars['String'];
  phone: Scalars['String'];
};

