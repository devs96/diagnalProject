export type ApiDataModal = {
  page: PageDataModal;
};

type PageDataModal = {
  'content-items': ContentItemsModal;
};

type ContentItemsModal = {
  content: MovieDataModal[];
};

export type MovieDataModal = {
  name: string;
  'poster-image': string;
};
