import axios from 'axios';

// action type
export const GET_POST_DETAILS = 'GET_POST_DETAILS';
export const GET_POST_DETAILS_SUCCESS = 'GET_POST_DETAILS_SUCCESS';
export const GET_POST_DETAILS_FAILURE = 'GET_POST_DETAILS_FAILURE';

// action creator
export const getPostDetails = () => ({ type: GET_POST_DETAILS });
export const getPostDetailsSuccess = (post) => ({
  type: GET_POST_DETAILS_SUCCESS,
  payload: post,
});
export const getPostDetailsFailure = () => ({ type: GET_POST_DETAILS_FAILURE });

export const fetchPostDetails = (id) => {
  const generateProfileImage = (name) => {
    const backgroundColor = Math.round(Math.random() * 0xffffff).toString(16);
    const textColor = Math.round(Math.random() * 0xffffff).toString(16);

    return `https://placehold.co/64x64/${backgroundColor}/${textColor}?text=${name}`;
  };

  const user = [
    {
      name: 'jay',
      profileImage: generateProfileImage('jay'),
    },
    {
      name: 'mark',
      profileImage: generateProfileImage('mark'),
    },
    {
      name: 'tony',
      profileImage: generateProfileImage('tony'),
    },
    {
      name: 'alice',
      profileImage: generateProfileImage('alice'),
    },
    {
      name: 'mina',
      profileImage: generateProfileImage('mina'),
    },
    {
      name: 'grace',
      profileImage: generateProfileImage('grace'),
    },
    {
      name: 'niki',
      profileImage: generateProfileImage('niki'),
    },
    {
      name: 'anna',
      profileImage: generateProfileImage('anna'),
    },
    {
      name: 'cherry',
      profileImage: generateProfileImage('cherry'),
    },
    {
      name: 'helen',
      profileImage: generateProfileImage('helen'),
    },
  ];

  return async (dispatch) => {
    dispatch(getPostDetails());

    try {
      const reponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );

      const post = {
        ...reponse.data,
        username: user[reponse.data.userId - 1].name,
        profileImage: user[reponse.data.userId - 1].profileImage,
      };

      dispatch(getPostDetailsSuccess(post));
    } catch (error) {
      dispatch(getPostDetailsFailure());
    }
  };
};
